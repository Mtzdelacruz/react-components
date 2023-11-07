import React, { useState } from 'react';

function TextStyler() {
  const [fontSize, setFontSize] = useState(16);

  function increaseFontSize() {
    setFontSize(prevFontSize => prevFontSize + 1);
  }

  function decreaseFontSize() {
    setFontSize(prevFontSize => prevFontSize - 1);
  }

  return (
    <div>
      <button onClick={increaseFontSize}>Increase</button>
      <button onClick={decreaseFontSize}>Decrease</button>
      <p style={{ fontSize: `${fontSize}px` }}>Código ingeniero</p>
    </div>
  );
}

export default TextStyler