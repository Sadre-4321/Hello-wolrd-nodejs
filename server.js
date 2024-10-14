const express = require('express') 
const app = express();
const db=require('./db');
require('dotenv').config();
// without body parser client cannot post their data format 
// so we require body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
// here we export person model
// const person=require('./models/person'); this will import in personRoutes.js
// const MenuItems=require('./models/MenuItems')


// hotel mnagement application
// Middileware function define [ our middile ware function handled by Api]
const logRequest=(req,res)=>{
  console.log(`${new Date().toLocaleString} Request made to :${req.originalUrl}`);
  next(); // move on the next pahse
}


// here we pass our middileware
app.get('/', logRequest,function (res,req ) {
  res.send('hey ! welcome to my new hotel akib khan .. And how can i help you?')
})


// we use post method to post data on server
// app.post('/person',async(req,res)=>{
//     try{
//         const data=req.body //Assuming the request body containing the person data
//         // create a newPerson document using the mongoose model
//         const newPerson=new person(data); // here the all person data are store in data variable
//         // saved the new person to the response
//         const response=await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({err:'internal server error'});

//     }

// })
// here we use get method
// app.get('/person',async(req,res)=>{
//   try{
//     const menulist=await person.find();
//     console.log('data fetched');
//     res.status(200).json(menulist);
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal sever error'})
//     }
  
// })
// if we need the worktype of person like if we need chef details in person the we use parameterised API
// app.get('/person/:worktype',async(req,res)=>{
//   try{
//     const worktype=req.params.worktype;
//     if(worktype=='chef' || worktype=='manager'|| worktype=='waiter'){
//       const response=await person.find({work:worktype});
//       console.log('response.fetched');
//       res.status(200).json(response);
//     }else{
//       res.status(404).json({error:'invalid work type'});
//     }

//   }catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal server error'});

//   }

// })
// MenuItems App.get
// app.get('/MenuItems',async(req,res)=>{
//   try{
//     const data=await MenuItems.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({erro:' internal server error'});

//   }
// })
//// MenuItems App.post
// app.post('/MenuItems',async(req,res)=>{
//   try{
//       const data=req.body //Assuming the request body containing the person data
//       // create a newPerson document using the mongoose model
//       const newPerson=new MenuItems(data); // here the all person data are store in data variable
//       // saved the new person to the response
//       const response=await newPerson.save();
//       console.log('data saved');
//       res.status(200).json(response);
//   }
//   catch(err){
//       console.log(err);
//       res.status(500).json({err:'internal server error'});

//   }

// })

// import the router files of person and menuitems
const personRoutes=require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');// use the routes
app.use('/person',personRoutes);
app.use('/menu', menuRoutes);

const PORT=process.env.PORT || 5001;
app.listen(PORT , ()=>{
    console.log('server is on 5001 port')
})