import React from "react";
import Func2 from "./Func2";
import Class1 from "./Class1";

function Func1() {
  return (
    <>
      <Func2 ime="Leo" dob={22} />
      <Class1 grad="Požega" />
    </>
  );
}

export default Func1;
