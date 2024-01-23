"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO:重置任务播放的歌
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("退出成功");
    }
  };
  return (
    <div className="h-fit bg-gradient-to-b from-emerald-800 p-6">
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button className="flex bg-black cursor-pointer items-center justify-center rounded-full hover:opacity-75 transition">
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button className="flex bg-black cursor-pointer items-center justify-center rounded-full hover:opacity-75 transition">
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="bg-white rounded-full p-2 hover:opacity-75 transition             flex 
              items-center 
              justify-center "
          >
            <HiHome className="text-black" size={25} />
          </button>
          <button
            className="bg-white  rounded-full p-2 hover:opacity-75 
          transition flex items-center justify-center"
          >
            <BiSearch className="text-black" size={25} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-white px-6 py-2 whitespace-nowrap"
              >
                登出
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  注册
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  登陆
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
