# MAP, FILTER & REDUCE Interview Questions

## Question 1: Array.map()

**map()** creates a new array by calling a function for every array element. It does not change the original array.

### Basic Syntax:
```javascript
array.map((element, index, array) => {
  // return transformed element
});
```

### Simple Example:
```javascript
const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => num * 3);
console.log(multiplyThree); // [3, 6, 9, 12]
console.log(nums); // [1, 2, 3, 4] (original unchanged)
```

### Example Using All Parameters:
```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.map((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
  return element * index; // multiply element by its index
});

console.log(result);
// Output:
// Element: 10, Index: 0, Array: [10,20,30,40]
// Element: 20, Index: 1, Array: [10,20,30,40]
// Element: 30, Index: 2, Array: [10,20,30,40]
// Element: 40, Index: 3, Array: [10,20,30,40]
// [0, 20, 60, 120]
```

### Practical Example with All Parameters:
```javascript
const users = ['John', 'Jane', 'Bob'];

const userInfo = users.map((name, index, array) => {
  return {
    id: index + 1,
    name: name,
    position: `${index + 1} of ${array.length}`,
    isLast: index === array.length - 1
  };
});

console.log(userInfo);
// [
//   { id: 1, name: 'John', position: '1 of 3', isLast: false },
//   { id: 2, name: 'Jane', position: '2 of 3', isLast: false },
//   { id: 3, name: 'Bob', position: '3 of 3', isLast: true }
// ]
```

### More Examples:
```javascript
// Square numbers
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// Convert to uppercase
const names = ['john', 'jane', 'bob'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // ['JOHN', 'JANE', 'BOB']

// Extract property from objects
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const userNames = users.map(user => user.name);
console.log(userNames); // ['John', 'Jane']
```

---

## Question 2: Array.filter()

**filter()** creates a new array with elements that pass a test condition. It does not change the original array.

### Basic Syntax:
```javascript
array.filter((element, index, array) => {
  // return true to include element, false to exclude
});
```

### Simple Example:
```javascript
const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num, i, arr) => num > 2);
console.log(moreThanTwo); // [3, 4]
```

### Example Using All Parameters:
```javascript
const scores = [85, 92, 78, 96, 87];

const result = scores.filter((score, index, array) => {
  console.log(`Score: ${score}, Index: ${index}, Array: [${array}]`);
  
  // Filter scores above average
  const average = array.reduce((sum, s) => sum + s, 0) / array.length;
  const isAboveAverage = score > average;
  const isEvenIndex = index % 2 === 0;
  
  return isAboveAverage && isEvenIndex;
});

console.log(result);
// Output:
// Score: 85, Index: 0, Array: [85,92,78,96,87]
// Score: 92, Index: 1, Array: [85,92,78,96,87]
// Score: 78, Index: 2, Array: [85,92,78,96,87]
// Score: 96, Index: 3, Array: [85,92,78,96,87]
// Score: 87, Index: 4, Array: [85,92,78,96,87]
// [96] (only 96 is above average AND at even index)
```

### Practical Example with All Parameters:
```javascript
const products = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Book', price: 20, category: 'Education' },
  { name: 'Phone', price: 500, category: 'Electronics' },
  { name: 'Pen', price: 5, category: 'Office' }
];

const expensiveElectronics = products.filter((product, index, array) => {
  // Calculate average price
  const avgPrice = array.reduce((sum, p) => sum + p.price, 0) / array.length;
  
  console.log(`Product: ${product.name}, Index: ${index}, Average Price: ${avgPrice}`);
  
  return product.category === 'Electronics' && product.price > avgPrice;
});

console.log(expensiveElectronics);
// [
//   { name: 'Laptop', price: 1000, category: 'Electronics' },
//   { name: 'Phone', price: 500, category: 'Electronics' }
// ]
```

### More Examples:
```javascript
// Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Filter by string length
const words = ['hello', 'hi', 'javascript', 'code'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ['hello', 'javascript']

// Filter objects by property
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];
const expensiveProducts = products.filter(product => product.price > 400);
console.log(expensiveProducts); // [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }]
```

