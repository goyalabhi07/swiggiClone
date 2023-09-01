import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantData();
    }, []);

    async function getRestaurantData() {
        const res = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.85549849043992&lng=75.77040441334246&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await res.json();
        setRestaurant(data);
    }

    return restaurant;
}

export default useRestaurant