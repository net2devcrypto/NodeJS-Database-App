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

POST API ENDPOINT:   <h4>/sendtodb</h4>

Sample request:

Create a database of 100 users;

With Javascript

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="100" height="100">

"dbname" is the database file name. ( Will be auto created if it doesn't exist )

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

With Python:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="100" height="100">

```python
import requests
import json

dburl = "http://localhost:5000"
headers =  {'Content-Type': 'application/json'}

def sendvmtodb():
    total = 100
    dbname = 'users'
    try:
        
        for i in range(total):
            number = i + 1
            entry = {
                'name': 'User' + number,
                'ip': '10.10.1.' + number,
                'dept': 'developers'
            }
            
            body = {
                'database': dbname,
                'entry': entry
            }
            
            url = dburl + "/sendtodb"
            payload = json.dumps(body)
            requests.request("POST", url, headers=headers, data=payload)
       
    except:
        print('Failed to Store in DB')
```

EXPECTED: 

Your Database file will be located in the same app folder:

<img src="https://raw.githubusercontent.com/net2devcrypto/misc/main/userdb.png" width="550" height="325">

<h3>Read from the Database</h3>

POST API ENDPOINT:   <h4>/readdb</h4>

Send a API Post with the database name.

Sample request:

Returns the "users" database

With Javascript

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="100" height="100">

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

With Python:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="100" height="100">

```python
import requests
import json

dburl = "http://localhost:5000"
headers =  {'Content-Type': 'application/json'}

def sendvmtodb():
    dbname = 'users'
    try:
        body = {
            'database': dbname
        }
            
        url = dburl + "/readdb"
        payload = json.dumps(body)
        response = requests.request("POST", url, headers=headers, data=payload)
        data = response.json()
        print(data)
        return data
       
    except:
        print('Failed to Read DB')
```

You should receive the entire database array as a return. 

<h3>Get a single item from the database</h3>

Send a API Post with the database name, the key and the value you are looking for. Returns the User's 30 info stored on the database.

POST API ENDPOINT:   <h4>/fetchfromdb</h4>

Sample request:

With Javascript

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="100" height="100">

```
  const dburl = "http://localhost:5000";

  async function fetchdb() {
    let dbname = 'users'
    let key = 'name'
    let value = 'User30'
    const url = dburl + "/fetchfromdb";
    const config = {
      method: "POST",
      body: JSON.stringify({
        database: dbname,
        key: key,
        entry: value
      }),
      headers: {
        "content-type": "application/json",
      },
    };
    let response = await fetch(url, config);
    let output = await response.json()
    console.log(output)
    return output
  }
```

With Python:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="150" height="150">

```python
import requests
import json

dburl = "http://localhost:5000"
headers =  {'Content-Type': 'application/json'}

def sendvmtodb():
    dbname = 'users'
    key = 'name'
    value = 'User30'
    try:
        body = {
            'database': dbname,
            key: value,
        }
        url = dburl + "/fetchfromdb"
        payload = json.dumps(body)
        response = requests.request("POST", url, headers=headers, data=payload)
        data = response.json()
        print(data)
        return data
       
    except:
        print('Failed to Read DB')
```


You should receive the database info stored for user 30 as a return. 

