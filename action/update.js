var connection = require("./connection")
var inquirer = require("inquirer")

function update(){
  inquirer
  .prompt([
    {
    name: "which",
    type: "input",
    message: "Which employee would you like to update?, enter the employee's first role ID",
    },
    {
      name: "newRole",
      type: "input",
      message: "What is the new role you would like to assign this employee",
      }
  ]).then(function(res){
    console.log(res);

    connection.query(`UPDATE role SET title=${res.newRole}
    WHERE ${res.which}`)
  })
  }
update()
  module.exports = update;