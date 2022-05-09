import React from "react";

function Header ({appMode, onDarkModeClick}) {
  const handleClick = () => {
    onDarkModeClick();
  }
 return (
  <header>
    <h2>Shopster</h2>
    <button onClick={handleClick}>
      {appMode ? "Light" : "Dark"} Mode
    </button>
  </header>
 )
}

export default Header;