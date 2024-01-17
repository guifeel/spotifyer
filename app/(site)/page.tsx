"use client";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-white text-3xl font-semibold">欢迎回来~</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItem image="/images/liked.png" name="喜欢的歌曲" href="liked" />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">新歌速递</h1>
        </div>
        <div>歌曲列表</div>
      </div>
    </div>
  );
}
