// convert string to object
const jsonString='{"Name": "Akib khan", "Age" : 30,"city" : "delhi"}';
const jsonObject=JSON.parse(jsonString); // convert json String to object
console.log(jsonObject.Name) // output akib
console.log(typeof jsonObject)

//convert object to string
const objToConvert={name:"alice",age:25};
const jsonStringified=JSON.stringify(objToConvert);
console.log(jsonStringified);
console.log(typeof jsonStringified)


// now here we go to create our server after install npm express
// here the code we put from npm express wesite 
const express = require('express') // this line indicates we have requred express js
const app = express() // this line indicates ke jo express ka naksha yaani blue print hai maine usko app me store kr liay

// here we connect our db.js
const db=require('./db');

app.get('/', function (req, res) {  // here req=kya required hai and res=kya respond krega
  res.send('hey ! welcome to my new hotel akib khan .. And how can i help you?')
})
app.get('/chicken', (req,res)=>{
    res.send('hey there lots of facilities are available so enjoy my new model retaurent')
})
app.get('/idlli',(req,res)=>{
    var menu_list = {
        name:'dal makhni',
        price:'30',
        is_chutney:true,
        is_rayta:false
    }
    res.send(menu_list)
})
app.post('/person',(req,res)=>{
    res.send('hello users how can i help you');
})

app.listen(3000 , ()=>{
    console.log('server is on 3000 port')
})
 // ye hamar ek tarh se samjh lo ek room no hai jise hum port kahte hai yaha pe hamar server active hai iss number pe  but agar hame server ko band karna hoga to kya krenge ek function banaya console kiye after print hoga server active ho jayge then server ko band krna hai to terminal pe [ctrl+c] press afteer our sever is closed