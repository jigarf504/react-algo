import { useState } from "react";
import { createPortal } from "react-dom";
import "./Portal.css";
export default function Portal() {
 const [isHidden,setIsHidden] = useState(false)
 return (
    <> 
    <div className="container">
        <button onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? 'Show Modal' :  'Hide Modal'}
        </button>
        {!isHidden || <Modal></Modal>}
    </div>
    <p className="other">Other content</p>
    </>
 )
}

function Modal() {
    return createPortal(
        <p className="modal">Modal</p>,
        document.getElementById("modal-root")
    )
}