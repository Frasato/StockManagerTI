import NavBar from "../../Components/NavBar/NavBar";
import Search from "../../Components/Search/Search";

const Out = () =>{
    return(
        <main>
            <NavBar />
            <div className="flex justify-center mt-5">
                <h1 className="text-4xl text-neutral-50 font-bold mb-5">Exit item!</h1>
            </div>
            <Search />
        </main>
    )
}

export default Out;