const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {
  registerUser,
  loginUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware');


const Questions = [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      difficulty: 'Easy',
      code: 'function twoSum(nums, target) {\n  // TODO: Implement the logic\n}',
    },
    {
      id: 2,
      title: 'Reverse Integer',
      description: 'Given a signed 32-bit integer, reverse digits of an integer.',
      difficulty: 'Easy',
      code: 'function reverseInteger(x) {\n  // TODO: Implement the logic\n}',
    },
    // Add more questions as needed
];

const Submissions = [
    {
      id: 1,
      questionId: 1,
      code: 'function twoSum(nums, target) {\n  // TODO: Implement the logic\n}',
      language: 'JavaScript',
      userId: '123',
      timestamp: '2023-05-22T10:30:00Z',
    },
    {
      id: 2,
      questionId: 2,
      code: 'function reverseInteger(x) {\n  // TODO: Implement the logic\n}',
      language: 'Python',
      userId: '456',
      timestamp: '2023-05-23T08:15:00Z',
    },
    // Add more submissions as needed
  ];
  

// @desc    Login/Landing page
// @route   GET /
router.get('/',(req,res)=>{
  res.json(User);
})

router.post('/', registerUser)
router.post('/login', loginUser)

//logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send({ message: "Logout successful" });
});

// @desc    view questions
// @route   POST /questions
router.get('/questions',(req,res)=>{
    res.json(Questions)
})


// @desc    submission
// @route   POST /submission
router.post("/submissions", protect , (req, res) => {
  //Only the logged in users can submit solution, in my JWT token email id is present and is unique

  const user = User.find((USER) => (USER.email = req.user.email));
  console.log("JWT token email" + req.user.email);
  console.log("User returned from find" + user);
  console.table(user);
  const { id } = req.body;
  const acceptSolution = Math.random() < 0.5;
  Submissions.push({ user, id, acceptSolution });

  if (acceptSolution) {
    res.send("Solution Accepted");
  } else {
    res.send("Solution rejected");
  }
});

router.get('/submission',(req,res)=>{
    res.json(Submissions)
})

// @desc    Add a question
// @route   POST /addQuestion
router.post('/addQuestion',protect,(req, res) => {
  
  if(req.user.admin){
    // Generate a unique ID for the new question
    const id = Questions.length + 1;

    // Create a new question object
    const newQuestion = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty,
      code: req.body.code
    };

    // Add the new question to the Questions array
    Questions.push(newQuestion);
    // Return the updated Questions array as the response
    res.status(200).json(Questions);
  }else{
    res.status(400).json({msg: 'Not Authorized'});
  }
});

module.exports = router;