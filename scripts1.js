'use strict';

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////////////////////////////////////////////

/* Well, remember that methods are simply functions
that we can call on objects.
So basically, they are functions attached to objects.
So if we have array methods, that means that
arrays themselves are also objects.
And so these array methods are simply functions
that are attached to all arrays
that we create in JavaScript. */

/* But for now, I just want you to understand that arrays
are objects, and that they get access to special
built in methods that we can essentially
see as tools for arrays.
And so as I mentioned, in this lecture, we're gonna start */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

///////////// slice Method //////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2)); //(4) ["c", "d", "e", "f"]

/* And then this slice method will return a new array.
So as I said, this does not mutate the original arr, array.
Instead it returns a new array.*/

console.log(arr.slice(2, 4)); //(2) ["c", "d"]

console.log(arr.slice(-2)); // (2) ["e", "f"]
console.log(arr.slice(-1)); // (1) ["f"]
/* to get Last element of an array */
console.log(arr.slice(1, -2)); // ["b", "c", "d"]
console.log(arr.slice()); // for shallow copy
/* (6) ["a", "b", "c", "d", "e", "f"] */
console.log([...arr]);
/* (6) ["a", "b", "c", "d", "e", "f"] */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////////////// splice ////////////////////////////////

console.log(arr.splice(3)); // (3) ["d", "e", "f"]
console.log(arr); // (3) ["a", "b", "c"]
console.log(arr.splice(1)); // (2) ["b", "c"]
console.log(arr); // ["a"]
console.log(arr.splice(1)); //[]

/*  this will change in the original array  */
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
/*  mostly used to delete last element of an array */
console.log(arr1.splice(-1)); //["f"]
console.log(arr1); // (5) ["a", "b", "c", "d", "e"]
console.log(arr1.splice(1, 2)); // ["b", "c"]
/* for selected parameters we want to extract */
console.log(arr1); // ["a", "d", "e"]

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// Reverse ///////////////////////////////////

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr2.reverse()); // ["f", "e", "d", "c", "b", "a"]
console.log(arr2); // (6) ["f", "e", "d", "c", "b", "a"]

/*  original array also changes with this method */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////////////// concat //////////////////////////////////

let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
const concatArr = arr3.concat(arr2);
console.log(concatArr);
/* (12) ["a", "b", "c", "d", "e", "f", "f", "e", "d", "c", "b", "a"] */
console.log(arr3);
/* (6) ["a", "b", "c", "d", "e", "f"] */
/* this method does not mutate original array */

console.log([...arr3, ...arr2]);
/* (12) ["a", "b", "c", "d", "e", "f", "f", "e", "d", "c", "b", "a"] */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

///////////////////// join ///////////////////////////////

console.log(concatArr.join('_'));
/* a_b_c_d_e_f_f_e_d_c_b_a */
/* that will return a string  */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

///////////////// Loop an Array with forEach ///////////////

// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* 
for (const money of movements) {
  if (money > 0) {
    console.log(`You deposited ${money}`);
  } else {
    console.log(`You Withdraw ${Math.abs(money)}`);
  }
}


movements.forEach(function (money) {
  if (money > 0) {
    console.log(`You deposited ${money}`);
  } else {
    console.log(`You Withdraw ${money}`);
  }
});

/* You deposited 200
   You deposited 450
   You Withdraw 400
   You deposited 3000
   You Withdraw 650
   You Withdraw 130
   You deposited 70
   You deposited 1300 */

/* in bove both code are similar ,we can get current index of array element 
in both type  */

for (const [i, money] of movements.entries()) {
  if (money > 0) {
    console.log(`${i + 1} You deposited ${money}`);
  } else {
    console.log(`${i + 1} You Withdraw ${Math.abs(money)}`);
  }
}
/* 1 You deposited 200
   2 You deposited 450
   3 You Withdraw 400
   4 You deposited 3000
   5 You Withdraw 650
   6 You Withdraw 130
   7 You deposited 70
   8 You deposited 1300 */

movements.forEach(function (money, i, arr) {
  if (money > 0) {
    console.log(`${i + 1} You deposited ${Math.abs(money)}`);
  } else {
    console.log(`${i + 1} You Withdraw ${Math.abs(money)}`);
  }
});

/* Now when should you use forEach
      and when should you use the for of loop.
      Well one fundamental difference
      between the two of them is that you cannot break out
      of a forEach loop.so the continue and break statements     
      do not work in a forEach loop at all.
      So instead, forEach will always loop over the entire array
      and there is nothing that you can do about it.
      So if you really need to break out of a loop
      then you have to keep using the for of loop,
      but other than that
      it really comes down to your personal preference.
      So the continue and break statements
      Just like so many other things in JavaScript.*/

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

//////////////////// forEach on Map /////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (currEle, key, map) {
  console.log(`${key} :${currEle}`);
});
/* USD :United States dollar
   EUR :Euro
   GBP :Pound sterling */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

//////////////////// forEach on Set /////////////////////////
const currenciesSet = new Set(['USD', 'USD', 'GBP', 'EUR', 'EUR']);
console.log(currenciesSet);
/* Set(3) {"USD", "GBP", "EUR"} */
currenciesSet.forEach(function (currEle, key, set) {
  console.log(`${key} :${currEle}`);
  console.log(set);
});
/* USD :USD
   GBP :GBP
   EUR :EUR */

/* as we know 
    Well, a set doesn't have keys, right?
    And it doesn't have indexes either.*/
