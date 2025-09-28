import { useRef } from "react"

const areDepsEqual = (prevDeps, deps) => {
    if (prevDeps == null) return false;
    if(prevDeps.length != deps.length) return false;
    for(let i = 0 ; i < prevDeps.length; i++){
        if(prevDeps[i] !== deps[i]) return false;
    }

    return true;
}

export const useCallbackPolyfill = (callback, deps) => {
    const memorisedRef = useRef(null);

    // 1st Render and deps changed
    const shouldRun = (memorisedRef.current == null) || !(areDepsEqual(memorisedRef.current.deps, deps));

    //re-calculate function
    if (shouldRun){
        memorisedRef.current = {
            deps: deps,
            func : callback
        }
    }

    return memorisedRef.current.func;

}