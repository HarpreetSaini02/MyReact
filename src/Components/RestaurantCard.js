import { IMG_CDN_URL } from "../Constant";


const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cusines,
    avgRating,
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2>{name} </h2>
        <h3>{cusines}</h3>
        <h4>{avgRating} rating </h4>
        <h4>{lastMileTravelString} minute</h4>
      </div>
    );
  };


  export default RestaurantCard;