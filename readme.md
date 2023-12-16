# GroceryCart MERN

###  Step 1: 
##### Create an account on MongoDB Atlas
##### Create a cluster
##### Create a username and password for the same
##### Copy the connection string by clicking on connect
##### Paste the connection string in the .env file inside the server folder

### Step 2: 
##### open a new terminal and 
```
cd server
npm install
npm start
```
##### It will download all the dependencies and start a node.js app

### Step 3: 
##### open a new terminal and 
```
cd client
npm install
npm start
```
##### It will download all the dependencies and start a react app

##### .env content:
```
DB_CONNECT="<YOUR_URL>"
```

### Step 4: 
##### Go to browser and type these three URLs: 

### [http:localhost:5001/api/seed/products](http:localhost:5001/api/seed/products)
### [http:localhost:5001/api/seed/users](http:localhost:5001/api/seed/users)
### [http:localhost:5001/api/seed/orders](http:localhost:5001/api/seed/orders)

##### As soon as you type the URL, a json file appears on the page. If so, data has been entered in the mongoDB database

##### Sample admin user 
```
User - johndoe@gmail.com
Pass - johndoe
```

## You are good to go!
