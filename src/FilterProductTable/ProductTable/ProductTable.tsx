import ProductModel from "../../Model/ProductModel";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
interface ProductsProps {
  products: ProductModel[];
  searchString: string;
  checkBox: boolean;
}
function ProductTable(props: ProductsProps) {
  const rows: JSX.Element[] = [];
  let lastCategory = "";
  let filterProducts = props.products.filter(
    (e) => e.stocked === true || e.stocked === props.checkBox
  );
  if (props.searchString.length > 0) {
    filterProducts = filterProducts.filter(
      (e) => !e.name.search(props.searchString)
    );
  }
  filterProducts.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
export default ProductTable;
