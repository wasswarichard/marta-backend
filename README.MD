## Settings
  If you want set up locally you can follow these steps, you can also use `postman`(https://www.getpostman.com/downloads/) to test. Clone the repository, open terminal in root and do the following on terminal

   ```shell
   $ npm install
   ```
   After Setting up the database, create database tables running the command below, its advisable to run the command more than once and make sure your database is updated with the tables:

   ```shell
   $ npm run create:tables
   ```
   Start server by running:

   ```shell
   $ npm run start
   ```
   Test endpoints by running:
   ```shell
   $ npm run test
   ```
## EndPoints
- Use the following Endpoints

    `POST /users/v1a/user/create` Create User 
    
    The request body should be
    ```javascript
      {
           "name": "Trust",
           "dob": "4/23/2004",
           "smoke": "Non-smoker",
           "language": "B2",
           "nextavail": "4/23/2014",
           "status": "SELECTION"
     }
    ```
    `GET /users/v1a/users` Get all users
    
    The response should be
    ```javascript
  [
      {
         "id": 30,
         "name": "Trust",
         "dob": "4/23/2004",
         "smoke": "Non-smoker",
         "language": "B2",
         "nextavail": "4/23/2014",
         "status": "SELECTION"
      }
  ]
     ```
    
    `PUT /users/v1a/user/update` Update user status
    
    The request body should be
    
    ```javascript
      {
         "id": 30,
         "name": "Trust",
         "dob": "4/23/2004",
         "smoke": "Non-smoker",
         "language": "B2",
         "nextavail": "4/23/2014",
         "status": "SELECTION"
      }
     ```
