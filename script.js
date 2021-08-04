'use strict';
//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////////////////////// codding Challange /////////////////////////////////

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia1 = dogsJulia.slice();
console.log(dogsJulia1);
dogsJulia1.splice(0, 1);
console.log(dogsJulia1); // (4) [5, 2, 12, 7]
dogsJulia1.splice(-2);
console.log(dogsJulia1); // (2) [5, 2]

const checkDogs = function (Arr1, Arr2) {
  const dogsCheck = [...Arr1, ...Arr2];
  dogsCheck.forEach(function (d, i) {
    if (d > 3) {
      console.log(`Dogs nimber${i + 1} is an adult and is ${d} years old`);
    } else {
      console.log(`Dogs number ${i + 1} is still a puppy `);
    }
  });
};
checkDogs(dogsJulia1, dogsKate);

////////////////////////////////////////////////////////////////
//// MAP ///////// Filter ////////// Reduce ///////////////////

/* Map returns a new array containing the reasult of applying an 
operation on all array element */

/* filler return a new array containing the array element that
passed a specified test condition */

/* reduce boils all array elements down to one single value */
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// MAP method /////////////////////////////////////

/* currency conversion euro to usd */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movements);
/* (8) [200, 450, -400, 3000, -650, -130, 70, 1300] */
console.log(movementsUSD);
/* /* (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 
  3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002] */

const newMovements = [];
for (const mov of movements) newMovements.push(mov * euroToUsd);
console.log(newMovements);
/* /* (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 
  3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002] */

const movementsUSD1 = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD1);
/* (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 
  3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002] */

const movementsDes = movements.map((mov, i, arr) => {
  const type = mov > 0 ? 'deposit' : 'withdrawal';
  if (mov > 0) {
    return `Movemenst ${i + 1} : You ${type} ${mov}`;
  } else {
    return `Movemenst ${i + 1} : You ${type} ${Math.abs(mov)}`;
  }
});
console.log(movementsDes);
/* (8) ["Movemenst 1 : You Deposited 200", "Movemenst 2 : You Deposited 450",
 "Movemenst 3 : You Deposited 400", "Movemenst 4 : You Deposited 3000", 
 "Movemenst 5 : You Deposited 650", "Movemenst 6 : You Deposited 130",
"Movemenst 7 : You Deposited 70", "Movemenst 8 : You Deposited 1300"] */

/*  we deifine type variable having input from terneary operator */

/* (8) ["Movemenst 1 : You deposit 200", "Movemenst 2 : You deposit 450",
 "Movemenst 3 : You withdrawal 400", "Movemenst 4 : You deposit 3000",
  "Movemenst 5 : You withdrawal 650", "Movemenst 6 : You withdrawal 130",
   "Movemenst 7 : You deposit 70", "Movemenst 8 : You deposit 1300"] */

const movementsDes1 = movements.map((mov, i, arr) => {
  return `Movemenst ${i + 1} : You${
    mov > 0 ? 'deposite' : 'withdrawal'
  } ${mov}`;
});
console.log(movementsDes1);
/* (8) ["Movemenst 1 : Youdeposite 200", "Movemenst 2 : Youdeposite 450",
 "Movemenst 3 : Youwithdrawal -400", "Movemenst 4 : Youdeposite 3000", 
 "Movemenst 5 : Youwithdrawal -650", "Movemenst 6 : Youwithdrawal -130",
  "Movemenst 7 : Youdeposite 70", "Movemenst 8 : Youdeposite 1300"] */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪
