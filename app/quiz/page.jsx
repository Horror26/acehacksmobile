"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Component() {
  const [selectedOptions, setSelectedOptions] = useState([
    false,
    false,
    false,
    false,
  ]);
  const router = useRouter()
  const falseArr = [false, false, false, false];
  const  handleClick = (idx) => {
    console.log(idx)
    setSelectedOptions(() => {
        return selectedOptions.map((_, index) => {
            return index === idx ? true : false;
        });
    }) 
    setTimeout(() => router.push("./page2"), 1000) 
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
          src="/icons/quiz1.png"
          layout="responsive"
          objectFit="cover"
          width={390}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold mb-4">
        How do you handle criticism or feedback from your peers or superiors?
        </h2>
        <div className="space-y-2">
          <Button
            className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-slate-400 ${selectedOptions[0] ? active : inactive}`} onClick={() => handleClick(0)}
          >
           Learn from their viewpoint
          </Button>
          <Button className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-gradient ${selectedOptions[1] ? active : inactive}`} onClick={() => handleClick(1)}>
          Stay composed, accept feedback
          </Button>
          <Button className={`w-full py-3 bg-white text-black border hover:bg-gradient ${selectedOptions[2] ? active : inactive}`} onClick={() => handleClick(2)}>
          Value constructive criticism, improve
          </Button>
          <Button className={`w-full py-3 bg-white text-black border border-gray-300 hover:bg-gradient ${selectedOptions[3] ? active : inactive}`} onClick={() => handleClick(3)}>
          Demotivated by criticism, struggle
          </Button>
        </div>
      </div>
    </div>
  );
}
