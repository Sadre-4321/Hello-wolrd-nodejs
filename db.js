const mongoose=require('mongoose');  // use to impoprt mongoose and also install npm i mongoose

// mongo db url
const mongoURL = 'mongodb://localhost:27017/hotels'

// setup mongodb connection
mongoose.connect(mongoURL);


// get the default connectinon
// mongoose manage the default connecton between object representing the mongodb connection
const db=mongoose.connection;

// define event listner  [connected , error , disconnected => these all are event listner] for database connetion
// jasie hi mongodb ke sath connet ho  masage show ho
db.on('connected',()=>{   // jaise hi mongodb hamara servere ke sath connected ho jayega  ye masage show karega
    console.log('connected to the mongodb  server')
});

db.on('error',()=>{   // jaise hi mongodb hamara servere ke sath connected ho jayega  ye masage show karega
    console.error('mongodb connection error' , err)
});

db.on('disconnected',()=>{ // jaise hi mongodb hamara servere ke sath connected ho jayega  ye masage show karega
    console.log(' mongodb disconnected')
});

// export the connection here below db represent the mongodb connection
module.exports=db; // this db.js ko hum import krenge exprs.js se for that we import this db in exprs.js