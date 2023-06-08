import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

const BoxList = () => {
  const [boxList, setBoxList] = useState([]);

  const addBox = (newBox) => {
    setBoxList((boxList) => [...boxList, newBox]);
  };

  return (
    <div>
      <h3>Boxes</h3>
      <BoxForm addBox={addBox} />
      <div>
        <h4>Here are the boxes</h4>
        {boxList.map(({ backgroundColor, height, width }) => (
          <Box
            backgroundColor={backgroundColor}
            height={height}
            width={width}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
