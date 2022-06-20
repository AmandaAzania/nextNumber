let numbers = [1, 2, 3,4,5,6,7,8,8,9];
  let iterator = numbers.values();
  let one = iterator.next().value;
  let two = iterator.next().value;
  let three = iterator.next().value;
console.log(one);
console.log(two);
console.log(three);