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
            reqs.push(req.get(`sites/${data.data[i].id}`))
        }
        let data1 = await Promise.all(reqs)
        console.log(data1.map(i => i.data))
        reqs = []
        for(let i in data1){
            reqs.push(req.get(`regions/${data1[i].data.regionName}`))
        }
        let data2 = await Promise.all(reqs)
        console.log(data2.map(i => i.data))
    } catch(err){
        console.log(err)
    }
}

main()


