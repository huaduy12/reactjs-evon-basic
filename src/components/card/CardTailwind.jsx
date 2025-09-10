import React from "react";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative ">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full rounded-[inherit] object-cover"
          src="https://cdn.dribbble.com/userupload/15691806/file/original-2e4ba69324e5f96bcfa38b6465c7f944.png?resize=1504x1128&vertical=center"
          alt=""
        />
      </div>
      <div className="absolute left-2/4 bottom-0 translate-x-[-50%] translate-y-[50%] w-[calc(100%-36px)] bg-white z-10 rounded-[20px] p-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-[100rem] object-cover flex-shrink-0"
              src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
              alt=""
            />
            <div className="font-light text-base text-[#333]">@zndrson</div>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/public/coolicon.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium text-black">
            Cosmic Perspective
          </div>
          <div className={amountClasses}>12,000 PSL</div>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
