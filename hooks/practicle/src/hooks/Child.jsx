import React, { useContext } from "react";
import { globleData } from "../App";
import SuperChild from "./SuperChild";

const Child = () => {
  const { name } = useContext(globleData);
  console.log(name);
  return (
    <>
      <h1>This is Child component form {name} </h1>
      <SuperChild />
    </>
  );
};
export default Child;
