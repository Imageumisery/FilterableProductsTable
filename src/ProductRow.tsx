import { Product } from "./types/Product";

interface ProductRowProps {
    product: Product;
}

const ProductRow = ({ product }: ProductRowProps) => {
    return (
        <>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
        </>
    );
};

export default ProductRow;
