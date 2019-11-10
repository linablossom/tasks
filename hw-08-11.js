// https://www.codewars.com/kata/opposite-number/train/javascript

function opposite(number) {
  return -number;
}


// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
  return name === owner
    ? 'Hello boss'
    : 'Hello guest';
}


// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5);
}


// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
  return position + roll * 2;
}


https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript

function describeAge(age) {
let yourAge = "You're a(n) ";
  if (age <= 12) {
    return yourAge + "kid";
  } else if (age >= 13 && age <= 17) {
    return yourAge + "teenager";
  } else if (age >= 18 && age <= 64) {
    return yourAge + "adult";
  } else {
    return yourAge + "elderly";
  }
}
