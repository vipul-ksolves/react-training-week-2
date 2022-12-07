import React, { createContext, useState } from "react";
import "./App.css";

//components
// import CustomHooks from "./hooks/CustomHooks";
// import Child from "./hooks/Child";
// import UseReducer from "./hooks/UseReducer";
// import UseRef from "./hooks/UseRef";
// import UseMemo from "./hooks/UseMemo";
// import UseCallback from "./hooks/UseCallback";
import UseEffect from "./hooks/UseEffect";

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
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <UseEffect /> */}
      </div>
    </globleData.Provider>
  );
};

export default App;
