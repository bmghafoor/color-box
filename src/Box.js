import React from "react";

const Box = ({ backgroundColor, height, width }) => {
  const style = {
    backgroundColor,
    height,
    width,
  };
  return <div style={style}></div>;
};

export default Box;
