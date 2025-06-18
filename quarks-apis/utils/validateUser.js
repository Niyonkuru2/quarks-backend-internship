import validator from 'validator'

function validateUserInput(body){
    const {name,email} = body

//check if name is provided and it is string
if (!name || typeof name !== 'string') {
    return 'Name is required and must be a string.';
  }
  
  //check if email is provided and it is string
  if (!email || typeof email !== 'string') {
    return 'Email is required and must be a string.';
  }

  //validating email format
    if (!validator.isEmail(email))  {
      return "enter a valid Email format"
     }
  return null;
}

export  { validateUserInput };