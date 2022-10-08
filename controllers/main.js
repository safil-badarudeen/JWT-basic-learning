require('dotenv').config();
const CustomAPIError = require("../errors/custom-error")
const jwt=require('jsonwebtoken')



const login=async(req,res)=>{
    const {username,password}=req.body

       if(!username || username=== null){
        throw new CustomAPIError('please enter the Username',400)
       }
       if(!password || password=== null){
        throw new CustomAPIError('Please enter the Password',400)
       } 

       const id =new Date().getDate()
       const jstw=process.env.JWT_SECRET
       console.log(req.headers)

       const token=jwt.sign({id,username},jstw,{expiresIn:'30d',
    })
    console.log(token)
       res.status(200).json({msg:'user created',token})
}


const dashboard=async(req,res)=>{

    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
      throw new CustomAPIError('No authorization Found',401)
    }

    const token=authHeader.split(' ')[1]

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        res.status(200).json({msg:'This response is from dashboard route',username: `${decoded.username},
        user id:${decoded.id}`})
        console.log(decoded)
    } catch (error) {
        throw new CustomAPIError('Error while verification',401)
    }
  
    

    // res.status(200).json({msg:'This response is from dashboard route',username: `${decoded.username}`})
}


module.exports={dashboard,login}