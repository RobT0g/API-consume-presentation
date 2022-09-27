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
                req.get(`regions/${data2.data.regionName}`).then(data3 => {
                    console.log(data3.data)
                    req.get().then(data4 => {
                        req.get().then(data5 => {
                            req.get().then(data6 => {
                                req.get().then(data7 => {
                                    req.get().then(data8 => {
                                        req.get().then(data9 => {
                                            //CALLBACK HELL
                                        })
                                        
                                    })
                                    
                                })
                                
                            })
                            
                        })

                    })
                })
                .catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        }
    }).catch(err => {
        console.log(err)
    })
}

main()


