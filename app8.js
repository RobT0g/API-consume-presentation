import axios from 'axios'

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
                    resolve((await req.get(`regions/${data1.data.regionName}`)).data)
                } catch(err){
                    reject(err)
                }
            }))
        }
        let data2 = await Promise.all(reqs)
        console.log(data2)
    } catch(err){
        console.log(err)
    }
}

main()


