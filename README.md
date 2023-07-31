# NodeJS-Database-App

👑 A simple yet powerful NodeJS Database App. Create a new local JSON formatted database, read and write to it using POST API endpoints!!!

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/dbapp.png" width="450" height="225">

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

<h2>How to Start Database</h2>

## Step 1

Download the contents of this repo or do a git clone, extract the contents and navigate to the extracted folder and install dependencies:

```shell
npm i
```

## Step 2

(Optional) Change the listening port on the app.js file if needed. Default Port 5000

```
const server = app.listen(5000, function() {
```

## Step 3

Run the Database App

```shell
node app.js
```

<h2>How to Use</h2>

<h3>Write to the Database</h3>

Send a API Post with your data along with the database name, if there's no database file created it will auto create it.

POST API ENDPOINT:   /sendtodb

Sample request with FETCH In Next JS

Create a database of 100 users;

dbname = "name of database file"  ( Will be auto created if it doesn't exist )

```
  const dburl = "http://localhost:5000";

  async function writedb() {
    let total = 100;
    let dbname = 'users'
    for (let i = 0; i < total; i++) {
      let number = i + 1;

      let entry = {
        name: 'User' + number,
        ip: '10.10.1.' + number,
        dept: 'developers'
      }

      const url = dburl + "/sendtodb";
      const config = {
        method: "POST",
        body: JSON.stringify({
          database: dbname,
          entry: entry
        }),
        headers: {
          "content-type": "application/json",
        },
      };
      await fetch(url, config);
    }
  }
```
EXPECTED: 

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/userdb.png" width="550" height="325">

<h3>Read from the Database</h3>

Send a API Post with your data along with the database name, if there's no database file created it will auto create it.

POST API ENDPOINT:   /sendtodb

Sample request with FETCH In Next JS

Create a database of 100 users;

dbname = "name of database file"  ( Will be auto created if it doesn't exist )

```
  const dburl = "http://localhost:5000";

  async function readdb() {
    let dbname = 'users'
    const url = dburl + "/readdb";
    const config = {
      method: "POST",
      body: JSON.stringify({
        database: dbname
      }),
      headers: {
        "content-type": "application/json",
      },
    };
    let response = await fetch(url, config);
    let output = await response.json()
    console.log(output)
    return output;
  }
```
You should receive the entire database array as a return. 

