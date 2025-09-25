# React Hooks - useState Behavior Analysis

## Question: What will be the output for the following code and explain the concepts?

### 1. useState Hook Examples

```javascript
const [count, setCount] = useState(0);

const handleIncrement1 = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};

const handleIncrement2 = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

## Outputs and Explanations

### handleIncrement1 Output:
**Initial count: 0**
**After calling handleIncrement1(): 3**

### handleIncrement2 Output:
**Initial count: 0**
**After calling handleIncrement2(): 1**

## Detailed Concept Explanation

### 1. **Functional Updates (`handleIncrement1`)**

```javascript
const handleIncrement1 = () => {
  setCount((prev) => prev + 1);  // prev = 0, new value = 1
  setCount((prev) => prev + 1);  // prev = 1, new value = 2
  setCount((prev) => prev + 1);  // prev = 2, new value = 3
};
```

- **Uses functional updates with callback function**
- **Each `setCount` receives the most recent value** as `prev`
- **All three updates are batched but executed sequentially**
- **Result: count becomes 3**

**Why it works:**
- React batches state updates but functional updates chain properly
- Each callback receives the result of the previous update
- Ensures all three increments are applied

### 2. **Direct Value Updates (`handleIncrement2`)**

```javascript
const handleIncrement2 = () => {
  setCount(count + 1);  // count = 0, sets to 1
  setCount(count + 1);  // count = 0, sets to 1
  setCount(count + 1);  // count = 0, sets to 1
};
```

- **Uses direct value assignment**
- **All three calls use the same `count` value (0)**
- **State updates are batched and the last one wins**
- **Result: count becomes 1**

**Why it behaves this way:**
- `count` variable captures the value at render time (closure)
- All three `setCount` calls use the same captured value
- React batches the updates, effectively making only one update

## Key Concepts

### State Batching
- React batches multiple state updates in event handlers
- Improves performance by reducing re-renders
- In React 18+, batching also occurs in timeouts, promises, and native event handlers

### Functional vs Direct Updates
- **Functional updates**: `setState(prevState => newState)`
  - Use when new state depends on previous state
  - Guarantees you get the most recent state value
  - Safer for multiple sequential updates

- **Direct updates**: `setState(newValue)`
  - Use when new state doesn't depend on previous state
  - Can lead to stale closure issues in multiple updates
  - Simpler for independent state changes

### Best Practices
1. **Use functional updates** when incrementing/decrementing
2. **Use direct updates** when setting independent values
3. **Avoid multiple state updates** that depend on each other in the same event handler
4. **Consider useReducer** for complex state logic



