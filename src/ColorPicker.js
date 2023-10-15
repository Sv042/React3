import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      <div className={`color-list ${showColorList ? 'visible' : ''}`}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-square"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      {selectedColor && (
        <p>Selected Color: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;
