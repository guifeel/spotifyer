"use client";
import useLoadImage from "@/actions/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface MediaItemProps {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  //   TODO:跳转播放歌曲

  return (
    <div
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-lg"
      onClick={handleClick}
    >
      <div className="relative rounded-lg overflow-hidden min-h-[48px] min-w-[48px]">
        <Image
          fill
          alt="Media Item"
          src={imageUrl || "/image/like.png"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
