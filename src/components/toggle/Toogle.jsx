import React, { useState } from "react";
import "./ToogleStyle.css";

const Toogle = () => {
  // 1 import thư viện
  // 2 khởi tạo giá trị
  const [on, setOn] = useState(false);
  // 3 đọc giá trị
  // 4 update giá trị
  console.log(on);
  // onClick={() => setOn(true)}
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn((on) => !on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Toogle;
