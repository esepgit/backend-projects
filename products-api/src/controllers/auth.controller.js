import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Role.js'

export const signup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  });

  if (roles) {
    const foundRoles = await Role.find({name: {$in: roles}})
    newUser.roles = foundRoles.map(role => role._id)
  } else {
    const role = await Role.findOne({name: 'user'})
    newUser.roles = [role._id]
  }
  
  const savedUser = await newUser.save()

  const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400 // 24 hours
  })
  res.json({token});
};

export const signin = async (req, res) => {
  const userFound = await User.finOne({emai: req.body.email}).populate("roles")

  if (!userFound) {
    return res.status(400).json({message: 'user not found'})
  }

  console.log(userFound)
  res.json({token: ''})
};
