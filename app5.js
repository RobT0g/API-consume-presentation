import axios from 'axios'

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

async function main(){
    try{
        let data = await req.get('sites')
        for(let i in data.data){
            if(i == 3){
                break
            }
            let data2 = await req.get(`sites/${data.data[i].id}`)
            let reginfo = await req.get(`regions/${data2.data.regionName}`)
            console.log(reginfo)
        }
    } catch(err){

    }
}

main()


