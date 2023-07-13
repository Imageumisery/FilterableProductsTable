import { ChangeEvent, useState } from "react";
import ProductTable from "./ProductTable";
import Search from "./Search";

const productsJson = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const FilterableProductTable = () => {
    const [value, setValue] = useState("");

    function getFilteredNames() {
        return productsJson.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <>
            <h2>Filterable Product table</h2>
            <Search value={value} handleSearch={handleSearch} />
            <ProductTable products={getFilteredNames()} />
        </>
    );
};

export default FilterableProductTable;
