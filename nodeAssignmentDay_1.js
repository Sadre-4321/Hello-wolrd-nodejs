// question 1
// var prompt = require('prompt-sync')();
// const age=prompt("please enter youyr age:")
// if(age<18){
//     console.log("u get 20% discount");
// }if(age>=18 || age<=65){
//     console.log("normal ticket rpice aplies");
// }else if(age>65 ){
//     console.log("u get 50 % discount")
// }
// question 2
// calculate area of triangle
// var prompt = require('prompt-sync')();

// const length=prompt("please enter length of rectangle :")
// const width=prompt("please enter width of rectangle :")
// const calcAreaRectangle=(length*width);
// console.log(`area of rectangle is : ${calcAreaRectangle}`);


// question -3 array question
// ate a guest list name with welcome whose name is preswent oin the guest list
var prompt = require('prompt-sync')();

const guestList=["akib","arif","aman","maya","alok","mahir"];
console.log(guestList)
const Name=prompt("please enter the guestlist name :")
let found = '';
for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === Name) {
        found = true;
        break;
    }
    else{
        found=false;
    }
}

if (found==true) {
    console.log(`Welcome to the party, ${Name}!`);
} else if(found==false) {
    console.log(`Sorry, you are not on the guest list.`);
}


