'use strict';

// const myObj = {
//     foo: "red",
//     bar: "dog",
//     fum: "cat",
//     quux: "lovely",
//     spam: "annoying"
// }

// function example(object) {
//  for(let key in myObj ) {
//     console.log(`${key}: ${myObj[key]}`);
// }
// }

// console.log(example(myObj))

// const people =[{
//     name: 'Bob',
//     jobTitle: 'engineer'
// },

// {
//     name: 'joe',
//     jobTitle: 'teacher'
// },

// {
//     name: 'Sally',
//     jobTitle: 'president'
// }
// ]

// function answer(array){
// for(let person of people) {
//     console.log(`${person.name} ${person.jobTitle}`)
// }
// }
// console.log(answer(people))

// function decode(words) { let decoded = ''; // convert words to array // loop through array // first letter of word determines the nth char of word to return // each word equals one letter // each letter forms a word

// words = words.split(' '); for (let i = 0; i < words.length; i++) { if (words[i][0] in decoder) { decoded += words[i][decoder[words[i][0]] - 1]; } else decoded += ' '; } return decoded; }

// console.log(decode('craft block argon meter bells brown croon droop'));



function createCharacter(name, race, origin, attack, defense, weapon) {
    const character = ['Gandalf the White', 'Bilbo Baggins', 'Frodo Baggins', 'Aragorn', 'Legolas'];
    return {
      name,
      race,
      origin,
      attack,
      defense,
      weapon, 
      describe() {
        console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
      },
      evaluateFight(character) {
        let x = this.attack - character.defense;
        let y = this.defense - character.attack;
        if(y > 0){ 
            y = 0
        }
        return `Your opponent takes ${x} damage and you receive ${y} damage.`;
      }
    };  
  }
  const gandalf = createCharacter('Gandalf the White', 'Wizard', 'Middle Earth', 10, 6);
  const bilbo = createCharacter('Bilbo Baggins', 'Hobbit', 'The Shire', 2, 1);
  const frodo = createCharacter('Frodo Baggins', 'Hobbit', 'The Shire', 3, 2);
  const aragorn = createCharacter('Aragorn son of Arathorn', 'Man', 'Dunnedain', 6, 8);
  const legolas = createCharacter('Legolad', 'Elf', 'Woodland Realm', 8, 5);
  const arwen = createCharacter('Arwen Undomiel', 'Half-Elf', 'Rivendell', 5, 5)
  let lotrCharacters = []
  lotrCharacters.push(gandalf)
  lotrCharacters.push(bilbo)
  lotrCharacters.push(frodo)
  lotrCharacters.push(aragorn)
  lotrCharacters.push(legolas)
  lotrCharacters.push(arwen)
 console.log(lotrCharacters)

function retrieveCharacter(array) {
const found = lotrCharacters.find(character => character.name === 'Aragorn son of Arathorn')
return found.describe()
}
// retrieveCharacter(lotrCharacters)

function retrieveHobbit(array) {
    const result = lotrCharacters.filter(character => character.race === 'Hobbit')
    return result;
}
// console.log(retrieveHobbit(lotrCharacters))

function aboveFive(array) {
    const attack = lotrCharacters.filter(character => character.attack >= 5)
    return attack;
}
console.log(aboveFive(lotrCharacters))