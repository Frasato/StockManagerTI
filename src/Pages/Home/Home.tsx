import List from "../../Components/List/List";
import NavBar from "../../Components/NavBar/NavBar";
import Search from "../../Components/Search/Search";

const Home = () =>{
    return(
        <main>
            <NavBar />
            <div className="flex justify-center">
                <h1 className="text-4xl text-neutral-50 font-bold mb-5">Stock Itens</h1>
            </div>
            <Search />
            <List />
        </main>     
    )
}

export default Home;