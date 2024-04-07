"use client";

import React from "react";
import GroupItem from "@/components/cards/GroupItem";

const page = () => {
  return (
    <div className="h-[85vh]">
      <div className="border mx-6 rounded-xl border-[#DADADC] my-8">
        <GroupItem name="Bookworms" img="bookworms" />
        <GroupItem name="Student Space" img="studentspace" />
        <GroupItem name="Fitness Frets" img="fitnessfrets" />
        <GroupItem name="Mindful Meditation" img="mindfulmeditation" />
      </div>
    </div>
  );
};

export default page;
