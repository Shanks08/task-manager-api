# Task Manager RESTFul-API

- Task management application built using **NODEJS** and **MONGODB**.
- It follows a **RESTFul API** design architecture and has complete **CRUD fucntionalities**.
- Used **EXPRESS JS** to manage servers and set route endpoints.
- Implemented user verification using NPM **Validator** Library, **Mongoose Models** and **JSON Web Tokens**.
- The app sends an email notification upon registration and deactivation of the user's account using **SENDGRID API**.
- The app stores different user sessions from different devices using user **token**.
- It stores user passwords in the database after hashing using NPM **Bcrypt** Library.
- Tested API functionality using **POSTMAN** and used **Environment Variables** to store sensitive information.

## Features

- Sending Emails
- Authentication and Security
- Sorting, Pagination, and Filtering
- Avatar upload

## API Endpoints

| Methods | Endpoints                          | Access  | Description                              |
| ------- | ---------------------------------- | ------- | ---------------------------------------- |
| POST    | /users                             | Public  | Sign up                                  |
| POST    | /users/login                       | Public  | Login                                    |
| GET     | /users/me                          | Private | User's Profile                           |
| PATCH   | /users/me                          | Private | Update Profile                           |
| POST    | /users/me/avatar                   | Private | Upload Profile Picture                   |
| GET     | /users/userID/avataar              | Private | View Profile Picture                     |
| DELETE  | /users/me/avatar                   | Private | Delete Profile Picture                   |
| DELETE  | /users/me                          | Private | Delete Account                           |
| POST    | /users/tasks                       | Private | Create a Task                            |
| GET     | /users/tasks/taskID                | Private | View a Task                              |
| GET     | /users/tasks                       | Private | View all Tasks                           |
| GET     | /users/tasks?limit=2               | Private | Limit the result to 2                    |
| GET     | /users/tasks?sortBy=createdAt:desc | Private | Sort by Descending order of created date |
| GET     | /users/tasks?sortBy=createdAt:asc  | Private | Sort by Ascending order of created date  |
| GET     | /users/tasks?skip=3                | Private | Paginating result                        |
| PATCH   | /users/tasks/taskID                | Private | Update a Task                            |
| DELETE  | /users/tasks/taskID                | Private | Delete a Task                            |
| POST    | /users/logout                      | Private | Logout an account                        |
| POST    | /users/logoutall                   | Private | Logout all accounts                      |
