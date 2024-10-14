console.log('file is import to the main.js')
var age=24;

const addNumber=(a,b)=>{
    return a+b

}



// is notes.js ko ab hame import karna hai main.js me jah amera is notes.js ka sara dat waha link hoga aur server ko dikhega
// iske liye hame module.exports likhna hoag
module.exports={
    age,
    addNumber


}