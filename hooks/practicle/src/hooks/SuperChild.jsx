import React, { useContext } from "react";
import { globleData } from "../App";

const SuperChild = () => {
  const { name } = useContext(globleData);
  console.log(name);
  return (
    <>
      <h1>This is SuperChild component form {name} </h1>
    </>
  );
};
export default SuperChild;
