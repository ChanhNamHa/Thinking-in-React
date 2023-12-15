interface CategoryProps {
  category: string;
}
function ProductCategoryRow(props: CategoryProps) {
  return (
    <tr>
      <th>{props.category}</th>
    </tr>
  );
}
export default ProductCategoryRow;
