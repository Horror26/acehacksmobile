"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";


export default function Component() {
  const [selectedOptions, setSelectedOptions] = useState([
    false,
    false,
    false,
    false,
  ]);
  const falseArr = [false, false, false, false];
  const  handleClick = (idx) => {
    console.log(idx)
    setSelectedOptions(() => {
        return selectedOptions.map((_, index) => {
            return index === idx ? true : false;
        });
        
    })
    console.log(selectedOptions)
  }
  const active = " bg-gradient-to-r from-orange-400 to-orange-400 via-orange-200 via-opacity-35"
  const inactive = "bg-[#FFB38718]"
  useEffect(() => {}, [selectedOptions])
  return (
    <div className="max-w-sm mx-auto">
      <div className="text-center py-4"></div>
      <div className="px-6 py-4">
        <Image
          alt="Meditation illustration"
          className="w-full h-auto"
          height={300}
          src="/icons/quiz2.png"
          layout="responsive"
          objectFit="cover"
          width={390}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold mb-4">
          Question to know more about the users?
        </h2>
        <div className="space-y-2">
          <Button
            className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-slate-400 ${selectedOptions[0] ? active : inactive}`} onClick={() => handleClick(0)}
          >
            Some answer
          </Button>
          <Button className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-gradient ${selectedOptions[1] ? active : inactive}`} onClick={() => handleClick(1)}>
            Some answer
          </Button>
          <Button className={`w-full py-3 bg-white text-black border hover:bg-gradient ${selectedOptions[2] ? active : inactive}`} onClick={() => handleClick(2)}>
            Some answer
          </Button>
          <Button className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-gradient ${selectedOptions[3] ? active : inactive}`} onClick={() => handleClick(3)}>
            Some answer
          </Button>
        </div>
      </div>
    </div>
  );
}
