// for loop 

for (let i = 0; i < 10 ; i++){
    const element = i;
    // console.log(element)
}

// const myAarry = ["aakahs","yadav","vikash"]
// for (let i = 0; i < myAarry.length ; i++){
//     const element = myAarry[i]
    // console.log(element)
// }

// break and continue

// for (let i = 1; i < 10 ; i++){
//     if (i == 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

// for (let i = 1; i < 10 ; i++){
//     if (i == 5){
//         console.log("5 is detected");
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }


// ------------ do while -----------------------

// let i = 0
// while (i <= 10){
//     console.log(`the i is ${i}`);
//     i = i+2
// }


let myAarry = ["aakahs","yadav","vikash"]

let arr = 0

while (arr<myAarry.length){
    console.log(`here is the index is ${arr}value of array ${myAarry[arr]}`)
    arr = arr + 1
}


let score = 0
do {
    console.log(`here the score is ${score}`);
    score++
}while (score <= 10)