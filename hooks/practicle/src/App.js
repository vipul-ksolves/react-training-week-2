import React, { createContext, useState } from "react";
import "./App.css";

//components
// import CustomHooks from "./hooks/CustomHooks";
// import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";

import Child from "./hooks/Child";
export const globleData = createContext();

const App = () => {
  const [name, setName] = useState("Vipul");
  return (
    <globleData.Provider value={{ name: name }}>
      <div className="App">
        {/* <CustomHooks /> */}
        {/* <Child /> */}
        {/* <UseReducer /> */}
        {/* <UseRef /> */}
      </div>
    </globleData.Provider>
  );
};

export default App;
