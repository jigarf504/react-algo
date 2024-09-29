import { lazy, Suspense, useCallback, useMemo, useState } from "react"
const MyButton = lazy(() => import("./MyButton"));

export default function UseMemo() {
    const [num,setNum] = useState(10);
    const [logValue,setLogValue] = useState("")
    const fibValue = useMemo(() => {
        console.log("calculate value");
        return fib(num)
    },[num])

    const buttonCallback = useCallback(() => {
        console.log("logvalue = " + logValue)
    },[logValue])
    return (
        <>
        <p> Use Memo example : fib value = {fibValue}</p>
        <hr />
        <input type="number" value={num} onChange={(event) => setNum(+event.target.value)} />
        <br />
        <br />
        <input type="text" value={logValue} onChange={(event) => setLogValue(event.target.value)} />
        <br/>
        {
             logValue && 
             <Suspense fallback={"loading...."}>
                 <MyButton onClick={buttonCallback}>My button</MyButton>
             </Suspense>
                
        }
        </>
    )
}


function fib(num) {
  if (num === 2) return 1;
  if (num === 1) return 0;
  return fib(num - 1 ) + fib(num - 2)
} 