---

## Question 3: Array.reduce()

**reduce()** reduces an array to a single value by executing a reducer function for each element.

### Basic Syntax:
```javascript
array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);
```

### Simple Example:
```javascript
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10
```

### Example Using All Parameters:
```javascript
const numbers = [2, 4, 6, 8];

const result = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(`Acc: ${accumulator}, Current: ${currentValue}, Index: ${index}, Array: [${array}]`);
  
  // Create object with statistics
  const newAcc = {
    sum: (accumulator.sum || 0) + currentValue,
    count: (accumulator.count || 0) + 1,
    isLast: index === array.length - 1,
    processedSoFar: array.slice(0, index + 1)
  };
  
  return newAcc;
}, {});

console.log(result);
// Output:
// Acc: [object Object], Current: 2, Index: 0, Array: [2,4,6,8]
// Acc: [object Object], Current: 4, Index: 1, Array: [2,4,6,8]
// Acc: [object Object], Current: 6, Index: 2, Array: [2,4,6,8]
// Acc: [object Object], Current: 8, Index: 3, Array: [2,4,6,8]
// {
//   sum: 20,
//   count: 4,
//   isLast: true,
//   processedSoFar: [2, 4, 6, 8]
// }
```

### Practical Example with All Parameters:
```javascript
const transactions = [
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 50 },
  { type: 'deposit', amount: 200 },
  { type: 'withdrawal', amount: 75 }
];

const bankSummary = transactions.reduce((acc, transaction, index, array) => {
  console.log(`Transaction ${index + 1}/${array.length}: ${transaction.type} ${transaction.amount}`);
  
  const amount = transaction.type === 'deposit' ? transaction.amount : -transaction.amount;
  
  return {
    balance: acc.balance + amount,
    totalDeposits: acc.totalDeposits + (transaction.type === 'deposit' ? transaction.amount : 0),
    totalWithdrawals: acc.totalWithdrawals + (transaction.type === 'withdrawal' ? transaction.amount : 0),
    transactionCount: acc.transactionCount + 1,
    lastTransaction: transaction,
    isComplete: index === array.length - 1
  };
}, {
  balance: 0,
  totalDeposits: 0,
  totalWithdrawals: 0,
  transactionCount: 0,
  lastTransaction: null,
  isComplete: false
});

console.log(bankSummary);
// {
//   balance: 175,
//   totalDeposits: 300,
//   totalWithdrawals: 125,
//   transactionCount: 4,
//   lastTransaction: { type: 'withdrawal', amount: 75 },
//   isComplete: true
// }
```

### More Examples:
```javascript
// Find maximum
const numbers = [5, 2, 8, 1, 9];
const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(max); // 9

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 2, orange: 1 }

// Calculate total price
const cart = [
  { item: 'Book', price: 20 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 10 }
];
const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log(total); // 35
```

---

## Question 4: Map Polyfill

```javascript
Array.prototype.myMap = function (callback, thisArg) {
  // Handle edge cases
  if (this == null) {
    throw new TypeError('Array.prototype.myMap called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = Object(this);
  const length = parseInt(array.length) || 0;
  const result = new Array(length);
  
  for (let i = 0; i < length; i++) {
    if (i in array) {
      // Call callback with all parameters: element, index, array, thisArg
      result[i] = callback.call(thisArg, array[i], i, array);
    }
  }
  
  return result;
};

// Usage Examples:
const nums = [1, 2, 3, 4];

// Basic usage
const doubled = nums.myMap((num, index, array) => {
  console.log(`Processing ${num} at index ${index} from [${array}]`);
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// Using thisArg
const multiplier = { factor: 3 };
const tripled = nums.myMap(function(num, index, array) {
  console.log(`Multiplying ${num} by ${this.factor} at index ${index}`);
  return num * this.factor;
}, multiplier);
console.log(tripled); // [3, 6, 9, 12]
```

---

## Question 5: Filter Polyfill

