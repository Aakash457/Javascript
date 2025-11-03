// for of 

// for...of ek modern loop hai (introduced in ES6) jo use hota hai
// iterable objects (like arrays, strings, maps, sets, etc.) par values nikalne ke liye.
// Yeh loop automatically har element par iterate karta hai —
// tumhe manually index (i) handle nahi karna padta

// ["","",""]
// [{},{},{}]

// for (const iterator of Object){}   // syntax


myAarry = [1,2,3,4,5,6,7]
for (const value of myAarry){
    // console.log(value)
}


const greeting = "Hello world"
for (const s of greeting){
    // console.log(s)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
console.log(map)


for (const [key,value] of map){
    // console.log(key,value)
}


// const myobject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// } // for of not work on object 

// for in loop we used that to access the index and value fo tht myobject
// object we use for in loop


const myobject = {
    js : 'Javascript',
    cpp : 'C++'
}

for (const key in myobject){
    // console.log(key)
    // console.log(`${key} shortcut is for ${myobject[key]}`)
}


const coding = ['js','ruby','python','c++']
coding.forEach( function (item) {
    // console.log(item) 
} )

function printme(item){
    // console.log(item)
}
// coding.forEach(printme)


coding.forEach((item,index,arr)=> {
    console.log(item,index,arr)
})


const myCoding = [
    {
        languageName: "javascript",
        languagefilename: "js" 
    },
    {
        languageName: "python",
        languagefilename: "py" 
    },
    {
        languageName: "java",
        languagefilename: "j" 
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})