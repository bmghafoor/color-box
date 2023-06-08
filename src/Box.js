import React from "react";

const Box = ({ backgroundColor, height, width }) => {
  const boxStyle = {
    backgroundColor,
    height: `${height}px`,
    width: `${width}px`,
    border: "1px solid black",
  };

  const buttonStyle = {
    display: "inline-block",
    cursor: "pointer",
  };

  const handleDelete = (e) => {
    const parentElement = e.currentTarget.parentNode;
    parentElement.remove();
  };

  return (
    <>
      <div style={boxStyle}>
        <button style={buttonStyle} onClick={handleDelete}>
          X
        </button>
      </div>
    </>
  );
};

export default Box;