```javascript
Array.prototype.myFilter = function (callback, thisArg) {
  // Handle edge cases
  if (this == null) {
    throw new TypeError('Array.prototype.myFilter called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = Object(this);
  const length = parseInt(array.length) || 0;
  const result = [];
  
  for (let i = 0; i < length; i++) {
    if (i in array) {
      // Call callback with all parameters: element, index, array, thisArg
      if (callback.call(thisArg, array[i], i, array)) {
        result.push(array[i]);
      }
    }
  }
  
  return result;
};

// Usage Examples:
const nums = [1, 2, 3, 4, 5, 6];

// Basic usage with all parameters
const evenNums = nums.myFilter((num, index, array) => {
  console.log(`Checking ${num} at index ${index} from [${array}]`);
  return num % 2 === 0;
});
console.log(evenNums); // [2, 4, 6]

// Using thisArg
const config = { minValue: 3 };
const filteredNums = nums.myFilter(function(num, index, array) {
  console.log(`Comparing ${num} with minimum ${this.minValue} at index ${index}`);
  return num >= this.minValue;
}, config);
console.log(filteredNums); // [3, 4, 5, 6]

// Complex example with index usage
const students = ['Alice', 'Bob', 'Charlie', 'Diana'];
const evenIndexStudents = students.myFilter((student, index, array) => {
  console.log(`Student: ${student}, Index: ${index}, Total: ${array.length}`);
  return index % 2 === 0; // Filter students at even indices
});
console.log(evenIndexStudents); // ['Alice', 'Charlie']
```

---

## Question 6: Reduce Polyfill

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  // Handle edge cases
  if (this == null) {
    throw new TypeError('Array.prototype.myReduce called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = Object(this);
  const length = parseInt(array.length) || 0;
  
  let accumulator;
  let startIndex = 0;
  
  // Handle case when no initialValue is provided
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    if (length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    
    // Find first non-empty index
    while (startIndex < length && !(startIndex in array)) {
      startIndex++;
    }
    
    if (startIndex >= length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    
    accumulator = array[startIndex];
    startIndex++;
  }
  
  // Iterate through array starting from startIndex
  for (let i = startIndex; i < length; i++) {
    if (i in array) {
      // Call callback with all parameters: accumulator, currentValue, index, array
      accumulator = callback(accumulator, array[i], i, array);
    }
  }
  
  return accumulator;
};

// Usage Examples:
const nums = [1, 2, 3, 4];

// Basic usage with initialValue
const sum = nums.myReduce((acc, curr, index, array) => {
  console.log(`Acc: ${acc}, Current: ${curr}, Index: ${index}, Array: [${array}]`);
  return acc + curr;
}, 0);
console.log(sum); // 10

// Without initialValue
const product = nums.myReduce((acc, curr, index, array) => {
  console.log(`Acc: ${acc}, Current: ${curr}, Index: ${index}, Array: [${array}]`);
  return acc * curr;
});
console.log(product); // 24

// Complex example - building an object
const words = ['hello', 'world', 'javascript', 'reduce'];
const wordStats = words.myReduce((acc, word, index, array) => {
  console.log(`Processing "${word}" (${index + 1}/${array.length})`);
  
  return {
    totalLength: acc.totalLength + word.length,
    wordCount: acc.wordCount + 1,
    longestWord: word.length > acc.longestWord.length ? word : acc.longestWord,
    allWords: [...acc.allWords, word.toUpperCase()],
    averageLength: Math.round((acc.totalLength + word.length) / (acc.wordCount + 1))
  };
}, {
  totalLength: 0,
  wordCount: 0,
  longestWord: '',
  allWords: [],
  averageLength: 0
});

console.log(wordStats);
// {
//   totalLength: 22,
//   wordCount: 4,
//   longestWord: 'javascript',
//   allWords: ['HELLO', 'WORLD', 'JAVASCRIPT', 'REDUCE'],
//   averageLength: 6
// }

// Edge case - empty array with initialValue
const emptySum = [].myReduce((acc, curr) => acc + curr, 0);
console.log(emptySum); // 0

// Edge case - single element without initialValue
const singleElement = [42].myReduce((acc, curr, index, array) => {
  console.log(`This won't be called with single element and no initialValue`);
  return acc + curr;
});
console.log(singleElement); // 42
```

---

## Question 7: Practical Examples with Student Data

### Setup Data:
```javascript
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 }
];
```

### Q1: Return only the names of students in capital

**Solution 1: Traditional for() loop**
```javascript
let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names); // ['PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET']
```

**Solution 2: forEach()**
```javascript
let names = [];
students.forEach(student => {
  names.push(student.name.toUpperCase());
});
console.log(names); // ['PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET']
```

**Solution 3: map() (Best)**
```javascript
let names = students.map(stu => stu.name.toUpperCase());
console.log(names); // ['PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET']
```

### Q2: Get details of students who scored more than 60 marks
```javascript
let highScorers = students.filter(stu => stu.marks > 60);
console.log(highScorers); 
// [{ name: "Piyush", rollNumber: 31, marks: 80 }, { name: "Jenny", rollNumber: 15, marks: 69 }]
```

### Q3: Students with marks > 60 AND rollNumber > 15
```javascript
let filteredStudents = students.filter(stu => stu.marks > 60 && stu.rollNumber > 15);
console.log(filteredStudents); 
// [{ name: "Piyush", rollNumber: 31, marks: 80 }]
```

### Q4: Sum total of all marks
```javascript
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
console.log(totalMarks); // 239
```

### Q5: Names of students who scored more than 60 marks
```javascript
let names = students
  .filter(stu => stu.marks > 60)
  .map(stu => stu.name);
