import React from "react";
import { setSort } from "../../redux/slices/productSlice";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
const Sort = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleChange = (e) => {
    const { target } = e;
    if (!target) return;

    dispatch(setSort(target));
    setSelectedCategory(target);
  };

  return (
    <div className="w-[48%]">
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="sort-select" className="pb-2">
          Sort
        </InputLabel>
        <Select
          labelId="sort-select"
          id="sort-select"
          value={selectedCategory ? selectedCategory.value : ""}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={"ranking"}>Ranking</MenuItem>
          <MenuItem value={"orders"}>Orders</MenuItem>
          <MenuItem value={"priceAscending"}>Price (Low to High)</MenuItem>
          <MenuItem value={"priceDescending"}>Price (High to Low)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
