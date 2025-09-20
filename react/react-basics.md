---
metadata:
  primary_file: react-basics.md
  supporting_text: none
  cv_file: MyCV.tex
  generated_on: 2025-09-19
---

### React Basics

1. What is react ?
    - React is a JavaScript library for building user interfaces, maintained by Meta (formerly Facebook).
    - It allows developers to create reusable UI components.
    - React is known for its efficiency, leveraging a Virtual DOM to optimize rendering performance.

2. Why react is fast ?
    - React is fast because it uses a Virtual DOM to minimize direct DOM manipulations, which are computationally expensive.

3. What React Dom and Virtual Dom ?
    - React DOM is the library that updates the actual DOM to match React elements.
    - Virtual DOM is a lightweight copy of the real DOM used for efficient updates.

4. What is the diffing algorithm in React, and how does it optimize updates?
    - The diffing algorithm is a technique used by React to efficiently update the DOM by comparing the Virtual DOM with the previous version.
    - It identifies the minimal set of changes required and applies them to the real DOM, improving performance.

### JSX

5. What is jsx?
    - JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code in React components.

6. How react understands jsx?
    - React uses Babel to transpile JSX into JavaScript function calls (e.g., `React.createElement`).

### State Management

7. What is state ? How it makes react reactive ?
    - State is an object that holds dynamic data for a component.
    - Reactivity comes from React re-rendering components when state changes.

8. What is state vs common variable or const ?
    - State is managed by React and triggers re-renders when updated.
    - Regular variables/constants do not trigger re-renders.

### Tools and Ecosystem

9. What is package bundler ?
    - A package bundler combines multiple JavaScript files into one or more bundles for efficient loading in a browser.

10. Create react app vs Vit ?
    - Create React App (CRA) is a boilerplate for React projects with built-in configurations.
    - Vite is a faster build tool optimized for modern JavaScript frameworks, including React.

11. What is babel , how it is used in react ?
    - Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

12. What is web pack or varcell ?
    - Webpack is a module bundler for JavaScript applications.
    - Vercel is a platform for deploying modern web applications.

### Rendering

13. React renders everything under the root element
    - Correct. React applications are rendered within a single root DOM element, typically `<div id="root">`.

### Small precise points

1. In-browser Babel (type="text/babel") transforms JSX at runtime for quick demos.
2. Browsers don't provide Node's `require()` function. Keeping `import`/`export` with the in-browser transformer may produce `require()` calls.
3. `require is not defined` is a runtime symptom of CommonJS code running in the browser.
4. Quick fix: remove `import`/`export` and use globals for tiny examples. Expose components as `window.ComponentName` to share across scripts.
5. Ensure load order: define providers before consumers (counter.js before script.js). `type="module"` enables native imports but browsers don't transform JSX—precompile first.
6. Bundlers perform optimizations: tree-shaking, minification, and asset fingerprinting.
7. In-browser Babel is slower and not suitable for production use.

Example (before / after):

Before (problematic for in-browser Babel):

```javascript
// counter.js
export const Counter = () => <div>Counter</div>;

// script.js
import { Counter } from './counter.js';
ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
```

After (works with type="text/babel"):

```javascript
// counter.js
const Counter = () => <div>Counter</div>;
window.Counter = Counter;

// script.js
ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);
```

