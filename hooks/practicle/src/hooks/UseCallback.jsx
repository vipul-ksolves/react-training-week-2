import React, { useState, useCallback } from "react";
import CallbackChild from "./CallbackChild";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  // const learning = () => {
  //   // some operation
  // };
  const learning = useCallback(() => {
    // some operation
  }, []);
  return (
    <div>
      <h1>Use Callback Hook</h1>
      {/* <div>
        <CallbackChild />
      </div> */}

      {/* Every time its called when we click the button, that is decrecess the
      performence of our components */}

      {/* <div>
        <CallbackChild learning={learning} />
      </div> */}
      {/* Ager props pass kare, or child ko memo se wrap kane ke baad bhi kaam nhi hoga  */}
      <div>
        <CallbackChild learning={learning} />
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    </div>
  );
};

export default UseCallback;
