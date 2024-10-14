// / we connect the mongoose
const mongoose=require('mongoose');

// define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})
// here above we make a person schema
// now we create model from these person schema
// and from this model we perform data operation like [Create, Read,Update,Delete]
const person=mongoose.model('person',personSchema);
module.exports=person;
//now hum is person name ka model ko export krenge exprs.js me