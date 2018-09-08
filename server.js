//PHASE I
//Create the front-end (visuals) for home page, reservation form, and reservation views
//Aaron

// Create a basic server using Express.JS
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// (DATA)
// Create a few array variables that will hold the data
// =============================================================
var tables = [
  {
    customerID: 297,
    name: "Table 1",
    email: "this@somthing.com",
    phone: "817-567-5678"
  },
  {
    customerID: 298,
    name: "Table 2",
    email: "this@somthing.com",
    phone: "817-567-8765"
  },
  {
    customerID: 299,
    name: "Table 3",
    email: "this@somthing.com",
    phone: "817-567-5876"
  },
  {
    customerID: 300,
    name: "Table 4",
    email: "this@somthing.com",
    phone: "817-567-9999"
  },
  {
    customerID: 301,
    name: "Table 5",
    email: "this@somthing.com",
    phone: "817-777-5678"
  }
];

var waitlist = [

  {
    customerID: 111,
    table: 1,

  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // res.send("Welcome to the Hot Restaurant Page!")
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname,"public/reserve.html"))
})

[app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname,"public/tables.html"))
})]



app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newtable = req.body;
  
    console.log(newtable);

    if (tables.length < 5) {
        tables.push(newtable);
    }
    else {
        waitlist.push(newtable);
    }

    console.log(waitlist)
    
    // We then display the JSON to the users
    res.json(newtable);
  });

app.get("/api/tables", function (req, res) {
  res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
  });

app.listen(8000, function(){
    console.log("App listening Port: 8000");
}); 