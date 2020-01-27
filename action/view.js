var inquirer = require("inquirer")
var connection = require("./connection")



function view(){
    inquirer
    .prompt({
      name: "what",
      type: "list",
      message: "What would you like view?",
      choices: ["Departments", "Roles", "Employees"]
    }).then(function(res){
      if (res.what === "Departments"){
        viewDepartment();
      }
      else if(res.what === "Role"){
        viewRole();
      }
      else if(res.what === "Employees"){
        viewEmployees();
      }
    })
  }

function viewDepartment() {
  connection.query("SELECT * FROM department", function(err, res){
    if(err) throw err
    console.log(res)
  })
}

function viewRole() {
  connection.query("SELECT * FROM role", function(err, res){
    if(err) throw err
    console.log(res)
  })
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function(err, res){
    if(err) throw err
    console.log(res)
  })
}

  module.exports = view;