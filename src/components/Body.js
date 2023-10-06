import RestaurantCard, { WithPromoted } from "./RestaCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListofRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestuarants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("json--->", json);
        setListofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("body render", listOfRestaurants);
    }
    
    const PromotedRestaurant = WithPromoted(RestaurantCard);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>OOPS! YOUR INTERNET CONNECTION GONE</h1>
    }
    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <div className=''>

            <div className='flex'>
                <div className='m-4 p-4'>
                    <input
                        className="border border-solid border-black "
                        type="text"
                        placeholder="enter"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className=" bg-slate-300 px-2 mx-2 rounded-lg"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants?.filter((res) => res?.data?.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredRestaurants);
                        }}>
                        Search
                    </button>
                </div>
                <button
                    className="rounded-md bg-purple-100 w-50 my-6 px-1"
                    onClick={() => {
                        const filtered = filteredRestuarants?.filter(
                            (item) => item.data.deliveryTime < 25);
                        setListofRestaurant(filtered);
                    }}
                >
                    Filter Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestuarants?.map(restaurant =>
                    <Link to={"/menu/" + restaurant.info.id} key={restaurant.info.id}>
                        {true ? <PromotedRestaurant resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
                    </Link>)}
            </div>
        </div>
    )
}
export default Body;