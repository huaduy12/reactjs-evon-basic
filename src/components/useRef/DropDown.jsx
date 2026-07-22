import React, { useEffect, useRef, useState } from "react";

const DropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [valueDropDown, setValueDropDown] = useState("Selected1");
  const dropdownRef = useRef(null);
  const options = ["Java", "JavaScript", "Python"];

  useEffect(() => {
    function handleClickOutDropdown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropDown(false);
      }
    }
    document.addEventListener("click", handleClickOutDropdown);
    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);
  const handleSelect = (value) => {
    setValueDropDown(value);
    setShowDropDown(false);
  };
  return (
    <div className="relative w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer bg-gray-200"
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
      >
        {valueDropDown}
      </div>
      {showDropDown && (
        <div className="border border-gray-200 rounded-lg absolute w-full top-full bg-white-400 cursor-pointer">
          {options.map((item) => (
            <div
              key={item}
              className="p-5 cursor-pointer border hover:bg-gray-100"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
