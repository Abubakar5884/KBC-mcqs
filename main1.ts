import chalk from "chalk";
import inquirer from "inquirer";

let prize = [10000, 50000, 100000, 200000, 500000];
let points = [10, 20, 30, 40]; // points for each question
// let score = 0; // initialize score to 0

console.log(chalk.bgYellow.black`======================================================`)
console.log(chalk.cyan`                      WELCOME`)
console.log(chalk.cyan`                        TO`)
console.log(chalk.cyan`                        KBC`)
console.log(chalk.bgYellow.black`======================================================`)

setTimeout(async () => {
  let totalPrize = 0;

  const answer = await inquirer.prompt([
    {
      name: "Quesion_1",
      type: "list",
      message: "What is the capital of Pakistan",
      choices: ["Karchi", "Lahore", "Islamabad", "Hyderabad"],
    }
  ]);
  if (answer.Quesion_1 === "Islamabad") {
    console.log(chalk.green`Correct answer \n You just won ${prize[0]}RS.`);
    // score += points[0]; // add points for question 1
    totalPrize += prize[0];
  } else {
    console.log(chalk.red`Invalid Answer`);
  }
  
  console.log(`Your total balance is: ${totalPrize}`);

  const answer1 = await inquirer.prompt([
    {
      name: "Question_2",
      type: "list",
      message: "What is the value of Gravity",
      choices: [7, 10, 9.8, 8.8],
    }
  ]);

  if (answer1.Question_2 === 9.8) {
    console.log(chalk.green`Correct answer \n You just won ${prize[1]}RS.`);
    // score += points[1]; // add points for question 2
    totalPrize += prize[1];
  } else {
    console.log(chalk.red`Invalid answer`);
  }

  console.log(`Your total balance is: ${totalPrize}`);

  const answer2 = await inquirer.prompt([{
    name: "Question_3",
    type: "list",
    message: "Who is the richest man in the world",
    choices: ["Jeff Beroz", "Elon Musk", "Mukesh Ambani", "Mark Zakerberg"]
}])
if (answer2.Question_3 === "Elon Musk"){
  console.log(chalk.green`Correct answer \n You just won ${prize[2]}RS.`);
  totalPrize += prize[2]
} else {console.log(chalk.red`Invalid answer`)}

console.log(`Your total balance is: ${totalPrize}`)

const answer3 = await inquirer.prompt([{
  name: "Question_4",
  type: "list",
  message: "What is the national animal of Pakistan",
  choices: ["Markhor", "Goat", "Eagle","Nawaz Sharif"]
}])
if (answer3.Question_4 === "Markhor") {
  console.log(chalk.green`Correct answer \n You just won ${prize[3]}RS.`);
  totalPrize += prize[3]
} else (console.log(chalk.red`Invalid answer`))

// console.log(`Your total balance is: ${totalPrize}`)

setTimeout(async () => {console.log(`Your total balance is: ${totalPrize}`)}, 2000);
}, 5000);


