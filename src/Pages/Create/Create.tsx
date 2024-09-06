import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";

const Create = () =>{

    const [barCode, setBarCode] = useState<string>();
    const [itemName, setItemName] = useState<string>();
    const [markName, setMarkName] = useState<string>();
    const [amount, setAmount] = useState<string>();

    const createItem = async() =>{
        try{
            if(barCode?.length == 13 && itemName && markName && amount){
                const itemData = {
                    barCode: barCode,
                    itemName: itemName,
                    markName: markName,
                    amount: amount,
                }
                const create = await fetch("http://localhost:8080/itens/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(itemData),
                });
    
                if(!create.ok){
                    throw new Error(create.statusText);
                }
    
                const responseData = await create.json();
                alert("Created Success: " + responseData);
            }else{
                alert("Empty fields... Make sure to fill all fields!");
            }

        }catch(err){
            console.error("Error on fecth method POST: " + err);
        }
    }

    return(
        <main className="h-128">
            <NavBar />
            <section className="flex flex-col justify-center items-center min-h-full gap-5">
                <div className="flex flex-col w-2/3">
                    <label className="text-neutral-50">Barcode</label>
                    <input type="text" className="bg-transparent border-2 rounded-xl w-full h-10 text-neutral-50 focus:outline-none p-2" placeholder="7538239120000" onChange={(event)=> setBarCode(event.target.value)} required/>
                </div>
                <div className="flex gap-5 items-center justify-center w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Name</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="Notebook Aspire 5..." onChange={(event)=> setItemName(event.target.value)} required/>
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Mark</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="Acer..." onChange={(event)=> setMarkName(event.target.value)} required/>
                    </div>
                </div>
                <div className="flex gap-5 items-end w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Amount</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="12" onChange={(event)=> setAmount(event.target.value)} required/>
                    </div>
                    <button className="bg-orange-600 text-neutral-50 h-10 w-2/4 rounded-xl hover:bg-orange-500" onClick={createItem}>Create</button>
                </div>
                <Link to="/" className="text-neutral-50 hover:text-neutral-400 mt-10">Go Back To Home!</Link>
            </section>
        </main>
    )
}

export default Create;