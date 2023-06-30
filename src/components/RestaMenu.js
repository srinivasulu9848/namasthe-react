import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenuCard = () => {

    const[resInfo,setResInfo] = useState(null);
    const { id } = useParams();
    useEffect(()=>{
        fetchMenu();
    }, [])

    fetchMenu = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId='+id);
        const json = await data.json();
        console.log('data-->', json);
        setResInfo(json.data)
    }
    console.log('resInfo-->', resInfo);
    if(resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage, areaName } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log('itemCards-->', itemCards);
   
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
      <h3>{areaName}</h3>

      <h3>Menu Card</h3>
      <ul>
        {itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</li>)}
      </ul>
    </div>
  );
};
export default RestaurantMenuCard;
