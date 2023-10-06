import { Link } from "react-router-dom";
import { HeaderImgLog } from "../utils/imglogs";
import { useState } from "react"
import { useSelector } from "react-redux";

const HeaderContainer = () => {

    const [btn, setBtn] = useState("Loggin");

  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
    return (
        <div className="flex justify-between bg-red-200">
            <div className="logoContainer">
                <img className="w-40" alt="food logo" src={HeaderImgLog} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className= "px-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className= "px-4">
                        <Link to='/about'> About</Link>
                    </li>
                    <li className= "px-4">
                        <Link to='/settings'>Settings</Link>
                    </li >
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button
                        className= "bg-yellow-200 rounded-lg px-4 py-1"
                        onClick={() => {
                            (btn === "Loggin") ? setBtn("Logout") : setBtn("Loggin")
                        }}
                    >
                        {btn}
                    </button>
                </ul>
            </div>

        </div>
    )
}
export default HeaderContainer;