/////////////////////////////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.7,
  pin: 3333,
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* let's write our code.
Now we could simply start writing our code
out here in the global context.
However, that is not a good practice. */
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🧧🧧🧧🧧🧧🧧🧧🧧
const displayMovements = function (movements, sort) {
  containerMovements.innerHTML = '';
  /* above code is used to clear inner HTML content */
  /* below code is used to sort movemenst */
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
  
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    /*  The string to be parsed as HTML or XML and inserted into the tree.
    
       A DOMString representing the position relative to the element; 
       must be one of the following strings:
       'beforebegin': Before the element itself.
       'afterbegin': Just inside the element, before its first child.
       'beforeend': Just inside the element, after its last child.
       'afterend': After the element itself.
       text
       The string to be parsed as HTML or XML and inserted into the tree. */
  });
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🧧🧧🧧🧧🧧🧧🧧🧧
/*  this for showing Account balance */
const calcDisplayBalance = function (accountObj) {
  const balance = accountObj.movements.reduce((acc, mov) => mov + acc, 0);
  accountObj.balance = balance;
  console.log(accountObj.balance);
  labelBalance.textContent = `${accountObj.balance}€`;
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🧧🧧🧧🧧🧧🧧🧧🧧
/* display Income/deposite money data on web page */
const calcDisplayDeposite = function (mov) {
  const income = mov
    .filter(mov => mov > 0)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  console.log(income);
  labelSumIn.textContent = `${income}€`;
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🧧🧧🧧🧧🧧🧧🧧🧧
/* display withdrawal money data */
const calcDisplayWithdrawal = function (mov) {
  const income = mov
    .filter(mov => mov < 0)
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  console.log(income);
  labelSumOut.textContent = `${Math.abs(income)}€`;
};
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//🧧🧧🧧🧧🧧🧧🧧🧧
/* for displaying Interest  */
const calcDisplayInterst = function (mov) {
  const income = mov.movements
    .filter((mov, i, arr) => {
      //console.log(arr);
      return mov > 0;
    })
    .map(interest => (interest * mov.interestRate) / 100) // (5) [2.4, 5.4, 36, 0.84, 15.6]
    .filter((mov, i, arr) => {
      //console.log(arr);
      return mov >= 1; // 59.4
    })
    .reduce((acc, mov, i, arr) => acc + mov, 0);
  console.log(income);
  labelSumInterest.textContent = `${Math.abs(income)}€`;
};

//🧧🧧🧧🧧🧧🧧🧧🧧
/* update accounts after transfer  */

const updateUI = function (acc) {
  // for displaying movements
  displayMovements(acc.movements);
  // for displaying balance
  calcDisplayBalance(acc);
  // for displaying deposite
  calcDisplayDeposite(acc.movements);
  //
  calcDisplayInterst(currentAccount);
};
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* sample code to get user name */
const owner = 'Jonas Schmedtmann';
const owner1 = owner.toLowerCase().split(' ');
console.log(owner1); // (2) ["jonas", "schmedtmann"]
const owner2 = owner1.map(mov => mov[0]);
console.log(owner2); // ["j", "s"]
const owner3 = owner2.join('');
console.log(owner3); // js
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/*  make the above code small */
const userId1 = owner
  .toLowerCase()
  .split(' ')
  .map(mov => mov[0])
  .join('');
console.log(userId1); // js

/*  moving our code to a function and passing an object array.
we dont want new array/object ,but we want to modify passing object
by adding userId property in it */

const ownerId = function (objectArr) {
  objectArr.forEach(function (object) {
    object.userId = object.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0])
      .join('');
  });
};
ownerId(accounts);
console.log(accounts);
/* (4) [{…}, {…}, {…}, {…}]
0:
interestRate: 1.2
movements: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
owner: "Jonas Schmedtmann"
pin: 1111
userId: "js" ----------->this is what,we added in the object
[[Prototype]]: Object
1: {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, userId: "jd"}
2: {owner: "Steven Thomas Williams", movements: Array(8), interestRate: 0.7, pin: 3333, userId: "stw"}
3: {owner: "Sarah Smith", movements: Array(5), interestRate: 1, pin: 4444, userId: "ss"}
*/

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

/* apply login implementation */

let currentAccount;
btnLogin.addEventListener('click', function (eventStop) {
  eventStop.preventDefault();
  currentAccount = accounts.find(
    ele => ele.userId === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back ,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    updateUI(currentAccount);
  }
});
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* transfer amount logic */
/* apply eventlistner of transfer button */
btnTransfer.addEventListener('click', function (eventStop) {
  eventStop.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(mov => mov.userId === inputTransferTo.value);
  console.log(amount, receiveAcc);
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiveAcc?.userId !== currentAccount.userId
  ) {
    console.log('Transfer Valid');
    // tranfer amount
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = '';
  }
});
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* Loan logic */

btnLoan.addEventListener('click', function (eventStop) {
  eventStop.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
    console.log('Loan Transferred sucessfully');
  }
  inputLoanAmount.value = '';
});

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* Delete account logic */

