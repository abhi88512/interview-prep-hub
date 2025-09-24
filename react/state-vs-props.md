Question 1: Explain state vs props in both class and functional
components
Props -
 - Read-only data passed from a parent component to a child component.
 - Immutable and are used to communicate between components.
State 
 - Mutable and represents the internal state of a component.
 - Managed and controlled within the component itself.

Difference:
- Props are immutable data passed down from parent components.
- State is mutable and represents the internal state of a component. 
- In class components, `this.props` and `this.state` are used to access props and state
 respectively. 
- In functional components, props are passed as an argument to the component function,
  and state is managed using hooks like `useState`.

  Question 2: What is children prop? give an example ?