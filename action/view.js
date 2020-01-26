var inquirer = require("inquirer")


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
        viewEmployess();
      }
    })
  }

  module.exports = view;