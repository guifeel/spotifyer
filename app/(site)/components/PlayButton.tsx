import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="translate-x-0 opacity-0 rounded-full felx items-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <FaPlay />
    </button>
  );
};

export default PlayButton;
