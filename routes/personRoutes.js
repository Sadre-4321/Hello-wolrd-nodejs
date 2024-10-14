// we use this to avoid get and post method that we arite again again
const express=require('express');
const router=express.Router();
const person=require('./../models/person');


//person post method we use as a router
router.post('/',async(req,res)=>{
    try{
        const data=req.body //Assuming the request body containing the person data
        // create a newPerson document using the mongoose model
        const newPerson=new person(data); // here the all person data are store in data variable
        // saved the new person to the response
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});

    }

})
// here we use get method
router.get('/',async(req,res)=>{
    try{
      const menulist=await person.find();
      console.log('data fetched');
      res.status(200).json(menulist);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal sever error'})
      }
    
  })
  // if we need the worktype of person like if we need chef details in person the we use parameterised API
router.get('/:worktype',async(req,res)=>{
    try{
      const worktype=req.params.worktype;
      if(worktype=='chef' || worktype=='manager'|| worktype=='waiter'){
        const response=await person.find({work:worktype});
        console.log('response.fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error:'invalid work type'});
      }
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
  
    }
  
  })
// herer we use "PUT" methd to update the person details with their "ID"
router.put('/:id',async(req,res)=>{
  try{
    const personId=req.params.id; // extract the id from the url parameter
    const updatedPersonData=req.body; // updated daa from the person

    const response=await person.findByIdAndUpdate(personId,updatedPersonData,{
      new:true,
      runValidators:true
    })
    if(!response){
      return res.status(404).json({error:'perwson not found'});
    }
    console.log('data fetched');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
    
  }
})
// to delete an id from the person data
router.delete('/:id',async(req,res)=>{
  try{
    const personId=req.params.id;
    const response=await person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({ error: 'person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:'data deleted succesfully'});


  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server'});
  }
})


  module.exports=router;
