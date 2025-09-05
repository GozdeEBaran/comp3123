console.log("Hello World");
var a = 100
console.log(a)
a = "Hello"
console.log(a)

let c = 100
// let c = "Hello" Can't assign
 console.log(c)
 console.log(c)
{
    console.log(c)
    c = 200
    console.log(c)
    a = "world"
}
    console.log(c)

var x = null
console.log(typeof a)
console.log(typeof true)
console.log(typeof x)
console.log(typeof undefined)
console.log(typeof aa)

//Function Expression
greet = function(){
    return 'welcome'
}
//Arrow Function
greet = () => {
    return 'welcome'
}

// Function Declaration
function greet(){
    return 'welcome'
}

console.log(typeof greet)

//Object Literal - Without Template Class
let emp = {
    eid:1,
    100 : 'Hundred',
    name: "Pritesh",
    "city name": "NYC",
    print: function(){
        console.log(this.eid)
    }
}

console.log(typeof emp)
console.log(emp.eid)
console.log(emp["100"])
console.log(emp["city name"]) // Object Literal
const key1 = 'eid'

console.log(emp.key1) 
console.log(emp[key1])
