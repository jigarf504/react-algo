import { forwardRef, useRef } from "react";

export default function UseRef2() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <p>UseRef Demo</p>
      <hr />
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

const MyInput = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} style={{ color: "red" }} />;
});
