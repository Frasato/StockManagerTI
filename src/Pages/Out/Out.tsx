import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Search from "../../Components/Search/Search";
import { ListOutType } from "../../@Types/ListOutType";
import ListOut from "../../Components/ListOut/ListOut";

const Out = () =>{

    const [offItems, setOffItems] = useState<ListOutType[]>([]);

    useEffect(()=>{
        const listAllOutItems = async() =>{
            try{

                const response = await fetch("http://localhost:8080/finish/all");
                
                if(!response.ok){
                    throw new Error("Error on fetching items: " + response.statusText);
                }

                const responseData: ListOutType[] = await response.json();
                setOffItems(responseData);
            }catch(err){
                console.error(err);
            }
        }

        listAllOutItems();
    },[])

    return(
        <main>
            <NavBar />
            <div className="flex justify-center mt-5">
                <h1 className="text-4xl text-neutral-50 font-bold mb-5">Exit item!</h1>
            </div>
            <Search />
            {offItems.map((item, index)=>{
                return(
                    <ListOut
                        barCode={item.barCode}
                        itemName={item.itemName}
                        markName={item.markName}
                        amount={item.amount}
                        sectorName={item.sectorName}
                        cityName={item.cityName}
                        color={index % 2 == 0? "bg-gray-600": ""}
                        outDate={item.outDate}
                        id={item.id}
                        key={item.id}
                    />
                )
            })}
        </main>
    )
}

export default Out;