// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf("wolf");
  return queue.length - 1 === wolfPosition ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + (queue.length - wolfPosition - 1) + "! You are about to be eaten by a wolf!"; 
}
