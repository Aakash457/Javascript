// control flow

// const { use } = require("react")

// if 

// if (conditon){
//     scope
// }

// const isuserLogin = true

// if (isuserLogin){
//     console.log("yes uer login")
// }else(
//     console.log("no user is not login")
// )

// < , > ,<= ,>=,==,!=,!,=== these are the operator used for compreshion

// const isuserLogin = true
// const tempratur = 90
// if (tempratur < 50){
//     console.log("less it is")
// }else{
//     console.log("greater than 50")
// }


// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`user power ${power}`)
// }

// const balance = 1000
// if (balance > 500) console.log("test")

// const balance = 1000
// if (balance < 500){
//     console.log("less tha 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else{
//     console.log("less than 12000")
// }


// const userLoggedIn = true;
// const debitcard = true;
// const loggesEmail = false;

// if (userLoggedIn && debitcard){
//     console.log("you are allow to do shopping")
// }else{
//     console.log("you are not allow to do shopping")
// };

// if (loggesEmail || userLoggedIn) {
//     console.log("logged in now you can do activity");
// }


//----------- Switch case ------------

// const month = 3
 
// switch (month){
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("Feb")
//         break;
//     case 3:
//         console.log("Mar")
//         break;
//     case 4:
//         console.log("Apr")
//         break;
//     case 5:
//         console.log("May")
//         break;

//     default:
//         console.log("rest of the month")
//         break;
// }

// Truethy value 

// const userEmail = "a@mail"

// if (userEmail){
//     console.log("got the user email")
// }else{
//     console.log("Don't have the email")
// }

// these are the false value othere than that all are truty value
// falsy values are : false , 0 , -0 , BigInt 0n, "" , null , undefined, NaN 

// truty value
// " ",[],{},function(){} these are the exception of truthy value

// const email = []

// if (email.length === 0 ){
//     console.log("the array is empty")
// }

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0){
//     console.log("object is empty")
// }


// Nullish Coalescing Operator (??): null undefined
// here it will handel the null before the ?? if the null value is there than the other side of the ?? will execute

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)



// Terniary Operator
// condition ? true : false

const iceTea = 100
iceTea >= 80 ? console.log("more tha 80"): console.log("less than 80")