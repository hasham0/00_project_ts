#! /usr/bin/env node
// import libaries
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// adding animations
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function load() {
    let window = chalkAnimation.rainbow(`Let's start calculation`);
    await sleep();
    window.stop();
    console.log(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `);
}
await load();
// taking input from users and asking operation to be perform
const val1 = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter the first value:",
    },
]);
const val2 = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter the second value:",
    },
]);
const operation = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        message: "select an option:",
        choices: ["Add", "Sub", "Mul", "Div"],
    },
]);
// check variable=> use to store the value getting from arthmatic opertions
let check;
// building calculation functionality
if (operation.action === "Add") {
    check = val1.num1 + val2.num2;
    console.log(chalk.whiteBright(`result: ${check}`));
}
else if (operation.action === "Sub") {
    check = val1.num1 - val2.num2;
    console.log(chalk.whiteBright(`result: ${check}`));
}
else if (operation.action === "Mul") {
    check = val1.num1 * val2.num2;
    console.log(chalk.whiteBright(`result: ${check}`));
}
else if (operation.action === "Div") {
    check = val1.num1 / val2.num2;
    console.log(chalk.whiteBright(`result: ${check}`));
}
else {
    console.log(chalk.red("select valid values!"));
}
