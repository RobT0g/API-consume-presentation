import axios from 'axios'

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

function main(){
    req.get('sites/893').then(data => {
        console.log(data.data)
    }).catch(err => {
        console.log(err)
    })
}

main()


