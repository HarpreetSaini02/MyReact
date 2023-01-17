import { restarauntList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// // filter function
// function filterData(searchText) {
//   const data = restarauntList.filter((restaurant) => {
//     restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
//   });

//   return data;
// }
// function filterData(searchText) {
//   const filterData = restarauntList.filter((restaurant) =>
//   restaurant.data.name.includes(searchText)
//   );
//   return filterData;
// }

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant)=>{restaurant.data.name.includes(searchText)});
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClick, setSearchClick] = useState("false");
  const [restaurants, setRestaurants] = useState(restarauntList);
  return (
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
            const data = filterData(searchText, restaurants);
            //update the state - restaurant
            setRestaurants(data);
          }}
         >
          Search
        </button>
      </div>
      <div className="restaraunt-list">
        {restaurants.map((restaurant) => {
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
