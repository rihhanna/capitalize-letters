// Good Luck 💪🏾
function makeCapital(str) {
    // split the string by spaces
    let words = str.split(" ");
    // loop through the words
    for (let i = 0; i < words.length; i++) {
      // get the first character of the word
      let first = words[i][0];
      // convert it to uppercase
      let upper = first.toUpperCase();
      // replace the first character with the uppercase one
      words[i] = upper + words[i].slice(1);
    }
    // join the words by spaces
    let capitalized = words.join(" ");
    // return the capitalized string
    return capitalized;
  }
  console.log(makeCapital("my name is ali"))  
 console.log( makeCapital("fikrcamp Bootcamp"))// ➞ "Fikrcamp Bootamp"
 console.log(makeCapital("i live In Paris")) 
