# VAR, LET & CONST Interview Questions

## Question 1: Variable Shadowing

**Variable Shadowing** occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively "hiding" the outer variable.

### Example:
```javascript
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi"; // New variable shadows outer 'a'
    console.log(a); // Output: "Hi"
  }

  console.log(a); // Output: "Hello"
}

test();
```

### Key Points:
- **Inner variable shadows outer variable** within its scope
- **Different memory locations** - they are separate variables
- **Works with let, const, and var**
- **Outer variable remains unchanged**

### More Examples:
```javascript
// Example 1: Function scope shadowing
var name = "Global";

function showName() {
  var name = "Local";
  console.log(name); // Output: "Local"
}

showName();
console.log(name); // Output: "Global"

// Example 2: Block scope shadowing with let/const
const age = 25;

{
  const age = 30;
  console.log(age); // Output: 30
}

console.log(age); // Output: 25
```

---

## Question 2: Illegal Shadowing

**Illegal Shadowing** occurs when you try to shadow a `let` or `const` variable with a `var` variable in the same scope.

### Example:
```javascript
function func() {
  var a = "Hello";
  let b = "Namaste";

  if (true) {
    let a = "Hi";    // ✅ Legal Shadowing (let shadows var)
    var b = "Bye";   // ❌ Illegal Shadowing (var cannot shadow let)
    console.log(a);  // Works fine
    console.log(b);  // SyntaxError: Identifier 'b' has already been declared
  }
}

func();
```

### Rules for Legal/Illegal Shadowing:

#### ✅ Legal Shadowing:
```javascript
// 1. let/const can shadow var
var a = 1;
{
  let a = 2;     // ✅ Legal
  const a = 3;   // ✅ Legal (in different block)
}

// 2. let/const can shadow let/const in different scope
let b = 1;
{
  let b = 2;     // ✅ Legal
  const b = 3;   // ✅ Legal (in different block)
}

// 3. var can shadow var
var c = 1;
{
  var c = 2;     // ✅ Legal
}
```

#### ❌ Illegal Shadowing:
```javascript
// 1. var cannot shadow let/const in same scope
let a = 1;
{
  var a = 2;     // ❌ Illegal - SyntaxError
}

const b = 1;
{
  var b = 2;     // ❌ Illegal - SyntaxError
}
```

### Why This Happens:
- **var is function-scoped** - it tries to redeclare in the entire function
- **let/const are block-scoped** - they are already declared in that scope
- **Conflict occurs** when var tries to redeclare an existing let/const

---

## Question 3: Hoisting

**Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

### Example:
```javascript
console.log(a); // Output: undefined (not an error!)

var a = 10;

console.log(a); // Output: 10
```

### What Actually Happens (Behind the Scenes):
```javascript
// JavaScript interprets the above code as:
var a; // Declaration is hoisted to the top
console.log(a); // undefined (declared but not initialized)

a = 10; // Assignment stays in place

console.log(a); // 10
```

### Hoisting with Different Variable Types:

#### var Hoisting:
```javascript
console.log(x); // undefined
var x = 5;

// Equivalent to:
var x;
console.log(x); // undefined
x = 5;
```

#### let Hoisting:
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

#### const Hoisting:
```javascript
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
```

#### Function Hoisting:
```javascript
// Function declarations are fully hoisted
sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// Function expressions are not hoisted
sayBye(); // TypeError: sayBye is not a function

var sayBye = function() {
  console.log("Bye!");
};
```

---

## Question 4: Temporal Dead Zone

**Temporal Dead Zone (TDZ)** is the time between when a `let` or `const` variable is hoisted and when it's initialized.

### Example:
```javascript
console.log(a, b, c); // ReferenceError: Cannot access 'b' before initialization

const c = 30;
let b = 20;
var a = 10;
```

### What Happens:
```javascript
// Behind the scenes:
// 1. All variables are hoisted to the top
// 2. var 'a' is initialized with undefined
// 3. let 'b' and const 'c' are in TDZ (cannot be accessed)

console.log(a); // undefined (var is initialized)
console.log(b); // ReferenceError (let is in TDZ)
console.log(c); // ReferenceError (const is in TDZ)

var a = 10;
let b = 20;
const c = 30;
```

### TDZ Examples:

#### Example 1: Block Scope TDZ
```javascript
{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}
```

#### Example 2: Function Parameter TDZ
```javascript
function example(a = b, b = 2) {
  return a + b;
}

example(); // ReferenceError: Cannot access 'b' before initialization
```

#### Example 3: TDZ with typeof
```javascript
console.log(typeof a); // "undefined" (var)
console.log(typeof b); // ReferenceError (let in TDZ)

var a = 1;
let b = 2;
```

---

## Comprehensive Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Hoisting** | Yes (initialized with undefined) | Yes (but TDZ) | Yes (but TDZ) |
| **TDZ** | No | Yes | Yes |
| **Redeclaration** | Allowed | Not allowed | Not allowed |
| **Reassignment** | Allowed | Allowed | Not allowed |
| **Initialization** | Optional | Optional | Required |

---

## Common Interview Questions & Answers:

### Q: What will this code output?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3, 3, 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 0, 1, 2
```

### Q: What's wrong with this code?
```javascript
const obj = { name: "John" };
obj.name = "Jane"; // ✅ This works (modifying property)
obj = { name: "Bob" }; // ❌ TypeError: Assignment to constant variable
```

### Q: Explain this hoisting behavior:
```javascript
var a = 1;
function test() {
  console.log(a); // undefined (not 1!)
  var a = 2;
}
test();

// Due to hoisting, function becomes:
function test() {
  var a; // hoisted declaration
  console.log(a); // undefined
  a = 2;
}
```

---

## Key Interview Points:

### Variable Shadowing:
- **Inner variable hides outer variable** in the same scope
- **Creates new variable** - doesn't modify outer one
- **Works with all variable types** (var, let, const)

### Illegal Shadowing:
- **var cannot shadow let/const** in same scope
- **let/const can shadow var** ✅
- **Results in SyntaxError** when violated

### Hoisting:
- **Declarations are moved to top** of scope
- **var is initialized** with undefined
- **let/const are hoisted** but not initialized (TDZ)
- **Functions are fully hoisted** (declarations, not expressions)

### Temporal Dead Zone:
- **Time between hoisting and initialization** for let/const
- **ReferenceError** when accessed in TDZ
- **Helps catch errors** by preventing usage before initialization

### Best Practices:
- **Use const by default** for values that don't change
- **Use let** when you need to reassign
- **Avoid var** in modern JavaScript
- **Declare variables at the top** to make hoisting clear