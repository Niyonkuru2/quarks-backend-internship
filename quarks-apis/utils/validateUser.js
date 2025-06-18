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
  return null;
}

export  { validateUserInput };