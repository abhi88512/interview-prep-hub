import { useRef } from "react";

const areDepsEqual = (prevDeps, currentDeps) =>{
    if (prevDeps == null) return false;
    if (prevDeps.length !== currentDeps.length) return false;

    for (let i = 0 ; i < prevDeps.length; i++){
        if(prevDeps[i] !== currentDeps[i]) return false;
    }

    return true;

}


export const useMemoPolyfill = (callback, deps) =>{

    const memorisedref = useRef(null);

    // 1st Render or Dependency Change

    const shouldUpdate = (memorisedref.current == null) || !areDepsEqual(memorisedref.current.deps , deps); 

    // recompute calculation and update the current value
    if( shouldUpdate) {
        memorisedref.current ={
            value : callback(),
            deps: deps
        }
    }

    // return memorised value
    return memorisedref.current.value;

    
}