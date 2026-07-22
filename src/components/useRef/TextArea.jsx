import React, { useRef, useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    const ref = textAreaRef.current;
    // Reset height để tính scrollHeight chính xác
    ref.style.height = "auto";

    // Set height theo nội dung
    ref.style.height = ref.scrollHeight + "px";
    setText(event.target.value);
  };

  //   useEffect(() => {
  //     setHeight(`${textAreaRef.current.scrollHeight}px`);
  //   }, [text]);
  return (
    <div>
      <textarea
        className="transition-all overflow-hidden w-full min-w-[400px] max-w-[500px] p-5 rounded-lg border border-gray-400 focus:border-blue-400 resize-none leading-normal"
        placeholder="Enter ..."
        text={text}
        onChange={handleChange}
        ref={textAreaRef}
      ></textarea>
    </div>
  );
};

export default TextArea;
