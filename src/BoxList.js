import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

const BoxList = () => {
  const [boxList, setBoxList] = useState([{}]);

  return (
    <div>
      <h3>Boxes</h3>
      <BoxForm />
    </div>
  );
};

export default BoxList;
