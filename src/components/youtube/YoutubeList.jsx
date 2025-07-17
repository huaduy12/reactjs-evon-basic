import React from "react";

const YoutubeList = (props) => {
  return (
    <div className="youtube-item w-72 rounded-lg overflow-hidden shadow-md bg-white">
      <div className="youtube-image w-full h-40">
        <img src={props.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="youtube-footer flex p-4 gap-3">
        <img
          src={props.avatar}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2">{props.title}</h3>
          <span className="text-gray-500 text-xs">{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default YoutubeList;
