// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

// old scorekey this will be change to the new score key
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";

	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in oldPointStructure) {

		 if (oldPointStructure[pointValue].includes(word[i])){
			  letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
     }
	  }
  }
	return letterPoints

 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    const userInput = input.question("Let's play some scrabble!\n Which scoring system would you like to use?\n0 - Traditional scoring system.\n1 - Simple scoring system. Each letter is worth 1 point.\n2 - Bonus Vowels: are worth 3pts and consonants are 1pt.\n\nEnter 0, 1, 2:\n");
        return userInput;
    // const userInput = input.question(request);
    // console.log(oldScrabbleScorer(userInput));
    // someFunction();
};



const  simpleScore = (newWord) => {
  newWord.toLowerCase();
    let newScore = newWord.length;
      return newScore;
};

const simpleScoreObj = {
     name: 'simplescore',
     description: 'each letter is one point',
     scorefunction: simpleScore
}


const vowelBonusScore = (vowel) => {
  let vowels = vowel.toLowerCase();

  let vowelArray = vowels.split('');
  let vowelLetters = 0;
  let stardardLetters = 0;
    for (i = 0; i < vowelArray.length; i++) {
      if (vowelArray[i] === 'a') {
       vowelLetters += 3;
      }else if (vowelArray[i] === 'e') {
        vowelLetters += 3;
      }else if (vowelArray[i] === 'i') {
        vowelLetters += 3;
      }else if (vowelArray[i] === 'o') {
        vowelLetters += 3;
      }else if (vowelArray[i] === 'u') {
        vowelLetters += 3;
      }else {
        stardardLetters += 1;
      }
    }
    let points = vowelLetters + stardardLetters;
      return points;
};

const vowelBonusObj = {
     name: 'bonus Vowels',
     description: 'Vowels are 3 pts and consonants are 1 pt.',
     scorefunction: vowelBonusScore
};

const scrabbleScore = (word, obj) => {
    let lower = word.toLowerCase();
    let arrayOne = lower.split('');
    let points = 0;
      for (i = 0; i < arrayOne.length; i ++) {
        let num = newPointStructure[arrayOne[i]];
          points += num;
      }
      return points;
};

const scrabbleScoreObj = {
     name: "Scrabble",
     description: "the traditional scoring algorithm.",
     scorefunction: scrabbleScore
}

const scoringAlgorithms = [scrabbleScoreObj, simpleScoreObj, vowelBonusObj];

function scorerPrompt() {};

function transform(oldPointStructure) {
  let newPointStructure = {};
    for (item in oldPointStructure) {
      let scr1 = oldPointStructure[item];
        for (i = 0; i < scr1.length; i++) {
          let lower = scr1[i].toLowerCase();
            newPointStructure[lower] = Number(item);
        }
    }
    return newPointStructure
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
  console.clear();
   let prompt = initialPrompt();
    console.log(`\nusing system: ${scoringAlgorithms[Number(prompt)].name}`);
      mako = '';
        while (mako !== 'stop') {
          let userInput = input.question(`\nEnter a word to be scored or 'Stop!' to Quit the game:' `);
           if (userInput === 'stop') {
             break
           } else {
             let gameScore = scoringAlgorithms[Number(prompt)].scorefunction(userInput);
              console.log("Score for" + userInput + ": " + gameScore);
           }

        }

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
