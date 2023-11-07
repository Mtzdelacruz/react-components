import React from 'react';


function Show() {
  const [show, setToggleShow] = React.useState(false)

  const onShowHide = () => {
      setToggleShow(!show)
  }

  const shPosition = show ? "Hide" : "Show"

  return (
    <div className="Show"> 
      <button className="ShowHide" onClick={onShowHide}>{shPosition}</button>
      {show && <p>Codigo</p>}
    </div>
  );
}
export default Show;
