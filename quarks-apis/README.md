
# Quarks Group Internship - REST API Test
A simple Node.js + Express REST API for user management.
## How To Start with this project
- **clone this repository by:**
[https://github.com/your-username/quarks-api.git]
clone https://github.com/your-username/quarks-api.git
cd quarks-apis
npm install
npm start
Server will run at:[http://localhost:5689]

## Endpoints

### POST `http://localhost:5689/users/register`
Create a user

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
Success Response:
{
  "id": "uuid-v4",
  "name": "John Doe",
  "email": "john@example.com"
}

### GET `http://localhost:3000/users/{user-id}`

Get user Details With Specified Id

Success Response:
{
  "id": "uuid-v4",
  "name": "John Doe",
  "email": "john@example.com"
}