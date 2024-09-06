import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Create = () =>{
    return(
        <main className="h-128">
            <NavBar />
            <section className="flex flex-col justify-center items-center min-h-full gap-5">
                <div className="flex flex-col w-2/3">
                    <label className="text-neutral-50">Barcode</label>
                    <input type="text" className="bg-transparent border-2 rounded-xl w-full h-10 text-neutral-50 focus:outline-none p-2"/>
                </div>
                <div className="flex gap-5 items-center justify-center w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Name</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2"/>
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Mark</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2"/>
                    </div>
                </div>
                <div className="flex gap-5 items-end w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Amount</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2"/>
                    </div>
                    <button className="bg-orange-600 text-neutral-50 h-10 w-2/4 rounded-xl hover:bg-orange-500">Create</button>
                </div>
                <Link to="/" className="text-neutral-50 hover:text-neutral-400 mt-10">Go Back To Home!</Link>
            </section>
        </main>
    )
}

export default Create;