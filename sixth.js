// function

function saymyname(){console.log("A")
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
// saymyname()

function addTwoNumber(num1,num2){
    return num1+num2
}

// console.log(addTwoNumber(4,7))

function loginUserMessage(username){
    return `${username} just login in the session`
}

// console.log(loginUserMessage("Aakash"))


//this is how we take n number of argument 
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300))


const user = {
    name : "Aakash",
    age : 99
}

function showDetail(anyobject){
    return ` username is ${anyobject.name} and age is ${anyobject["age"]}`
}

// console.log(showDetail(user))

// console.log(showDetail({
//     name :"vina",
//     age : 1
// }))


const A = [11,22,33,44,555]
function sec(x){
    return x[1]
}
// console.log(sec(A))
// console.log(sec([1,2,34,4]))


//********* Scope **********
// Scope means i javascript bussiness logic in currly bracket

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "aakash"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


function addone(value){
    return value + 1
}
// console.log(addone(5))

const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(8))


// --------------- this and arrow function ----------------
// this will reffer to the current context and in window the global context is window


const user1 = {
    username : "Aakash",
    age : 22,
    welcome : function(){
        console.log(`${this.username} welcome to the learning`)
    }

}
// user1.welcome()
// user1.username = "viv"
// user1.welcome()


// in normal we cannot use the this keyword
// function chai(){
//     let username = "Aakash"
//     console.log(this.username)
// }
// chai()

// const a = function(){
//     let username = "Aakash"
//     console.log(this.username)
// }
// a()


const chai = () => {
    let username = "Aakash"
    console.log(this)
}
// chai()


// in arrow function when we used curly braket we have to use return keyword 
const s = (num1,num2) => {
    return num1 + num2
}
// console.log(s(1,2))

// in implicte function when we use paranthesis we don't have  to use return keyword
const k = (num1, num2) => (num1+num2) 
// console.log(k(1,2))


// Immediately invoked function expression (iife)
// this is used for immediately invoked the function and prevent the pollution from global scope (mean value is not affcetd by global variable)


// named iife
(function chai(){
    console.log(`hii`);
})();


//unnamed iife
( () => {
    console.log(`DB connected two ${name}`)

})("Aakash")

difference between the regular function and arroww function 
1. argument : the regular function has acess to the argument while arroww function doesnt
2. implicte return : normal function does not use implicte return while arroww function does
3. this : normal function use this which point to there current context while arroww function does not have there context

