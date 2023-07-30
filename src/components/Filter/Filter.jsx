import React from "react";

const Filter = () => {
  return (
    <aside className="w-[14%] flex items-start flex-col h-full justify-start sm:hidden md:hidden lg:hidden xl:block">
      <ul className="text-sm font-light mb-8">
        <p className="font-bold"> Color</p>
        <li>Red</li>
        <li>Blue</li>
        <li>Green</li>
        <li>White</li>
        <li>Black</li>
        <li>Purple</li>
      </ul>
      <ul className="text-sm font-light">
        <p className="font-bold">Manafacturer</p>
        <li>Nike</li>
        <li>Adidas</li>
        <li>Puma</li>
        <li>NewBalance</li>
      </ul>
    </aside>
  );
};

export default Filter;
