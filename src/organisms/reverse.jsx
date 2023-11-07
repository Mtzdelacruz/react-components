import React from "react";

function ReversedText() {
const [text, setText] = React.useState('');

  function handleInputChange(event) {
    setText(event.target.value);
  }

  const reversedText = text.split('').reverse().join('');

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>{reversedText}</p>
    </div>
  );
}

export default ReversedText;