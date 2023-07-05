// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.log('The data has to be an array');
  }
}

// 2.
// tests
try {
  sayName('Alex');
  sayName(1);
} catch (error) {
  console.log(error.message);
}

// Your code here
function sayName(name) {
  if (typeof name == 'string') {
    console.log(name);
  } else {
    throw new Error('Invalid name! Must be a string!');
  }
}
// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error('There was no greeting given.');
  }

  console.log(greeting);
}

try {
  greet();
} catch (error) {
  console.log('Hello World!');
}
