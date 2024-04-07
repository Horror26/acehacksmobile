"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BottomBar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (pathname == "/chats" || pathname == "/chatbot") setShow(false);
    else setShow(true);
  }, [pathname]);

  if (!show) return;

  return (
    <div
      className="w-[100vw] justify-between px-8 h-[10vh] items-center fixed bottom-0 z-50 bg-white border border-[##27282D
    ] flex rounded-2xl"
    >
      <Link href="https://acehacks-larz.vercel.app/" className="flex items-center flex-col">
        <Image
          height="25"
          width="25"
          alt="Avatar"
          src={"/assets/icons/home.png"}
        />
        <div className="font-extralight text-xs">Home</div>
      </Link>
      <Link className="flex items-center flex-col" href="/community">
        <Image
          height="25"
          width="25"
          alt="Avatar"
          src={"/assets/icons/chat.png"}
        />
        <div className="font-extralight text-xs">Chat</div>
      </Link>
      <Link className="flex items-center flex-col" href="/medi">
        <Image
          height="25"
          width="25"
          alt="Avatar"
          src={"/assets/icons/yoga.png"}
        />
        <div className="font-extralight text-xs">Yoga</div>
      </Link>
    </div>
  );
};

export default BottomBar;
