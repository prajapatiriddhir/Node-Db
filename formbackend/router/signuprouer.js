const exprees = require('express');
const router = exprees.Router();
const User = require('../models/signupmodel');
const bcrypt = require('bcrypt');

router.post('/signup', async (req,res)=>{

    const saltpassword = await bcrypt.genSalt(10)
    const securepassword = await bcrypt.hash(req.body.Password,saltpassword)

    const user = new User({
        FullName:req.body.FullName,
        UserName:req.body.UserName,
        Email:req.body.Email,
        Password:securepassword
    })
    user.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})


module.exports = router;