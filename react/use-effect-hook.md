Question 1: What is useEffect in React?
   - useEffect is a hook used in functional components to perform side effects after
   rendering, such as data fetching, subscriptions, or manual DOM manipulation.
Question 2: Why is dependency array used in useEffect?
    - When it empty, it runs only once
    - When these values inside it change, the effect is re-run.
    - If removed, the effect runs after every render.

    - Handling dependencies ensures that the effect runs only when necessary and prevents
    unnecessary re-execution of the effect, optimizing performance and avoiding
    potential bugs.
Question 3: Example of useEffect for data fetching.
    {user.first_name} {user.last_name}

Question 4: Convert major lifecycle methods to useEffect and Explain.

Question 5: How to perform cleanup in useEffect? Explain with example.
  - You can return a cleanup function inside useEffect, which runs before the effect 
  re-runs or when the component unmounts. 
  - This is useful for cleaning up subscriptions or event listeners.
  {seconds}
Question 6: Explain useLayoutEffect and how it is different from
    useEffect?
  useEffect:
    - Asynchronous: Runs after the render cycle is committed to the screen.
    - Good for Performance: Does not block the browser from painting changes on the screen.

  useLayoutEffect:
    - Synchronous: Runs synchronously immediately after the DOM is updated but before the 
    browser paints anything on the screen.
    - Potentially Blocking: Can potentially cause delays in the rendering process if the 
    operations are heavy.
