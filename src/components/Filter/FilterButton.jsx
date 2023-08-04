import React from "react";
import { RiMenu2Line } from "react-icons/ri";

const FilterButton = ({ setisFilterModalOpen, isFilterModalOpen }) => {
  const handleOpenFilterButton = () => {
    setisFilterModalOpen(!isFilterModalOpen);
  };
  return (
    <div className=" flex items-center border-b-2 py-1 sm:px-2 md:px-6  rounded-md font-semibold cursor-pointer xl:hidden bg-[#DCDCDC] ">
      <RiMenu2Line className="mr-2" />{" "}
      <p className="xs:text-sm" onClick={handleOpenFilterButton}>
        {isFilterModalOpen ? `Close` : `Open`} Filter
      </p>
    </div>
  );
};

export default FilterButton;
