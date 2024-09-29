
import { memo } from "react";
export default  memo(function MyButton(props) {
    console.log("rendering mybutton")
    const startTime = new Date();
    while(new Date() - startTime < 2000) { }
    return <button {...props} style={{color:'blue'}}></button>
})