import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spofityer",
  description: "听音乐，用Spotifyer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
