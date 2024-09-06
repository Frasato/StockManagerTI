import { useEffect, useState } from "react";
import List from "../../Components/List/List";
import NavBar from "../../Components/NavBar/NavBar";
import Search from "../../Components/Search/Search";
import { ListType } from "../../@Types/ListType";

const Home = () =>{

    const [itens, setItens] = useState<ListType[]>([]);

    useEffect(()=>{
        const getAll = async() =>{
            try{
                const response = await fetch("http://localhost:8080/itens/all");
                
                if(!response.ok){
                    throw new Error("Failed to fetch items: " + response.statusText);
                }

                const responseData: ListType[] = await response.json();
                setItens(responseData);
            }catch(err){
                console.error(err);
            }
        }

        getAll();
    },[])

    return(
        <main>
            <NavBar />
            <div className="flex justify-center">
                <h1 className="text-4xl text-neutral-50 font-bold mb-5">Stock Itens</h1>
            </div>
            <Search />
            {itens.map((item, index)=>{
                return(
                    <List barCode={item.barCode} itemName={item.itemName} markName={item.markName} amount={item.amount} createdDate={item.createdDate} color={index % 2 === 0? "bg-gray-600": ""} id={item.id} key={item.id}/>
                )
            })}
        </main>     
    )
}

export default Home;