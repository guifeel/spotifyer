"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // 鉴权后跳转
    router.push(href);
  };
  return (
    <button
      className="relative group flex items-center rounded-md overflow-hidden 
    gap-x-4 bg-neutral-100/10 cursor-pointer hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image alt="liked" src={image} fill className="object-cover" />
      </div>
      <p className="font-medium  truncate py-5">{name}</p>
      <div
        className="absolute right-5 transition opacity-0 group-hover:opacity-100 
      hover:scale-110 bg-green-500 rounded-full p-3 drop-shadow-md 
      flex items-center justify-center"
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
