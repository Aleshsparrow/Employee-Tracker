var inquirer = require("inquirer")
var connection = require("../app")
var connection = require("./connection")


function add(){
    inquirer
    .prompt({
      name: "what",
      type: "list",
      message: "What would you like add?",
      choices: ["Departments", "Roles", "Employees"]
    }).then(function(res){
      if (res.what === "Departments"){
        addDepartment();
      }
      else if(res.what === "Role"){
        addRole();
      }
      else if(res.what === "Employees"){
        addEmployess();
      }
    })
  }

  function addDepartment(){
      inquirer.
      prompt({
        name: "department",
        type: "input",
        message: "Which department would you like add?",
      }).then(function(res){
          console.log(res)
          connection.query("INSERT INTO department SET ?",{
            name: res.department
          },function(err) {
            if (err) throw err;
            console.log("The department was created successfully!");
            start();
          }
          )
      })
  }

  function addRole(){
    inquirer.
    prompt([
      {
        name: "title",
        type: "input",
        message: "What is your Job title?"
    },
    {
        name: "salary",
        type: "number",
        message: "How much do you earn as salary?"
    },
    {
        name: "dept",
        type: "number",
        message: "What is your department id number?"
    },
    ])
  }

  module.exports = add;