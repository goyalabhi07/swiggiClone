import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.85549849043992&lng=75.77040441334246&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    const restaurants =
      data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestroList(restaurants);
    setFilteredRestroList(restaurants);
  }

  return [
    searchText,
    filteredRestroList,
    restroList,
    setSearchText,
    setFilteredRestroList,
  ];
};

export default useRestaurantList;
