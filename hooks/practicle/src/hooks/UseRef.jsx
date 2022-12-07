import React, { useRef } from "react";

const UseRef = () => {
  let inputRef = useRef("");

  const handleInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 1000;
    inputRef.current.focus();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Click</button>
    </div>
  );
};

export default UseRef;
