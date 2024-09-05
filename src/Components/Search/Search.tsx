import { FaSearch } from "react-icons/fa";

const Search = () =>{
    return(
        <section className="flex flex-col justify-center items-center mb-10">
            <div className="flex items-center justify-between border-2 rounded-xl w-5/12 p-1">
                <input type="text" placeholder="Barcode... Name... Mark..." className="bg-transparent w-11/12 focus:outline-none text-neutral-50"/>
                <FaSearch className="text-neutral-50 mx-3 hover:cursor-pointer hover:text-orange-600"/>
            </div>
        </section>
    )
}

export default Search;