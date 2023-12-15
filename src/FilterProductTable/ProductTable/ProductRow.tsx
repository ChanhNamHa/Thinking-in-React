import ProductModel from "../../Model/ProductModel";
interface ProductRowProps {
  product: ProductModel | null;
}
function ProductRow(productProps: ProductRowProps) {
  const { product = null } = productProps;
  const content = product?.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product?.name}</span>
  );
  return (
    <tr>
      <td>{content}</td>
      <td>{product?.price}</td>
    </tr>
  );
}
export default ProductRow;
