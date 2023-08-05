import React from "react";
import { useDispatch } from "react-redux";
import {
  setColorFilter,
  setPriceFilter,
} from "../../redux/slices/productSlice";
import { MobileFilter } from "./FilterMobile";
const Filter = ({ isFilterModalOpen, setisFilterModalOpen }) => {
  const dispatch = useDispatch();
  const handleColorFilter = (e) => {
    dispatch(setColorFilter(e.target.innerText));
  };

  const handlePriceFilter = (e) => {
    dispatch(setPriceFilter(e.target.getAttribute("value")));
  };
  return (
    <div>
      {isFilterModalOpen ? (
        <MobileFilter
          setisFilterModalOpen={setisFilterModalOpen}
          handleColorFilter={handleColorFilter}
          handlePriceFilter={handlePriceFilter}
        />
      ) : (
        <aside className="w-[14%] flex items-start flex-col h-full justify-start sm:hidden md:hidden lg:hidden xl:block pr-6">
          <ul className="text-sm font-light mb-8">
            <p className="font-bold"> Color</p>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              Red
            </li>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              Blue
            </li>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              Green
            </li>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              White
            </li>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              Black
            </li>
            <li className="cursor-pointer" onClick={handleColorFilter}>
              Purple
            </li>
          </ul>
          <ul className="text-sm font-light w-max">
            <p className="font-bold">Price</p>
            <li
              className="cursor-pointer"
              value={30}
              onClick={handlePriceFilter}
            >
              under 30
            </li>
            <li
              className="cursor-pointer"
              value={50}
              onClick={handlePriceFilter}
            >
              under $50
            </li>
            <li
              className="cursor-pointer"
              value={99}
              onClick={handlePriceFilter}
            >
              under $100
            </li>
            <li
              className="cursor-pointer"
              value={100}
              onClick={handlePriceFilter}
            >
              over $100
            </li>
          </ul>
        </aside>
      )}
    </div>
  );

  //decided to not highlight each clicked as I would have to implement router
};

export default Filter;
