# Test task for starGo

● On main screen app shows list of people by listing only the first name
● On tapping on a list item show the profile view that displays: first name, last name, age,
gender and country

At the first load, application make request(fetch) to the API and recieved the list of users id's. Then simultaneously makes requests for each id. When all promises dones, it filters all successes requests and display recieved users.


API: 
● API calls must use JWT authorization bearer using HMAC 256 and base64-encoded
secret: "$SECRET$"
● Example of JWT token that works:
● The JWT payload should include an object with two properties "uid" and "identity" with
any values
● API domain: http://opn-interview-service.nn.r.appspot.com
● API call for listing of people ids: GET: /list
● API call for getting Detailed Profile: GET: /get/{id} where {id} is the id of the profile you
get back from the list.

## Installation
1. Clone root of the project
2. In that folder run terminal
3. $ npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


