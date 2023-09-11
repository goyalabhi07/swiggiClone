import { useParams } from "react-router-dom";
import ShimmerUi from "./SmimmerUi";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const Restaurent = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  function handleAddItem(cardInfo) {
    dispatch(addItem(cardInfo));
  }

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
            <div key={e.card.info.id}>
              <li>{e.card.info.name}</li>
              <button onClick={() => handleAddItem(e.card.info)}>
                Add Item
              </button>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Restaurent;
