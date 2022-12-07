import React, { memo } from "react";

const CallbackChild = ({ learning }) => {
  console.log("This is a Child of Callback");
  return (
    <div>
      <h1>Child of Callback</h1>
    </div>
  );
};

export default memo(CallbackChild);
