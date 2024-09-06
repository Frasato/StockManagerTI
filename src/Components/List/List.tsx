import { ListType } from "../../@Types/ListType";

const List = (Props: ListType) =>{
    return(
        <section className={Props.color+" h-10"} key={Props.id}>
                <ul className="flex justify-around items-center h-10">
                    <li className="text-neutral-50">{Props.barCode}</li>
                    <li className="text-neutral-50">{Props.itemName}</li>
                    <li className="text-neutral-50">{Props.markName}</li>
                    <li className="text-neutral-50">{Props.amount}</li>
                    <li className="text-neutral-50">{Props.createdDate}</li>
                </ul>
        </section>
    )
}

export default List;