btnClose.addEventListener('click', function (eventStop) {
  eventStop.preventDefault();
  console.log('Checked');

  inputCloseUsername.value === currentAccount.userId &&
    Number(inputClosePin.value === currentAccount.pin);
  {
    const index = accounts.findIndex(
      acc => acc.userId === currentAccount.userId
    );
    console.log(index);
    // delete account
    accounts.splice(index, 1);

    // hide delete account
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* Sort logic */
let sorted = false; // this is for changing order of movements
btnSort.addEventListener('click', function (eventStop) {
  eventStop.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////// filter method ///////////////////////

/* in this we aplly certain condition in an array element 
so only that element will present in new array which satatisfied that
condition,original array is same ,not mutated */

const deposite = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposite); // (5) [200, 450, 3000, 70, 1300]
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]

/* we can write this code with forof loop */
const depositeFor = [];
for (const mov of movements) {
  if (mov > 0) depositeFor.push(mov);
}
console.log(depositeFor); // (5) [200, 450, 3000, 70, 1300]

const withdraw = movements.filter(move => move < 0);
console.log(withdraw); // (3) [-400, -650, -130]

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////// Reduce Method //////////////

const balance = movements.reduce(function (acc, value, i, arr) {
  console.log(`Accumulator value at ${i + 1} is ${acc}`);
  return acc + value;
}, 0);

/* Accumulator value at 1 is 0
   Accumulator value at 2 is 200
   Accumulator value at 3 is 650
   Accumulator value at 4 is 250
   Accumulator value at 5 is 3250
   Accumulator value at 6 is 2600
   Accumulator value at 7 is 2470
   Accumulator value at 8 is 2540 */

console.log(balance); // 3840

/*  above code with forOf loop */
let sum = 0;
for (const acc of movements) sum = sum + acc;
console.log(sum); //3840

/*  to get max vlaue in array by using reduce method */
const movements1 = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const maxValue = movements1.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements1[0]);
console.log(maxValue); // 3000

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

////// Coding Challenge #2 /////////////////

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

/* 1. Calculate the dog age in human years using the following formula: 
 if the dog is <= 2 years old, humanAge = 2 * dogAge.
 If the dog is > 2 years old, humanAge = 16 + dogAge * 4. */
const calcAverageHumanAge = function (age) {
  const age1 = age.map(function (mov, i, arr) {
    let humanAge;
    if (mov <= 2) {
      humanAge = 2 * mov;
      return humanAge;
    }
    if (mov > 2) {
      humanAge = 16 + mov * 4;
      return humanAge;
    }
  });
  /* /* 2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old) */

  const dogsArr = age1;
  console.log(dogsArr);
  // (7) [36, 4, 32, 2, 76, 48, 28]
  // (7) [80, 40, 56, 36, 40, 2, 32]

  const adultDogsArr = dogsArr.filter(mov => mov > 18);
  console.log(adultDogsArr); // [36, 32, 76, 48, 28]
  // [80, 40, 56, 36, 40, 32]

  /* 3. Calculate the average human age of all adult dogs */
  const avgHumenAge4AdultDogs = adultDogsArr.reduce((acc, mov, i, arr) => {
    acc = acc + mov / arr.length;
    return acc;
  }, 0);

  console.log(avgHumenAge4AdultDogs); // 44
  // 47.333333333333336
};
calcAverageHumanAge(data1); // (7) [36, 4, 32, 2, 76, 48, 28]
calcAverageHumanAge(data2); // (7) [36, 4, 32, 2, 76, 48, 28]

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

//// Chanining of methods //////

/* we apply all these methods one after one to get 
desire output */

const eurToUsd = 1.1;
const toataDepositeUSD = movements
  .map(mov => mov * 1.1)
  .filter((mov, i, arr) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(toataDepositeUSD); // 5522.000000000001

/* for debugging we can arr input to any method 
to rectify where is the error */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// find Method //////////////

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
/* (8) [200, 450, -400, 3000, -650, -130, 70, 1300] */
console.log(firstWithdrawal);
/* -400 */

const firstWithdrawal1 = accounts.find(mov => mov.owner === 'Jessica Davis');
console.log(firstWithdrawal1);
/* {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222, userId: "jd"} */

/*  in above code we are passing array of object ,so mov element must be a object
 so we have to serach with propertey name as propertey name present in array of
 object. */

/* 
So you see that just like the Filter method,
the Find method also needs a callback function
that returns a Boolean.
So the result of this is of course,
is either true or false.
*/

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// find IndexMethod //////////////

/* The findIndex() method returns the index of the first array element 
that passes a test (provided by a function).

The method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, 
findIndex() returns the index of that array element 
(and does not check the remaining values)
Otherwise it returns -1

findIndex() does not execute the function for empty array elements.

findIndex() does not change the original array. */

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// Some method //////////////

/*  as in includes method  */
/* The includes() method determines whether an array
 includes a certain value among its entries, 
 returning true or false as appropriate. */

/* The some() method tests whether at least one element in 
 the array passes the condition implemented by the provided function.
  It returns true if, in the array, it finds an element for which
   the provided function returns true; otherwise it returns false. 
   It doesn't modify the array. */

console.log(movements);
/* (8) [200, 450, -400, 3000, -650, -130, 70, 1300] */
console.log(movements.includes(-130)); // true
console.log(movements.some(acc => acc === -130)); // true
console.log(movements.some(acc => acc > 5000)); //false
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/////////// Every method //////////////

/* The every() method tests whether all elements in the array pass
 the test implemented by the provided function.
  It returns a Boolean value. */

console.log(movements.every(mov => mov > 1400)); // false
//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/////////// Separate CallBack method //////////////

const mov = mov => mov > 0;
console.log(movements.every(mov)); // false
console.log(movements.some(mov)); // true
console.log(movements.filter(mov)); // false

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// Flat and flatMap Method //////////////

/* The flat() method creates a new array with all sub-array elements
 concatenated into it recursively up to the specified depth. 
 A new array with the sub-array elements concatenated into it. */

/* flat()
    flat(depth) */
/* The depth level specifying how deep a nested array structure should be flattened.
    Defaults to 1.*/

const arr = [
  [
    [[1, 2], 3],
    [4, 5, 6],
  ],
  [7, 8, 9],
];
console.log(arr.flat(3));
/* (9) [1, 2, 3, 4, 5, 6, 7, 8, 9] */

const overallBalance = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, mov, i, arr) => {
    console.log(arr);
    return acc + mov;
  }, 0);
console.log(overallBalance); // 17840
/* (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, 
  -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, 
  -460, 430, 1000, 700, 50, 90] */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/////////// flatMap method //////////////

/* The flatMap() method returns a new array formed by applying a given
 callback function to each element of the array, and then flattening the result
  by one level. It is identical to a map() followed by a flat() of depth 1, 
but slightly more efficient than calling those two methods separately. */

const overallBalance1 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov, i, arr) => {
    //console.log(arr);
    return acc + mov;
  }, 0);
