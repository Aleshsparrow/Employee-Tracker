var inquirer = require("inquirer")
var connection = require("../app")
var connection = require("./connection")


function add(){
    inquirer
    .prompt({
      name: "what",
      type: "list",
      message: "What would you like add?",
      choices: ["Department", "Role", "Employee"]
    }).then(function(res){
      if (res.what === "Department"){
        addDepartment();
      }
      else if(res.what === "Role"){
        addRole();
      }
      else if(res.what === "Employee"){
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
    inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is your Job title?"
    },
    {
        name: "salary",
        type: "decimal",
        message: "How much do you earn as salary?"
    },
    {
        name: "dept",
        type: "number",
        message: "What is your department id number?"
    },
    ]).then(function(res){
      console.log(res)
          connection.query("INSERT INTO role SET ?",{
            title: res.title,
            salary: res.salary,
            department_id: res.dept
          },function(err) {
            if (err) throw err;
            console.log("The role was added successfully!");
            start();
          }
          )
    })
  }


  function addEmployess(){
    inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is your first name?"
    },
    {
        name: "lastName",
        type: "input",
        message: "What is your last name?"
    },
    {
        name: "roleId",
        type: "number",
        message: "What is your role id number?"
    },
    {
        name: "managerId",
        type: "number",
        message: "What is your manager's id number?"
    }
    ]).then(function(res){
      console.log(res)
      connection.query("INSERT INTO employee SET ?",{
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.roleId,
        manager_id: res.managerId
      },function(err) {
        if (err) throw err;
        console.log("The employee was added successfully!");
        start();
      })
    })
  }

  module.exports = add;