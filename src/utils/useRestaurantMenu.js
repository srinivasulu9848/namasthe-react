import {useEffect, useState} from 'react';
import { RestaMenuApi } from './imglogs';

const useRestaurantMenu = (id) => {
    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    fetchMenu = async () =>{
        const data = await fetch(RestaMenuApi+id);
        const json = await data.json();
        console.log('data-->', json);
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;