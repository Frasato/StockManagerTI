import { FaSearch } from "react-icons/fa";

const Search = () =>{
    return(
        <section>
            <h1 className="text-lg text-neutral-50 font-bold">Stock Itens</h1>
            <div>
                <input type="text" placeholder="Barcode... Name... Mark..."/>
                <FaSearch />
            </div>
        </section>
    )
}

export default Search;