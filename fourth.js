// array

const myArr = [0,1,2,3,4,5]
const newArr = new Array("sha","yad","dec")
// console.log(myArr[0])

myArr.push(6)
myArr.pop()
myArr.unshift(0)
// console.log(myArr)


const myn1 = myArr.slice(1,3);
// console.log(myn1)


const my2 = myArr.splice(1,3)  //it will alter the array it will remove the mention part out from the list 
// console.log(my2)


const marvel_hero = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
// marvel_hero.push(dc_heros)
// console.log(marvel_hero[3][1])

// let a = marvel_hero.concat(dc_heros)
// console.log(a)

// let b = [...marvel_hero , ...dc_heros]
// console.log(b)


// const another_array = [1,2,3,[1,2,[122,32,34]],[1,2,3]]
// const a = another_array.flat(Infinity)
// console.log(a)


// console.log(Array.isArray("Hitesh"))  // these will check for array 
// console.log(Array.from("Hitesh"))   //  these will convert into array
// console.log(Array,from({name:"Hitesh"}))   
//  these will also convert into array but we have to specify weather we want to make array with the key or value if not mention than it will return the empty array


// let a = 1
// let b = 200
// let c = "hiiiii"
// console.log(Array.of(a,b,c))


