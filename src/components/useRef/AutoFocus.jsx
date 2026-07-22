import React, { useEffect, useRef } from "react";

const AutoFocus = () => {
  const inputFocusRef = useRef(null);

  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus();
    }
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={inputFocusRef}
        placeholder="Auto focus ref"
        className="inline-block p-5 border border-gray-200 focus:border-blue-400"
        name="input"
        onKeyDown={(e) => {
          console.log("KEY:", e.key, "| value:", inputFocusRef.current.value);
        }}
      ></input>
    </div>
  );
};

export default AutoFocus;
