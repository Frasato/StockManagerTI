import { Link, Navigate } from "react-router-dom";
import logo from "../../Assets/Licon.png";
import { useState } from "react";

const NavBar = () =>{

    const [redirect, setRedirect] = useState<boolean>(false);

    const goToHome = () => setRedirect(true);

    if(redirect) return <Navigate to="/"/>

    return(
        <nav className="flex justify-around items-center p-10">
            <img src={logo} alt="Logo TI" className="w-10 cursor-pointer" onClick={goToHome}/>
            <div>
                <Link to="/" className="text-neutral-50 mx-5 hover:text-neutral-300">HOME</Link>
                <Link to="/out" className="text-neutral-50 mx-5 hover:text-neutral-300">OUTPUT ITEMS</Link>
                <Link to="/create" className="text-neutral-50 mx-5 bg-orange-600 p-2 rounded-md hover:bg-orange-500">ADD</Link>
                <Link to="/remove" className="text-neutral-50 mx-5 bg-orange-600 p-2 rounded-md hover:bg-orange-500">TAKE OUT</Link>
            </div>
        </nav>
    )
}

export default NavBar;