import axios from 'axios'
import {writeFileSync} from 'fs'

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

async function main(){
    try{
        let data = await req.get('sites')
        let reqs = []
        for(let i in data.data){
            if(i == 3){
                break
            }
            reqs.push(new Promise(async (resolve, reject) => {
                try{
                    let data1 = await req.get(`sites/${data.data[i].id}`)
                    //console.log(data1.data)
                    if (data1.data.regionName)
                        resolve((await req.get(`regions/${data1.data.regionName}`)).data)
                    else
                        resolve(`ERROR! The location ${data1.data.name} has no region specified.`)
                } catch(err){
                    reject(err)
                }
            }))
        }
        let data2 = await Promise.all(reqs)
        writeFileSync('Output.json', JSON.stringify(data2))
        console.log(data2)
    } catch(err){
        console.log(err)
    }
}

main()


