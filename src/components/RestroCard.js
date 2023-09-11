import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card" onClick={() => {}}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <div>{cuisines?.join(", ")}</div>
      <h4>{avgRating} Stars</h4>
      <h4>{user.name}</h4>
    </div>
  );
};

export default RestroCard;
