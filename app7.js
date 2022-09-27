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
            reqs.push(new Promise((resolve, reject) => {
                req.get(`sites/${data.data[i].id}`).then(data1 => {
                    req.get(`regions/${data1.data.regionName}`).then(data2 => {
                        resolve(data2.data)
                    }).catch(err => {reject(err)})
                }).catch(err => {reject(err)})
            }))
        }
        let data2 = await Promise.all(reqs)
        console.log(data2)
    } catch(err){
        console.log(err)
    }
}

main()


