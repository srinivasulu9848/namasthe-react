import { Link } from "react-router-dom";
import { HeaderImgLog } from "../../utils/imglogs";
import { useState} from "react";

const HeaderContainer = () => {
const [btn, setBtn] = useState("Loggin");
    return (
        <div className= "header">
            <div className= "logoContainer">
                <img className= "logo" alt="food logo" src= { HeaderImgLog } />
            </div>
            <div className= "navContainers">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'> About</Link>
                    </li>
                    <li>
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <button 
                    className= "loginButton"
                    onClick= { () => {
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