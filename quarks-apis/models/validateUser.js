import {v4 as uuidv4} from 'uuid'

// Create an in-memory store using a Map to hold user data
const users= new Map();

// Generate a unique ID using uuidv4
function createUser(name,email){
    const id = uuidv4();
// Create a user object with the generated ID, name, and email
    const user= {id,name,email};

// Store the user in the 'users' Map using the ID as the key
    users.set(id,user);
    return user;

}

// Retrieve and return the user object from the users Map
function getUserById(id){
    return users.get(id)
}
export {createUser,getUserById};