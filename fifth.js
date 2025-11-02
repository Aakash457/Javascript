//  object 

const mySym = Symbol("key1")

const jsuser ={
    name : "aakash",
    age : 90,
    [mySym] : "mykey1",
    number : 9987290910,
    location : "jaipur",
    email : "aakash@google.com",
    isLogoff : false,
    lastLoginDats : ["monday","saturday","sunday"]
}

// console.log(jsuser.name)
// console.log(jsuser["email"])
// console.log(jsuser[mySym])

jsuser["email"] = "yadav@890"
// console.log(jsuser)

// Object.freeze(jsuser) // after freeze the value will not change in the object  

jsuser.greeting = function(){
    console.log("welcome to the object function")
}
// jsuser.greeting()

jsuser.greetingTwo = function(){
    console.log(`hello to the object ${this.name}`)
}
// jsuser.greetingTwo()


// const a = new Object()  // this is singleton object
// const b = {} // this is normal object 
// console.log(b)

// these is how we insert key value in object 
// const a = {}
// a.id = 1,
// a.name = "bovp",
// a.number = 123
// console.log(a)

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname : {
        first_name : "Aakash",
        last_name : "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname["first_name"])


const obj1 = {1 : "a",2 : "b"}
const obj2 = {1:"m",3:"z"}
const obj3 = Object.assign({},obj1,obj2) //This is used to merge the two object
const obj4 = {...obj1,...obj2}  //This is used to merge the two object
// console.log(obj4)

// these will use when the value is come from the database
const abc = [
    {
        id : 1,
        email : "aakash@gmail.com"
    },
    {
        id : 1,
        email : "aakash@gmail.com"
    },
    {
        id : 1,
        email : "aakash@gmail.com"
    },
    {
        id : 1,
        email : "aakash@gmail.com"
    }
]

// console.log(abc[1].email)

// console.log(jsuser)
// console.log(Object.keys(jsuser))
// console.log(Object.values(jsuser))
// console.log(Object.entries(jsuser))

// console.log(jsuser.hasOwnProperty('login'))


// There is one more way to take a value from object

const course ={
    Coursename : "Javascript",
    age : 90,
    courseInstructor : "Aakash"
}


// // this is call destucturing 
// const {courseInstructor} = course  //this is way we can also use alias for courseInstructor
// console.log(courseInstructor)
// const {courseInstructor : instructor} = course // here we use alias
// console.log(instructor)