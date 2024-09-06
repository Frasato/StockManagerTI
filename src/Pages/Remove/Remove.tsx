import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { ListType } from "../../@Types/ListType";

const Remove = () => {

    const [barcode, setBarcode] = useState<string>("");
    const [itemName, setItemName] = useState<string>("");
    const [markName, setMarkName] = useState<string>("");
    const [sector, setSector] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const [items, setItems] = useState<ListType[]>([]);

    useEffect(() => {
        const findItem = async () => {
            try {
                const response = await fetch(`http://localhost:8080/itens/all`);

                if (!response.ok) {
                    throw new Error("Error on fetch items: " + response.statusText);
                }

                const responseData: ListType[] = await response.json();
                console.log(responseData);
                setItems(responseData);

            } catch (err) {
                console.error(err);
            }
        }

        findItem();
    }, [])

    const outItem = async() => {
        try{

            const dataModel = {
                id: filteredData[0].id,
                removedAmount: amount,
                city: city,
                sector: sector,
            }

            if(amount != '' && city != '' && sector != ''){
                if(filteredData[0].amount > amount){
                    const response = await fetch("http://localhost:8080/itens/takeout", {
                        method: "PUT",
                        headers:{
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dataModel),
                    })
    
                    if(!response.ok){
                        throw new Error("Error on fetch: " + response.statusText);
                    }
                }
            }else{
                alert("Make sure to fill all fields...");
            }

        }catch(err){
            console.error(err);
        }
    }

    const filteredData = items.filter(item =>
        item.barCode.toLowerCase().includes(barcode.toLowerCase())
    );

    useEffect(() => {
        if (filteredData.length > 0) {
            setItemName(filteredData[0].itemName);
            setMarkName(filteredData[0].markName);
        } else {
            setItemName("");
            setMarkName("");
        }
    }, [filteredData]);

    return (
        <main>
            <NavBar />
            <section className="flex flex-col justify-center items-center h-128 gap-5">
                <div className="flex flex-col w-2/3">
                    <label className="text-neutral-50">Barcode</label>
                    <input type="text" className="bg-transparent border-2 rounded-xl w-full h-10 text-neutral-50 focus:outline-none p-2" placeholder="7538239120000" onChange={(e) => setBarcode(e.target.value)} value={barcode} required />
                </div>
                <div className="flex gap-5 items-center justify-center w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Name</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="Notebook Aspire 5..." onChange={(e) => setItemName(e.target.value)} value={itemName} required />
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Product Mark</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="Acer..." onChange={(e) => setMarkName(e.target.value)} value={markName} required />
                    </div>
                </div>
                <div className="flex flex-col w-2/3">
                    <label className="text-neutral-50">Sector</label>
                    <input type="text" className="bg-transparent border-2 rounded-xl w-full h-10 text-neutral-50 focus:outline-none p-2" placeholder="Counter..." onChange={(e) => setSector(e.target.value)} value={sector} required />
                </div>
                <div className="flex flex-col w-2/3">
                    <label className="text-neutral-50">City</label>
                    <input type="text" className="bg-transparent border-2 rounded-xl w-full h-10 text-neutral-50 focus:outline-none p-2" placeholder="San Francisco..." onChange={(e) => setCity(e.target.value)} value={city} required />
                </div>
                <div className="flex gap-5 items-end w-2/3">
                    <div className="flex flex-col w-2/4">
                        <label className="text-neutral-50">Amount</label>
                        <input type="text" className="bg-transparent border-2 rounded-xl h-10 text-neutral-50 focus:outline-none p-2" placeholder="12" onChange={(e) => setAmount(e.target.value)} value={amount} required />
                    </div>
                    <button className="bg-orange-600 text-neutral-50 h-10 w-2/4 rounded-xl hover:bg-orange-500" onClick={outItem}>Remove</button>
                </div>
                <Link to="/" className="text-neutral-50 hover:text-neutral-400 mt-10">Go Back To Home!</Link>
            </section>
        </main>
    )
}

export default Remove;