var inquirer = require("inquirer")


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

  module.exports = add;