#  Quarks Group Internship - REST API Test

A simple RESTful API built with **Node.js** and **Express** for basic user management.


##  Project Structure

- Stores user data **in memory** (no database)
- Provides endpoints to **create** and **retrieve** user Data 
- Returns data in **JSON** format
- Includes basic **input validation** and **error handling**


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Niyonkuru2/quarks-backend-internship.git
````

### 2. Navigate to the project directory

```bash
cd quarks-apis
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
npm start
```

> The server will start on: [http://localhost:5689](http://localhost:5689)


## API Endpoints

### POST `/users/register`

**Description:** Create a new user

**Request URL:**
`http://localhost:5689/users/register`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Success Response:**

```json
{
  "id": "generated-uuid",
  "name": "John Doe",
  "email": "john@example.com"
}
```


### GET `/users/:id`

**Description:** Retrieve a user by their ID

**Request URL:**
`http://localhost:5689/users/{user-id}`

**Success Response:**

```json
{
  "id": "generated-uuid",
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Error Response (if user not found):**

```json
{
  "error": "User not found"
}
```

##  Notes

* User data is **not persisted** between server restarts.
* Email must be **unique** — duplicate email registration returns a 409 error.
* Returns appropriate error messages for **missing or invalid input**.

## Tech Stack

* Node.js
* Express.js
* UUID for user ID generation


## Author

* Editor: NIYONKURU Samuel
* For the Quarks Group Internship Technical Test – 2025
