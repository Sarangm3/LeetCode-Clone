const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user 
// @route   POST /signup
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {name,email, password ,admin } = req.body

  if (!name ||!email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    admin,
  })

  if (user) {//this think go to front-end
    res.status(201).json({
      _id: user.id,
      email: user.email,
      admin:user.admin,
      token: generateToken(id,admin),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password} = req.body

  // Check for user email
  const user = await User.findOne({ email })
  
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      admin:user.admin,
      token: generateToken(user.id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})



// Generate JWT
const generateToken = (email,admin) => {

  return jwt.sign({ email, admin }, process.env.JWT_SECRET,   {
    expiresIn: '30d',
  })
  
}

module.exports = {
  registerUser,
  loginUser,
  User
}
