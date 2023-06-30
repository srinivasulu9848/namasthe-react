import RestaurantCard from "./RestaCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

const [listOfRestaurants, setListofRestaurant] = useState([]);
const [searchText, setSearchText] = useState('');
const [filteredRestuarants, setFilteredRestaurants] = useState([]);

useEffect(()=>{
     fetchApi();
}, [])

console.log("Body Rendered");
const fetchApi = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log ("json--->", json );
    setListofRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}

    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <div className='bodyContainer'>
            
            <div className='section'>
                <div className='Search'>
                    <input 
                        type="text" 
                        placeholder="enter"
                        value={ searchText }
                        onChange= { (e)=> {
                            setSearchText(e.target.value);
                        }}
                     />
                    <button
                        onClick={ ()=> {
                            const filteredRestaurants = listOfRestaurants.filter((res) => res?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredRestaurants);
                        }}>
                            Search
                    </button>
                </div>
                 <button 
                 className="filter"
                 onClick = { () => {
                    const filtered = filteredRestuarants.filter(
                        (item) => item.data.deliveryTime < 25);
                    setListofRestaurant(filtered);
                 } }
                 >
                    Filter Restaurants
                </button>
            </div>
            <div className="restContainer">
                {filteredRestuarants?.map(restaurant => 
                <Link to={"/menu/"+restaurant.data.id} key={ restaurant.data.id }><RestaurantCard resData = {restaurant} /></Link>)}
            </div>
        </div>
    )
}
export default Body;