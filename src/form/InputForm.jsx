import React, { useState } from "react";
import InputFormCustom from "./InputFormCustom";

const InputForm = () => {
  const { values, handleInputForm } = InputFormCustom({
    fullName: "",
    textarea: "",
    selectOption: "",
    checkbox: false,
  });

  console.log(values);

  return (
    <div>
      <input
        type="text"
        name="fullName"
        className="w-full w-min-[100px] rounded border border-gray-400 my-5"
        placeholder="Vui lòng nhập tên"
        onChange={handleInputForm}
      />
      <textarea
        type="text"
        name="textarea"
        className="w-full w-min-[100px] rounded border border-gray-400 my-5"
        placeholder="Vui lòng nhập tên textarea"
        onChange={handleInputForm}
      />
      <br></br>
      <select name="selectOption" onChange={handleInputForm} className="my-5 ">
        Vui lòng chọn
        <option value="code1">Code 1</option>
        <option value="code2">Code 2</option>
        <option value="code3">Code 3</option>
      </select>

      <input type="checkbox" name="checkbox" onChange={handleInputForm} />
    </div>
  );
};

export default InputForm;
