// var mysql = require("mysql");
var inquirer = require("inquirer");
var add = require("./action/add");
var view = require("./action/view")
var update = require("./action/update")

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "",
//   password: "",
//   database: "employee-tracker_DB"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

  start()

function start() {
  inquirer
    .prompt({
      name: "what",
      type: "list",
      message: "What would you like to do?",
      choices: ["Add", "View", "Update", "Nothing"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.what === "Add") {
        add();
      }
      else if(answer.what === "View") {
        view();
      }
      else if(answer.what === "Update") {
        update();
       } else{
        connection.end();
      }
    });
}

