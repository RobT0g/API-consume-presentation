import axios from 'axios'

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

function main(){
    req.get('sites').then(data => {
        for(let i in data.data){
            if(i == 3){
                break
            }
            req.get(`sites/${data.data[i].id}`).then(data2 => {
                console.log(data2.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }).catch(err => {
        console.log(err)
    })
}

main()


