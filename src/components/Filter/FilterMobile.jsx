import { useDispatch } from "react-redux";
import {
  setColorFilter,
  setPriceFilter,
} from "../../redux/slices/productSlice";
export const MobileFilter = ({ setisFilterModalOpen }) => {
  const dispatch = useDispatch();

  const handleColorFilter = (e) => {
    setisFilterModalOpen(false);
    dispatch(setColorFilter(e.target.innerText));
  };

  const handlePriceFilter = (e) => {
    setisFilterModalOpen(false);
    dispatch(setPriceFilter(e.target.getAttribute("value")));
  };
 

  const handleClose = () => {
    setisFilterModalOpen(false);
  };
  return (
    <nav className="glassmorphism h-screen w-[70%] mr-2 text-sm text-white fixed">
      <p
        className="cursor-pointer ml-2 mt-2 hover:text-white"
        onClick={handleClose}
      >
        X
      </p>
      <ul className="flex flex-col text-start my-6 gap-4 mr-4">
        <p className="font-bold"> Color</p>
        <ul className="font-light">
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
      </ul>
      <ul className="text-sm font-light gap-4 flex flex-col">
        <p className="font-bold">Price</p>
        <ul>
          <li className="cursor-pointer" value={30} onClick={handlePriceFilter}>
            under $30
          </li>
          <li className="cursor-pointer" value={50} onClick={handlePriceFilter}>
            under $50
          </li>
          <li className="cursor-pointer" value={99} onClick={handlePriceFilter}>
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
      </ul>
    </nav>
  );
};
