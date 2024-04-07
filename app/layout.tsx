import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/ui/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title:"Mindfull Me",
 description:"an healt care app",
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          {/* <Header /> */}
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
