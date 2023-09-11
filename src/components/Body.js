import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import RestroCard from "./RestroCard";
import ShimmerUi from "./SmimmerUi";
import useOffline from "../utils/useOffline";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [
    searchText,
    filteredRestroList,
    restroList,
    setSearchText,
    setFilteredRestroList,
  ] = useRestaurantList();
  const isOffline = useOffline();

  const { user, setUser } = useContext(UserContext);

  if (isOffline) {
    return <div>You are offline, Check your internet connection</div>;
  }

  return restroList?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(element) => {
            setSearchText(element.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            setFilteredRestroList(filterData(searchText, restroList));
          }}
        >
          Search
        </button>

        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={user.name}
          onChange={(element) =>
            setUser((prev) => {
              return {
                ...prev,
                name: element.target.value,
              };
            })
          }
        />
      </div>
      <div className="restro-list">
        {filteredRestroList?.map((restro) => {
          return (
            <Link to={`/restaurent/${restro.info.id}`} key={restro.info.id}>
              <RestroCard {...restro.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
