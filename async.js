(new Promise((resolve, reject) => {
    resolve('Just a fancy Hello World!')
})).then(data => {
    console.log(data)
})

async function run(){
    console.log((await new Promise((resolve, reject) => {
        resolve('The fanciest Hello World in town!')
    })))
}

run()