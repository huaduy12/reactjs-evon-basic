import React, { useState } from "react";

export default function InputFormCustom(initValues) {
  const [values, setValues] = useState(initValues);
  const handleInputForm = (event) => {
    const type = event.target.type;
    setValues({
      ...values,
      [event.target.name]:
        type === "checkbox" ? event.target.checked : event.target.value,
    });
  };
  return {
    values,
    handleInputForm,
  };
}
