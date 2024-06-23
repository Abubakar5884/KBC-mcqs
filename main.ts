import inquirer from "inquirer";
let prize = [10000, 50000, 100000, 200000, 500000];
console.log("WELCOME TO KBC");

setTimeout(async () =>{
    const answer = await inquirer.prompt([
{
    name: "Quesion_1",
    type: "list",
    message: "What is the capital of Pakistan",
    choices: ["Karchi", "Lahore", "Islamabad", "Hyderabad"],
}])
if (answer.Quesion_1 === "Islamabad") {
    console.log(`Correct answer \n You just won ${prize[0]}RS. \n Your total amount is ${prize[0]}`);
} else {console.log(`Invalid Answer`)};

const answer1 = await inquirer.prompt([{
        name: "Question_2",
        type: "list",
        message: "What is the value of Gravity",
        choices: [7, 10, 9.8, 8.8],
}])
if (answer1.Question_2 === 9.8){
    console.log(`Correct answer \n You just won ${prize[1]}RS. \n Your total amount is ${prize[0]+prize[1]}.`)
} else {console.log(`Invalid answer`)}

const answer2 = await inquirer.prompt([{
    name: "Question_3",
    type: "list",
    message: "Who is the richest man in the world",
    choices: ["Jeff Beroz", "Elon Musk", "Mukesh Ambani", "Mark Zakerberg"]
}])
if (answer2.Question_3 === "Elon Musk"){
    console.log(`Correct answer \n You just won ${prize[2]}RS. \n Your total amount is ${prize[2]+prize[1]+prize[0]}.`)
} else {console.log(`Invalid answer`)}

const answer3 = await inquirer.prompt([{
    name: "Question_4",
    type: "list",
    message: "What is the national animal of Pakistan",
    choices: ["Markhor", "Goat", "Eagle","Nawaz Sharif"]
}])
if (answer3.Question_4 === "Markhor") {
    console.log(`Correct answer \n You just won ${prize[3]}RS. \n Your total amount is ${prize[3]+prize[0]+prize[1]+prize[2]}.`)
} else (console.log(`Invalid answer`))

},5000)

// const delay = setTimeout(delayfunction, 5000)