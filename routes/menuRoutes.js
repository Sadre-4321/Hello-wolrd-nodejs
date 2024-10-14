const express=require('express');
const router=express.Router();
const MenuItems=require('../models/MenuItems');

// post method to add a menu itewms
router.post('/',async(req,res)=>{
    try{
        const data=req.body //Assuming the request body containing the person data
        // create a newPerson document using the mongoose model
        const newPerson=new MenuItems(data); // here the all person data are store in data variable
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

  // MenuItems App.get
router.get('/',async(req,res)=>{
    try{
      const data=await MenuItems.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({erro:' internal server error'});
  
    }
  })


  // here we create parameterised Api which is basically taste of the menu items
  // by this we can get the list of the items with ther taste as sour ,sweete , spicy menu items
  router.get('/:taste',async(req,res)=>{
       try{
         const tastetype=req.params.tastetype;
         if(tastetype=='sweet' || tastetype=='sour'|| tastetype=='spicy'){
           const response=await MenuItems.find({taste:tastetype});
           console.log('response.fetched');
           res.status(200).json(response);
         }else{
           res.status(400).json({error:'invalid work type'});
         }
    
       }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error'});
    
       }
    
     })


  // here we exports
module.exports=router;