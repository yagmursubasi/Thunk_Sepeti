import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Loader from "./Loader";
import { FaClock, FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api.get(`/restaurants/${id}`).then((res) => setRestaurant(res.data));
  }, []);
  if (!restaurant) return <Loader />;
  return (
    <div className="flex gap-5">
      <img className="w-[150px] rounded-md" src={restaurant.photo} alt="" />
      <div className="flex flex-col justify-between">
        <div className="flex gap-4">
          <p className="flex gap-2 items-center">
            <FaArrowDown className="text-[#f5510b]" />
            <span className="text-[15px] font-medium text-gray-600 ">
              min {restaurant.minPrice} TL{" "}
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <FaClock className="text-[#f5510b]" />
            <span className="text-[15px] font-medium text-gray-600 ">
              min {restaurant.estimatedDelivery} dak.
            </span>
          </p>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          {restaurant.name}{" "}
        </h1>
        <p className="flex items-center gap-2">
          <FaStar className="text-red-500 cursor-pointer " />
          <span className="text-gray-600">{restaurant.rating} </span>
          <button className=" text-[#f5510b] font-semibold pl-1 rounded hover:bg-red-100 items-center transition cursor-pointer">
            Yorumları Gör
          </button>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
