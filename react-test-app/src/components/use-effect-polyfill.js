import { useRef } from "react";

const areDepsEqual = (prevDeps, deps) => {
    if (prevDeps == null) return false;
    if(prevDeps.length != deps.length) return false;
    for(let i = 0 ; i < prevDeps.length; i++){
        if(prevDeps[i] !== deps[i]) return false;
    }

    return true;
}


export const useEffectPolyfill = (callback, deps) => {
    const memorisedRef = useRef(null);

    //1st render or deps changed
    const shouldRun = (memorisedRef.current == null) || !(areDepsEqual(memorisedRef.current.deps, deps));

    if (shouldRun){ 

    // call back function
    const cleanup = callback()


    //deps update
    memorisedRef.current = {
        deps: deps,
        cleanup: cleanup
    }

    return memorisedRef.current.cleanup

}

}