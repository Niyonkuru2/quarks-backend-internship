import { validateUserInput } from "../utils/validateUser.js";
import { createUser, getUserById, isEmailTaken } from "../models/validateUser.js"

//function to create user
function registerUser(req,res){

// validate user input
const error = validateUserInput(req.body);
if (error) return res.status(400).json({error});
const {name,email} = req.body;

if (isEmailTaken(email)) {
    return res.status(409).json({
      success: false,
      message: 'Email is already registered.',
    });
  }
//create user and save in memory
const user = createUser(name,email);

return res.status(201).json(user);
}

//function to get user details depend on id of the user
function getUser(req, res) {
  const user = getUserById(req.params.id);
  if (!user) return res.status(404).json({ success:'false',message:'User not found' });

  // return user information match with specified id
  return res.json(user);
}

export { registerUser, getUser };