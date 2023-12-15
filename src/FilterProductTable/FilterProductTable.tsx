import { useState } from "react";
import ProductModel from "../Model/ProductModel";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";
interface ProductsProps {
  products: ProductModel[];
}

function FilterProductTable({ products }: ProductsProps) {
  const [checkBox, setCheckBox] = useState(false);
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <div className="filter-product-table">
        <SearchBar
          checkBox={checkBox}
          searchString={searchString}
          changeCheckBox={setCheckBox}
          changeSearchString={setSearchString}
        />
        <ProductTable
          products={products}
          searchString={searchString}
          checkBox={checkBox}
        />
      </div>
    </>
  );
}
export default FilterProductTable;
