import {  useState } from "react"
import { useMemoPolyfill } from "./use-memo-polyfill";


export const CounterUseState = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // console.log("CounterUseState Rendered");

    const squredCounter1 = useMemoPolyfill(() => {
        console.log("expensive function called");
        return count1 * count1;
    }, [count1]);

    const incrementCounter1 = () => {
        setCount1(count1 + 1);
        console.log("Counter1 Incremented");
    }
    
    const decrementCounter1 = () => {
        setCount1(count1 - 1);
        console.log("Counter1 Decremented");
    }

    const incrementCounter2 = () => {
        setCount2(count2 + 1);
        console.log("Counter2 Incremented");
    }

    const decrementCounter2 = () => {
        setCount2(count2 - 1);
        console.log("Counter2 Decremented");
    }

  return (
    <>
      <h2> Counter1 : {count1}</h2>
        <h3> Squred Counter1 : {squredCounter1}</h3>
      <button style={{margin: "5px"}} onClick={incrementCounter1}>Increment Counter1</button>
      <button style={{margin: "5px"}} onClick={decrementCounter1}> Decrement Counter1</button>
      <h2> Counter2 : {count2}</h2>
      <button style={{margin: "5px"}} onClick={incrementCounter2}>Increment Counter2</button>
      <button style={{margin: "5px"}} onClick={decrementCounter2}> Decrement Counter2</button>
    </>
  );
}

