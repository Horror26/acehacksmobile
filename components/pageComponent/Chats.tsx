"use client";

import React, { useEffect, useState } from "react";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import YourMessage from "@/components/shared/YourMessage";
import OtherMessage from "@/components/shared/OtherMessage";
import "@/components/shared/style.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Chats = () => {
  const [dataObject, setDataObject] = useState<any>({ mapping: [], chats: [] });
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const username: string = "riya";
  const [curr_msg, set_curr_msg] = useState("");

  const handleSubmit = async (e: any) => {
    if (type === null) return;
    dataObject.mapping.push(username);
    dataObject.chats.push(curr_msg);
    await updateDoc(doc(db, type, type), {
      chats: dataObject.chats,
      mapping: dataObject.mapping,
    });
    set_curr_msg("");
  };

  const fetchMessages = async () => {
    try {
      if (type === null) return;
      const data: any = await getDoc(doc(db, type, type));
      setDataObject(await data.data());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const t = setInterval(fetchMessages, 3000);
    return () => {
      clearInterval(t);
    };
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <div className="mx-[7vw] my-6 w-[86vw]">
        {dataObject.mapping.length &&
          dataObject.mapping.map((msg: any, index: any) => (
            <div key={index}>
              {username === dataObject.mapping[index] ? (
                <YourMessage data={dataObject.chats[index]} />
              ) : (
                <OtherMessage data={dataObject.chats[index]} />
              )}
            </div>
          ))}
      </div>
      <div className="flex mx-5 items-center gap-3 fixed bottom-5">
        <input
          className="border border-[#DADADC] w-[80vw] rounded-md px-3 py-1.5"
          type="text"
          value={curr_msg}
          onChange={(e) => set_curr_msg(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#FFA673] to-[#EB8144] rounded-lg p-1.5"
        >
          <Image
            height="25"
            width="25"
            alt="Avatar"
            src={"/assets/icons/send.png"}
          />
        </button>
      </div>
    </div>
  );
};

export default Chats;
