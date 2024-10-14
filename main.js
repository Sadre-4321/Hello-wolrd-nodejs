// var prompt = require('prompt-sync')();
// const age=prompt("plaese enter your age:");
// if(age<18){
//     console.log("you get a 20% discount:");
// }else{
//     console.log("yu get a 30% discount:");
// }
// // araay
// const ages=[2,5,8,9];
// const result=ages.filter(checkAge);
// function checkAge(ages){
//     if(ages>3){
//         return ages;
//     }
// }
// console.log(result);

// // object
// const person={
//     name:'akib',
//     age:32,
//     hobbis:['jdhf',"kjfk","iue","mks"]
// }
// console.log(person)
// console.log(person.ages)


// var a=2;
// var b=5;
// var c=a+b;
// console.log(c);
// // to run this code we just write the command node main.js
// const cars=["h","k","r",43];
// cars.push("q")
// console.log(cars)
// to print user se input lena ho to hum prompt ka use krte hai

// chapter 4 callback function
// this is 1st method to use call back function
// function callback(){
//     console.log(`added callback is succesfully completed`)
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log(result);
//     callback()
// }
// // here we call function
// add(3,4,callback)

// this is 2nd method to use call back function in one line
// const add=function(a,b,akib){
//     var result=a+b;
//     consol.log(result);
//     akib();
// }
// add(2,5,()=>consol.log('added complete'));
// we write the code nodejs modules like "fs" and "os" these are library
// var fs=require('fs'); // hame requirement hai fs librari ka
// var os=require('os');
// var user=os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.txt' , 'Hi' + user.username +'!\n' ,()=>{console.log('file is created')});
// console.log(fs) // it will display all the uses of fs
// console.log(os) // it will display all the uses of os


// here we study about how can we import the file of notes.js into this main.js
// for that we have to write 
// const notes=require('./notes.js') // import karne ke liye this line must be written

// console.log('file is created')
// var age=notes.age;

// console.log(age)
// var addNumber=notes.addNumber(2,3)
// console.log(addNumber)

// lodash code 
// let suppose we have given array have same name occur with multiple then we have to print each array by unique
// // lodash ko import karne ke liye we must have written
const _ = require('lodash');
var data=["akib","akib",1,2,1,2,"name","name","age"];
// to print the unique array 
var filter=_.uniq(data);
console.log(filter);