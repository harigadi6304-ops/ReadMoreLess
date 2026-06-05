import { Button } from "@mui/material";
import React, { useState } from "react";

const ReadMoreLess: React.FC = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center p-10 box-content shadow-xl rounded-2xl w-[60vw] gap-2">
      <h1 className="text-[#1e293b] font-semibold text-5xl">React Hooks</h1>
      <p className="text-[#334155] font-light text-lg">
        Hooks are a new edition to React
      </p>

      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react_hooks"
        className="w-full h-150 object-cover mb-5"
      />
      <p className="text-[#334155] font-light text-lg">
        Hooks solve a wide variety of seemingly unconnected problems in React
        that we have encountered oer five years of writing and maintaining tens
        of thousands of components.{" "}
        {readMore &&
          " For curious readers, we have prepared a details RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually."}
      </p>

      <Button onClick={() => setReadMore(!readMore)} variant="contained">
        {readMore ? "Read Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ReadMoreLess;
