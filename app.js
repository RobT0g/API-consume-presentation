import axios from 'axios'

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

function main(){
    req.get('sites').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}

main()


