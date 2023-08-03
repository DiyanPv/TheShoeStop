import React from "react";

const Filter = () => {
  return (
    <aside className="w-[14%] flex items-start flex-col h-full justify-start sm:hidden md:hidden lg:hidden xl:block">
      <ul className="text-sm font-light mb-8">
        <p className="font-bold"> Color</p>
        <li className="cursor-pointer">Red</li>
        <li className="cursor-pointer">Blue</li>
        <li className="cursor-pointer">Green</li>
        <li className="cursor-pointer">White</li>
        <li className="cursor-pointer">Black</li>
        <li className="cursor-pointer">Purple</li>
      </ul>
      <ul className="text-sm font-light">
        <p className="font-bold">Manafacturer</p>
        <li className="cursor-pointer">Nike</li>
        <li className="cursor-pointer">Adidas</li>
        <li className="cursor-pointer">Puma</li>
        <li className="cursor-pointer">NewBalance</li>
      </ul>
    </aside>
  );

  //decided to not highlight each clicked as I would have to implement router
};

export default Filter;
