import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../config";
import ShimmerUi from "./SmimmerUi";
import useRestaurant from "../utils/useRestaurant";

const Restaurent = () => {
    const { id } = useParams();
    const restaurant = useRestaurant(id);
    return !restaurant ? (
        <ShimmerUi />
    ) : (
        <div className="restro-menu">
            <div className="restro-info">
                <h1>
                    Restaurent ID : {restaurant?.data?.cards[0]?.card?.card?.info.id}
                </h1>
                <h2>{restaurant?.data?.cards[0]?.card?.card?.info.name}</h2>
                <img
                    className="restaurant-img"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.data?.cards[0]?.card?.card?.info.cloudinaryImageId}`}
                />
            </div>
            <ul className="menu">
                {" "}
                menu
                {restaurant.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                    (e) => (
                        <li key={e.card.info.id}>{e.card.info.name}</li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Restaurent;
