import { useState, useEffect, useLayoutEffect } from "react";

//Mount (initial  render) => updates (re-render) => unmount
export default function LifeCycle() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  //  
  useEffect(() => {
    console.log("count changed");

    return () => {
      console.log("unmounted")
    }
  });

  //it is run Asynchronously 
  // useLayoutEffect(() => {
  //   if (count === 3) {
  //     setCount(4)
  //   }
  // },[count])

  //it is run synchronously 
  useEffect(() => {
    if (count === 3) {
      setCount(4)
    }
  },[count])
  //render each time
  useEffect(() => {
    console.log("render")
  }) 

  const startTime = new Date();
  while(new Date() - startTime < 100) {
    console.log(".")
  }
  return (
    <>
      <button onClick={() => setBool(!bool)}>Re-Render</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count : {count}</p>
    </>
  );
}
