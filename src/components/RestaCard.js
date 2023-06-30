import { RestaImgLOg } from "../../utils/imglogs";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data
    return (
        <div className= "restCard">
            <img alt ="BiryaaniTag" width= "190px" src={ RestaImgLOg + cloudinaryImageId } />
            <h4>{name}</h4>
            <h4 className= "restCuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>${costForTwo / 100} forTwo</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;