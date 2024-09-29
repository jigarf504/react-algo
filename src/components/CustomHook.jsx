import { useEffect, useRef, useState } from "react"

export default function CustomHook() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState(''); 

    return (
        <>
          <button onClick={() => setCount(count + 1)}>Increament</button>
          <p>Count : {count}</p>
          <p>Previous render count : {usePrevious(count)}</p>

          <input value={text} onChange={(event) => setText(event.target.value)} />
          <p>Previous render text : {usePrevious(text)}</p>
        </>
    )
}

function usePrevious(value) {
    const prevRef= useRef();
    useEffect(() => {
        prevRef.current = value;
    },[value])
    return prevRef.current;
}