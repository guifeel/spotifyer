"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // 处理退出登陆
  };
  return (
    <div className="h-fit bg-gradient-to-b from-emerald-800 p-6">
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="bg-black items-center justify-center rounded-full hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button className="bg-black items-center justify-center rounded-full hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="bg-white rounded-full p-2 hover:opacity-75 transition">
            <HiHome className="text-black" size={25} />
          </button>
          <button className="bg-white rounded-full p-2 hover:opacity-75 transition flex items-center justify-center">
            <BiSearch className="text-black" size={25} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                className="bg-transparent text-neutral-300 font-medium"
                onClick={() => {}}
              >
                登 陆
              </Button>
            </div>
            <div>
              <Button className="bg-white py-2 px-6" onClick={() => {}}>
                注 册
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
