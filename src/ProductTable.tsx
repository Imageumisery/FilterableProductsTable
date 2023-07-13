import ProductRow from "./ProductRow";
import { Product } from "./types/Product";

interface ProductTableProps {
    products: Product[];
}

const ProductTable = (props: ProductTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Name</th>
                    <th colSpan={2}>Price</th>
                    <th colSpan={2}>Category</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.name} className={product.stocked ? "" : "red"}>
                            <ProductRow product={product} />
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ProductTable;
