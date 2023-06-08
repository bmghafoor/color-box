import React from "react";

const Box = ({ backgroundColor, height, width }) => {
  const style = {
    backgroundColor,
    height: `${height}px`,
    width: `${width}px`,
  };
  return <div style={style}></div>;
};

export default Box;