console.log(overallBalance1); // 17840

//⚪🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁⚪

/////////// Sorting of array Method //////////////

/* The sort() method sorts the elements of an array in place and returns 
the sorted array. The default sort order is ascending, built upon converting 
the elements into strings, then comparing their sequences of UTF-16 code units values. 
The sorted array. Note that the array is sorted in place, and no copy is made.*/

const owners = ['Jonas', 'Zack', 'Pooja', 'Devender'];
console.log(owners.sort()); // (4) ["Devender", "Jonas", "Pooja", "Zack"]
console.log(owners); // (4) ["Devender", "Jonas", "Pooja", "Zack"]
/* for string we can apply directly */

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
/*  not applicable to numbers directly */

console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if ((a = b)) return 0;
  })
);
/*  ascending order---->
(8) [-650, -400, -130, 70, 200, 450, 1300, 3000] */

/* 1️⃣   (-1) means that value1 is less than value2 
        (then sort value1 to a lower index than value2)
    
   2️⃣   (0) means that value1 is equal to value2 
            (then leave the indices of value1 and value2 
            unchanged with respect to each other)
  3️⃣    (1) means that value1 is greater than value2 
         (then sort value1 to a higher index than value2) */

console.log(
  movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if ((a = b)) return 0;
  })
);
/*  descending order---->
(8) [3000, 1300, 450, 200, 70, -130, -400, -650] */
console.log(movements.sort((a, b) => a - b)); // ascending order
/* (8)[(-650, -400, -130, 70, 200, 450, 1300, 3000)]; */
console.log(movements.sort((a, b) => b - a)); // descending order
/* (8) [3000, 1300, 450, 200, 70, -130, -400, -650] */
