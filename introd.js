console.log('Hello World!')

//Normal Function
function run(){
    console.log('Normal Hello World!')
}

//Anonymous function
((msg) => {
    console.log(msg)
})('Anonymous Hello World')

//Functions as parameters (lambda functions in python are the equivalent to this)
let a = (msg) => {
    console.log(msg)
}

run()
a('Not as anonymous Hello World')