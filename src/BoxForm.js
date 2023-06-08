import React, { useState } from "react";

const BoxForm = () => {
  const initialState = { backgroundColor: "", height: "", width: "" };
  const [boxData, setBoxData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoxData((boxData) => ({ ...boxData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Color</label>
      <input
        type="text"
        name="backgroundColor"
        id="backgroundColor"
        placeholder="Enter Color"
        value={boxData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input
        type="text"
        name="height"
        id="height"
        placeholder="Enter Height in px"
        value={boxData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        type="text"
        name="width"
        id="width"
        placeholder="Enter Width in px"
        value={boxData.width}
        onChange={handleChange}
      />
    </form>
  );
};

export default BoxForm;