console.log(names); // ['Piyush', 'Jenny']
```

### Q6: Complex Chaining Example
**Add 20 marks to students with < 60, then get total marks of students with > 60**
```javascript
let totalMarks = students
  .map(stu => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter(stu => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks); // 224
```

---

## Map vs forEach - Key Differences

| Feature | map() | forEach() |
|---------|-------|-----------|
| **Returns** | New array | undefined |
| **Purpose** | Transform elements | Side effects |
| **Chainable** | Yes | No |
| **Immutable** | Yes (original unchanged) | Depends on callback |

### Example:
```javascript
const numbers = [1, 2, 3];

// map - returns new array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

// forEach - returns undefined
const result = numbers.forEach(num => num * 2);
console.log(result); // undefined

// Chaining with map
const result2 = numbers
  .map(num => num * 2)
  .filter(num => num > 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(result2); // 10

// Can't chain with forEach
// numbers.forEach(num => num * 2).filter(...) // Error!
```

---

## Common Interview Questions & Answers

### Q: What's the difference between map, filter, and reduce?
- **map**: Transforms each element → returns new array of same length
- **filter**: Selects elements based on condition → returns new array (can be shorter)
- **reduce**: Reduces array to single value → returns single value

### Q: Can you chain these methods?
```javascript
const result = [1, 2, 3, 4, 5]
  .filter(num => num % 2 === 0)  // [2, 4]
  .map(num => num * 3)           // [6, 12]
  .reduce((acc, curr) => acc + curr, 0); // 18
```

### Q: When would you use forEach vs map?
- **Use map**: When you need to transform data and get a new array
- **Use forEach**: When you need to perform side effects (logging, updating DOM, etc.)

### Q: What happens if you don't provide initialValue to reduce?
```javascript
[1, 2, 3].reduce((acc, curr) => acc + curr); // Works: 6
[].reduce((acc, curr) => acc + curr); // Error: Reduce of empty array with no initial value
```

---

## Key Interview Points:

### Performance:
- **map/filter/reduce are functional** - don't mutate original array
- **Can be chained** for complex transformations
- **More readable** than traditional loops

### Best Practices:
- **Use map** for transforming data
- **Use filter** for selecting data
- **Use reduce** for aggregating data
- **Chain methods** for complex operations
- **Always provide initialValue** to reduce when possible