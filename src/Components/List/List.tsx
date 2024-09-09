import { ListType } from "../../@Types/ListType";

const List = (Props: ListType) =>{
    return(
        <section className={Props.color+" h-10"} key={Props.id}>
                <ul className="flex justify-start items-center h-10 ml-32">
                    <li className="text-neutral-50 text-left flex-1">{Props.barCode}</li>
                    <li className="text-neutral-50 text-left flex-1">{Props.itemName}</li>
                    <li className="text-neutral-50 text-left flex-1">{Props.markName}</li>
                    <li className="text-neutral-50 text-left flex-1">{Props.amount}</li>
                    <li className="text-neutral-50 text-left flex-1">{Props.createdDate}</li>
                </ul>
        </section>
    )
}

export default List;