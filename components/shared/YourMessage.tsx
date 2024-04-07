import React from "react";

const YourMessage = ({ data }: any) => {
  return (
    <div className="border border-[#E3E3E3] w-fit px-3 py-1 rounded-lg ml-auto mb-1">
      {data}
    </div>
  );
};

export default YourMessage;
