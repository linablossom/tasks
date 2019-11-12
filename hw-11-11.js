// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf("wolf");
  return queue.length - 1 === wolfPosition ? "Pls go away and stop eating my sheep" : "Oi! Sheep number " + (queue.length - wolfPosition - 1) + "! You are about to be eaten by a wolf!"; 
}


// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < num) {
        num = arr[i];
      }
    }
    
    return num;
  }
}


// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.split('').map(c => c === 'T' ? 'U' : c).join('');
}


// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
	return string.split(' ');
}


// https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

function maps(x){
  return x.map(item => item * 2);
}


// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive (arr) {
  const res = arr.find((item, index) => index && (item - 1 !== arr[index - 1]) || arr.length <= 1);
  return typeof res === 'undefined' ? null : res;
}
