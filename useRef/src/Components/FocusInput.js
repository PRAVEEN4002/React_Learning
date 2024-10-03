import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputref = useRef(null);
  const buttonref = useRef(null);
  useEffect(() => {
    buttonref.current.click();
    // inputref.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputref} type="text" />

      <button
        type="text"
        ref={buttonref}
        onClick={() => {
          alert("clicked");
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          inputref.current.focus();
        }}
      >
        click
      </button>
    </div>
  );
}

export default FocusInput;
