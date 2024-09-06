import { Link } from "react-router-dom";
import logo from "../../Assets/Licon.png";

const NavBar = () =>{
    return(
        <nav className="flex justify-around items-center p-10">
            <img src={logo} alt="Logo TI" className="w-10"/>
            <div>
                <Link to="/" className="text-neutral-50 mx-5 hover:text-neutral-300">HOME</Link>
                <Link to="/out" className="text-neutral-50 mx-5 hover:text-neutral-300">OUTS</Link>
                <Link to="/create" className="text-neutral-50 mx-5 bg-orange-600 p-2 rounded-md hover:bg-orange-500">ADD</Link>
            </div>
        </nav>
    )
}

export default NavBar;