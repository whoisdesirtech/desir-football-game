let readlineSync = require("readline-sync");


console.log("Welcome to NFL Football 101: Get Ready To Play!");
let userName = readlineSync.question("What is your name? ");

console.log("Hi " + userName + "!");

const theGame = () =>{
console.log("What city do you want to visit?");
let option = readlineSync.question("Options: Tampa, Jacksonville, Miami? ");

const playAgain = () =>{
    let userDecision =  readlineSync.question('Do you want to play again? y/n')

    if(userDecision === 'y') {
      theGame()
    } else {
      console.log('Thank you for playing have a nice day!')
    }

}

switch (option) {
  case "Tampa":
    console.log("You must be looking for Tom Brady!");
    themeParkChoice = [
      "Six Flags",
      "Busch Gardens",
      "Disney World",
      "Desir Land",
    ],
    footBallChoice = [
        '', '', '',''
    ], 
    stadiumChoice = [
        'Wrigley Field', 'Heinz Field', ' ' , ' '
    ]
    index = readlineSync.keyInSelect( themeParkChoice, "Which is a Tampa theme park?");
    

    //for answer of themePark choice 
    if (2) {
      console.log(
        "Ok, " +
          themeParkChoice[index] +
          " is in Tampa. Get ready to learn about the football team."
      );
      index = readlineSync.keyInSelect(
        footBallChoice,
        "What football team plays in Tampa?"
      );
    } else {
      console.log(
        "Sorry " +
          themeParkChoice[index] +
          " is not in Tampa /n What city do you want to visit next?"
      );
      index = readlineSync.keyInSelect(
        footBallChoice,
        "What football team plays in Tampa?"
      );
    }
    //for second question 
    if (1) {
      console.log(
        "Ok, " +
          footBallChoice[index] +
          " plays in tampa. /n G"
      );
      
    } else {
      console.log(
        "Sorry " +
          footBallChoice[index] +
          " is not in Tampa /n What city do you want to visit next?"
      );
    
    }
    //for the third question 
    if (3){
        console.log(
            "Ok, " +
              stadiumChoice[index] +
              " is the stadium in Tampa"
          );
          playAgain();
    }else {
        console.log(
            "Sorry " +
              stadiumChoice[index] +
              " is not in Tampa /n What city do you want to visit next?"
          );
        playAgain();
        
    }
    //

    break;
  case "Jacksonville":
    console.log("Welcome to 5 Bridges!");
    break;
  case "Miami":
    console.log('Miami: "Make sure you wear something for the beach!"');
    break;
}
}
theGame();
// let animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'];
// let index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');
// const tampaTeam = () => {
//     let challenge = readlineSync.question( `You must be looking for Tom Brady?` );
// }
// const jacksonvilleTeam = () => {
//     let challenge = readlineSync.question( `You must be looking for Tom Brady?` );
// }
// const tampaTeam = () => {
//     let challenge = readlineSync.question( `You must be looking for Tom Brady?` );
// }
