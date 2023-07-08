const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const userPng =
  "https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png";
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log({username});
  try {
    
    if (username.length < 1) return res.status(401).send("invalid");
    if (!regexUserName.test(username)) return res.status(401).send("invalid");
    const user=await User.findOne({username: username.toLowerCase()})
    if (user) return res.status(401).send("username already taken")
    return res.status(200).send("Available");

  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});

router.post('/',async (req, res) => {
  console.log({reqtt:req.body});

const   {
    name,
    email,
    password,
    bio,
    facebook,
    youtube,
    twitter,
    instagram,
    username
  }=req.body.user
  if(!isEmail)return res.status(401).send('invalid email')
  if(password.length <6 )return res.status(401).send("password must be at least 6 characters")
try {

  //  let user
  const  user=await User.findOne({email: email.toLowerCase()})
    if (user) {
      return res.status(401).send("email already in use")
    }

    const newuser= new User({
      name:name,
      email:email.toLowerCase(),
      username:username,
      profilePicUrl:req.body.profilePicUrl || userPng
    
    })
    newuser.password=await bcrypt.hash(password,10)
  await newuser.save()
 
  let profileFields={};
  console.log(newuser._id);
  profileFields.user=newuser._id
  profileFields.bio=bio
  profileFields.social={}
if (facebook) profileFields.social.facebook=facebook
if(instagram) profileFields.social.instagram=instagram
if(twitter) profileFields.social.twitter=twitter
if(youtube) profileFields.social.twitter=youtube


await new ProfileModel(profileFields).save()
await new FollowerModel({user:newuser._id,followers:[],following:[]}).save()
const payload = { userId: newuser._id };
await jwt.sign(payload, process.env.jwtSecret, { expiresIn: "2d" }, (err, token) => {
  if (err) throw err;
  res.status(200).json(token);
});

} catch (error) {
  console.log(error);
    return res.status(500).send("server error"+error);
}

})

module.exports = router;
