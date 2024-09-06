import { ListOutType } from "../../@Types/ListOutType";

const ListOut = (Props: ListOutType) =>{
    return(
        <section className={Props.color+" h-10"} key={Props.id}>
                <ul className="flex justify-around items-center h-10">
                    <li className="text-neutral-50">{Props.barCode}</li>
                    <li className="text-neutral-50">{Props.itemName}</li>
                    <li className="text-neutral-50">{Props.markName}</li>
                    <li className="text-neutral-50">{Props.amount}</li>
                    <li className="text-neutral-50">{Props.cityName}</li>
                    <li className="text-neutral-50">{Props.sectorName}</li>
                    <li className="text-neutral-50">{Props.outDate}</li>
                </ul>
        </section>
    )
}

export default ListOut;