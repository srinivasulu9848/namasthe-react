import { RestaImgLOg } from "../utils/imglogs";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info
    const { deliveryTime } = resData?.info?.sla
    return (
        <div className="w-[230px] m-2 p-2 hover:bg-gray-200 rounded-lg border border-solid">
            <img className=" rounded-lg" alt="BiryaaniTag" width="190px" src={RestaImgLOg + cloudinaryImageId} />
            <h4 className="text-lg py-2">{name}</h4>
            <h4 className="w-40 text-sm">{cuisines.join(",")}</h4>
            <h4 className="text-sm text-blue-400">{avgRating} stars</h4>
            <h4 className="text-sm">${costForTwo / 100} forTwo</h4>
            <h4 className="text-sm">{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;

export function WithPromoted () {
    return (props) => {
        return (
            <>
                <label className="absolute m-2 p-2 bg-black text-cyan-50 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}