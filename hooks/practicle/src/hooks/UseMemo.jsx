import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(10);

  //   const multiCount = () => {
  //     console.log("Function Called");
  //     return count * 5;
  //   };
  // Problem => this function is called every state change
  // Solution =>  use Memo function

  const multiCount = useMemo(() => {
    console.log("Function Called");
    return count * 5;
  }, [count]);
  return (
    <div>
      <h1>Use Memo Hook</h1>
      <br />
      {/* <h1>{multiCount()}</h1> */}
      <h1>{multiCount}</h1>
      <br />
      <h1>Count : {count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Count</button>
      </div>
      <br />
      <h1>Multi : {multi}</h1>

      <div>
        <button onClick={() => setMulti(multi * 10)}>Muiti</button>
      </div>
    </div>
  );
};

export default UseMemo;
