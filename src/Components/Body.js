import { restarauntList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClick, setSearchClick] = useState("false");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.970783904810569&lng=77.73630939424038&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  if(!allRestaurants) return nill;
  if(filteredRestaurants?.length===0) return <h1> No Restaurant </h1>
  return allRestaurants?.length ===0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <h1> {searchClick}</h1> */}
        <button
          className="search-button"
          //Toggle the search button
          // onClick={() => {
          //   if (searchClick === "true") {
          //     setSearchClick("false");
          //   } else {
          //     setSearchClick("true");
          //   }
          // }}

          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state - restaurant
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaraunt-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        ;
      </div>
    </>
  );
};
export default Body;
