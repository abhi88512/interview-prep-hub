---
metadata:
  primary_file: react-basics.md
  supporting_text: none
  cv_file: MyCV.tex
  generated_on: 2025-09-21
  processed_files:
    - react-basics.md: React fundamentals covering components, JSX, state management, and ecosystem tools
    - MyCV.tex: Cover letter for Senior Software Developer position highlighting full-stack development experience
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

5. What is a React component?
    - A component is a reusable, self-contained unit (function or class) that returns JSX to describe part of the UI.

### JSX

6. What is jsx?
    - JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code in React components.

7. How react understands jsx?
    - React uses Babel to transpile JSX into JavaScript function calls (e.g., `React.createElement`).

8. What is a React fragment, and why is it used?
    - A fragment groups multiple elements without adding an extra DOM node; useful to return multiple siblings from a component.

### State Management

9. What is state ? How it makes react reactive ?
    - State is an object that holds dynamic data for a component.
    - Reactivity comes from React re-rendering components when state changes.

10. What is state vs common variable or const ?
    - State is managed by React and triggers re-renders when updated.
    - Regular variables/constants do not trigger re-renders.

11. What is the difference between state and props?
    - State is local to a component and mutable via setState/useState; props are read-only values passed from parent to child.

12. How do you define and use state in a React functional component?
    - Use the `useState` hook: `const [value, setValue] = useState(initial)`, update with `setValue(newValue)` and use `value` in JSX.

13. How do you define and use state in a React class component?
    - Initialize state in the constructor (`this.state = {}`) and update with `this.setState({})`; access via `this.state`.

14. How do you pass props to a functional component?
    - Pass values as attributes: `<MyComp foo={bar} />`; receive them as the first function argument `function MyComp(props) {}` or via destructuring `({foo})`.

15. How do you use props in a class component?
    - Access via `this.props.propName` inside lifecycle methods or `render()`; props are provided by the parent component.

16. What is prop drilling?
    - Prop drilling is passing props through several intermediate components until they reach the component that needs them; it can be reduced with context or state managers.

17. Is setstate sychronus or asynchronus ? describe the reason ?
    - setState is asynchronous for performance optimization.
    - React batches multiple setState calls to avoid unnecessary re-renders.
    - Use callback functions or useEffect to handle state updates that depend on previous values.

### Tools and Ecosystem

18. What is package bundler ?
    - A package bundler combines multiple JavaScript files into one or more bundles for efficient loading in a browser.

19. Create react app vs Vit ?
    - Create React App (CRA) is a boilerplate for React projects with built-in configurations.
    - Vite is a faster build tool optimized for modern JavaScript frameworks, including React.

20. What is babel , how it is used in react ?
    - Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

21. What is web pack or varcell ?
    - Webpack is a module bundler for JavaScript applications.
    - Vercel is a platform for deploying modern web applications.

22. What are PropTypes?
    - PropTypes is a runtime prop-type checking utility for React that warns in development if prop types mismatch.

23. In how many ways can we export/import things from a JS Module?
    - Two main ways: default export/import (`export default ...` / `import Foo from './foo'`) and named export/import (`export const Foo` / `import { Foo } from './foo'`).

### Rendering

24. React renders everything under the root element
    - Correct. React applications are rendered within a single root DOM element, typically `<div id="root">`.

25. Reconciliation vs Rendering?
    - Reconciliation computes the diff between old and new virtual DOM trees; rendering is the actual update of the real DOM based on that diff.

26. React is declarative in nature not imparative ? what does it mean  to declarative or impartaive ? how react is decalartive ?
    - Declarative programming describes "what" you want to achieve, while imperative describes "how" to achieve it.
    - React is declarative because you describe the desired UI state using JSX, and React handles the DOM updates.
    - Instead of manually manipulating DOM elements (imperative), you define components that render based on state (declarative).


27. How does the rendering process work from JSX -> React Elemnt -> Virtual Dom -> Actual Dom ?
    - JSX is transpiled to React.createElement() calls by Babel.
    - React.createElement() returns React elements (plain JavaScript objects describing the UI).
    - React elements form the Virtual DOM tree structure.
    - React's reconciliation algorithm compares Virtual DOM trees and updates the actual DOM with minimal changes.

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

## Interview Questions

### React Fundamentals
1. Explain the difference between React and other JavaScript frameworks like Angular or Vue.
   - Source: `react-basics.md`
   - Difficulty: Medium
   - Answer hint: React is a library focused on UI, uses Virtual DOM, and has a component-based architecture

2. What makes React "reactive" and how does state management contribute to this?
   - Source: `react-basics.md`
   - Difficulty: Easy
   - Answer hint: State changes trigger re-renders, creating reactive user interfaces

3. Describe the Virtual DOM and explain why it makes React applications faster.
   - Source: `react-basics.md`
   - Difficulty: Medium
   - Answer hint: Virtual DOM minimizes expensive direct DOM manipulations through efficient diffing

### Component Architecture
4. Compare functional and class components in React. When would you use each?
   - Source: `react-basics.md`
   - Difficulty: Medium
   - Answer hint: Functional components with hooks are preferred; class components for legacy code or specific lifecycle needs

5. What is prop drilling and what are some strategies to avoid it?
   - Source: `react-basics.md`
   - Difficulty: Hard
   - Answer hint: Passing props through multiple levels; solutions include Context API, state management libraries

6. Explain React fragments and provide a use case where they're essential.
   - Source: `react-basics.md`
   - Difficulty: Easy
   - Answer hint: Group elements without extra DOM nodes; useful for returning multiple siblings

### State and Props
7. Demonstrate the difference between state and props with a practical example.
   - Source: `react-basics.md`
   - Difficulty: Easy
   - Answer hint: State is internal and mutable; props are external and immutable

8. Why is setState asynchronous and how do you handle dependent state updates?
   - Source: `react-basics.md`
   - Difficulty: Hard
   - Answer hint: Performance optimization through batching; use callbacks or useEffect for dependencies

9. How would you lift state up in a React application and why is this pattern important?
   - Source: `react-basics.md` + supporting knowledge
   - Difficulty: Medium
   - Answer hint: Move state to common parent component; enables data sharing between sibling components

### JSX and Rendering
10. Walk through the complete rendering process from JSX to DOM updates.
    - Source: `react-basics.md`
    - Difficulty: Hard
    - Answer hint: JSX → React.createElement → React elements → Virtual DOM → reconciliation → DOM updates

11. Explain the difference between declarative and imperative programming in the context of React.
    - Source: `react-basics.md`
    - Difficulty: Medium
    - Answer hint: Declarative describes "what" (JSX), imperative describes "how" (manual DOM manipulation)

### Development Tools and Ecosystem
12. Compare Create React App and Vite for React development. What are the trade-offs?
    - Source: `react-basics.md`
    - Difficulty: Medium
    - Answer hint: CRA provides complete setup but slower; Vite offers faster builds and modern tooling

13. Explain the role of Babel in a React application and what happens without it.
    - Source: `react-basics.md`
    - Difficulty: Medium
    - Answer hint: Transpiles JSX and modern JS to browser-compatible code; browsers can't understand JSX natively

### Advanced Concepts
14. What is reconciliation and how does React's diffing algorithm work?
    - Source: `react-basics.md`
    - Difficulty: Hard
    - Answer hint: Process of comparing Virtual DOM trees and computing minimal changes for DOM updates

15. Describe the challenges of using in-browser Babel and better alternatives for production.
    - Source: `react-basics.md`
    - Difficulty: Medium
    - Answer hint: Runtime performance issues; use build tools like Webpack, Vite for pre-compilation

