# **Full Throttle Assignment**



## why we are using Mock-API ?

Development: If back end and front end development is being worked upon in parallel, then our UI would require dummy data to build our UI against. Something like a dummy response will help render our UI.

Testing: You could manually test our UI when your back end is not available.

### Lets Start with Creating a react App

```
npx create-react-app fullthrottlelabs
cd fullthrottlelabs
npm start
```
This should bring up your web app locally on http://localhost.com:3000 (mostly in port 3000).

## Setting Up a Local Mock API for your Front-end (React) Project

Now we have a json file with test data. the file is named as **data.json**

```
{
	"ok": true,
	"members": [{
			"id": "W012A3CDE",
			"real_name": "Egon Spengler",
			"tz": "America/Los_Angeles",
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 1:54PM"
				},
				{
					"start_time": "Mar 1 2020  11:11AM",
					"end_time": "Mar 1 2020 2:00PM"
				},
				{
					"start_time": "Mar 16 2020  5:33PM",
					"end_time": "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			"id": "W07QCRPA4",
			"real_name": "Glinda Southgood",
			"tz": "Asia/Kolkata",
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 1:54PM"
				},
				{
					"start_time": "Mar 1 2020  11:11AM",
					"end_time": "Mar 1 2020 2:00PM"
				},
				{
					"start_time": "Mar 16 2020  5:33PM",
					"end_time": "Mar 16 2020 8:02PM"
				}
			]
		}
	]
}
```

To read the data from the data.json file, simple logic is implemented in dataController.js file

```
const path = require("path");
const fs = require("fs");
const pathToData = path.join(__dirname + "../../../");

const getJsonData = function(pathToData, filename) {
    var filename = path.join(pathToData, filename);
    return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

exports.getData = function(request, response) {
    var data = getJsonData(pathToData, 'data.json');
    setTimeout(function() {
        return response.send(data);
    }, 100);
};
```

**server.js :**  This is the file we will execute to mock the server. It listens to the port and the API string we have in our “app.get”. If we enter “localhost:3002/api/data” in our browser, our dataController.js file will call getData which would fetch the data from the data.json file in JSON format.

```
const express = require("express");
const app = express();
const https = require("https");

var path = require("path");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "build")));

var dataController = require("./dataController");

app.get('/api/data', dataController.getData);

const port = 3002;

app.listen(process.env.PORT || port);
```
To start your server, run
```
node server.js
```

But, we have to run both react app and express server parallely. our web app currently does not know that our API is mocked on a different port. To resolve this problem, Just add port 3002 as a proxy to your web app.

so in your package.json, add a proxy so your web app knows that the API is mocked at a different port.

```
Filename: package.json

"proxy": "http://localhost:3002"
```

and change scripts section of package.json as mentioned below

```
"scripts": {
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "mock-api": "node ./src/Components/server/server.js",
    "start": "run-p dev mock-api"
  },
```

So, when we start our react app using `npm start`, it will run both react app and mock api server

## UI Design


