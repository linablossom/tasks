// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return Math.round(2 * circle.radius * Math.PI * 1000000) / 1000000;
}


// https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n){
  switch (n) {
    case Number.MAX_VALUE:
      return 'Input number is Number.MAX_VALUE';
    case Number.MIN_VALUE:
      return 'Input number is Number.MIN_VALUE';
    case Number.NEGATIVE_INFINITY:
      return 'Input number is Number.NEGATIVE_INFINITY';
    case Number.POSITIVE_INFINITY:
      return 'Input number is Number.POSITIVE_INFINITY';
    default:
      if (Number.isNaN(n)) {
        return 'Input number is Number.NaN';
      }
      return `Input number is ${n}`;
  }
  
}


// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  const res = [];
  for (let index in obj) {
    if (index.length === 5) {
      res.push(index);
    }
    if (obj[index].length === 5) {
      res.push(obj[index]);
    }
  }
  return res;
}


// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){

	var res = []

	for (let i = 0; i < n; i++) {
		res.push(function() {
      return i;
		})
	}
	return res
}
