import React from "react";

const Sort = () => {
  let sortingParameter = ["Relevance", "Orders", "Ranking"];

  return (
    <div className="w-[42%] cursor-pointer">
      <p className="text-xs font-light">Sort</p>
      <p className="border-b-2">{sortingParameter[2]}</p>
    </div>
  );
};

export default Sort;
