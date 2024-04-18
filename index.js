#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "First_Number" },
    { message: "Enter second number", type: "number", name: "Second_Number" },
    {
        message: "Select one of these operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.First_Number + answer.Second_Number);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.First_Number - answer.Second_Number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.First_Number * answer.Second_Number);
}
else if (answer.operator === "Division") {
    console.log(answer.First_Number / answer.Second_Number);
}
else {
    console.log("Syntax Error");
}
;
