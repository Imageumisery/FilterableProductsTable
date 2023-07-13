import { ChangeEventHandler } from "react";

interface SearchProps {
    value: string;
    handleSearch: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ value, handleSearch }: SearchProps) => {

    return (
        <>
            <label htmlFor="search">Find your product</label>
            <input type="text" className="search" value={value} onChange={handleSearch} />
        </>
    );
};

export default Search;
