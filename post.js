import axios from 'axios'
//const axios = require('axios')

let req = axios.create({
    baseURL: 'http://arest.me/api',
    timeout: 15000
})

function main(){
    req.get('sites/893').then(data => {
        let d = data.data
        d.name = 'My comfy bed'
        d.yearInscribed = '2022'
        d.descriptionMarkup = 'This is where I take a good nap at the end of a good day.'
        d.location.name = 'Robson bed that is located on his house, on his addres, on his city in Brazil =)'
        req.post('sites', d).then(data2 => {
            console.log(data2)
            req.get(`sites/${data2.data.id}`).then(data3 => {
                console.log(data2.data)
            })
        })
    }).catch(err => {
        console.log(err)
    })
}

main()


