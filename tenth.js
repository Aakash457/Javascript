//MAP , FILTER ,REDUCE

const myNums = [1,2,3,4,5,6,7,8]
const number = myNums.filter( (num) => num > 4 )
// console.log(number)

const newnums = []
myNums.forEach( (num) => {
    if (num > 4){
        newnums.push(num)
    }
})
// console.log(newnums)

// MAP

const N = [1,2,3,4,5,6]
// const m = N.map( (num) => {return num+1})

const newNumss = N.map((nums) => nums*10).map((nums)=>nums +1 ).filter((nums)=> nums > 40)
console.log(newNumss)


//REDUCE 

const array1 = [1,2,3,4,5]
// let a = array1.reduce(function(acc,cv){
//     console.log(`acc : ${acc} , cv: ${cv}`)
//     return acc + cv
// },0)
// console.log(a)

const total = array1.reduce( (acc, cv)=> acc+cv,0)
console.log(total)