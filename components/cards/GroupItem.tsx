import Image from "next/image";
import Link from "next/link";
import React from "react";

const GroupItem = ({ name, img }: any) => {
  return (
    <Link
      className="flex justify-between items-center border-[#DADADC] border-b p-3 rounded-md"
      href={{
        pathname: "/chats",
        query: { type: img },
      }}
    >
      <div className="flex justify-between items-center gap-4">
        <Image
          src={`/assets/icons/${img}.png`}
          alt="logo"
          width={40}
          height={40}
        />
        <div className="font-medium text-xl">{name}</div>
      </div>
      <Image
        src="/assets/icons/keyboard_double_arrow_right.png"
        alt="logo"
        width={25}
        height={25}
      />
    </Link>
  );
};

export default GroupItem;
