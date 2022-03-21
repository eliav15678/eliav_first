const express = require('express');
const router = express.Router();

router.get('/greeting',(req,res)=>{
  return res.status(200).json({
       Message:'welcome to me api'
    });
});

let users=[
   {
        name='eliav elmaliah',
        age=23
   },
   {
        name='hen gabay',
        age=25
   },
   {  
        name='shalom elmaliah',
        age=52
   },
   { 
        name='iris elmaliah',
        age=47
   }
];

router.post('/register',(request,response) => {
  const {email,password} = request.body;
  users.push({email:email,password:password});

  //filter
  const data = users.filter(x=>x.age == 23); //return array
  //find
  const data2 = users.find(x=>x.name == 'iris'); //return object

  return response.status(200).json({
  Message: data
  });

})

module.exports=router;