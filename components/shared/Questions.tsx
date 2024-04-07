"use client";

import { questions } from "@/constants";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [values, setValues] = useState<number[]>([0, 0, 0, 0]);
  const [showScore, setShowScore] = useState(false);
  const router = useRouter();

  const handleAnswerOptionClick = (value: number) => {
    setValues((prev: number[]) => {
      return prev.map((prevEle: any, idx: number) => {
        return prevEle + questions[currentQuestion].map[value][idx];
      });
    });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const emo = ["Empathetic", "Professional", "Positive", "Depressed"];
  useEffect(() => {
    if (currentQuestion + 1 == questions.length) {
      const idx = values.indexOf(Math.max(...values));
      localStorage.setItem("values", emo[idx]);
      router.push("/chatbot");
    }
  }, [showScore]);

  return (
    <div className="w-[100vw] justify-center flex h-[90vh]">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="text-2xl shadow-lg shadow-pink-700/50 font-bold text-center mt-[2vh] md:mt-[15vh] rounded-3xl bg-gray-900 w-[95vw] md:w-[50vw] h-[25vh] flex justify-center items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-10">
              {questions[currentQuestion].question}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap px-[10vw] justify-center gap-2 md:gap-5 mt-[10vh] md:mt-[15vh]">
          {questions[currentQuestion].options.map((option, i) => (
            <button
              key={i}
              className="w-[95vw] md:w-[30vw] relative inline-flex group h-[10vh]"
              onClick={() => handleAnswerOptionClick(i)}
            >
              <div className="w-[95vw] md:w-[30vw] h-[10vh] absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <p className="w-[95vw] font-normal text-xs md:w-[30vw] h-[10vh] relative inline-flex items-center justify-center px-2 md:px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded-xl md:rounded-3xl">
                {option}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
