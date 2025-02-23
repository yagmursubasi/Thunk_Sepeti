import axios from "axios";
import ActionTypes from "../actionTypes";

//normal redux aksiyonu
export const setRestaurants = (payload) => {
  return { type: ActionTypes.REST_SUCCESS, payload };
};

//Redux-thunk  Asenkron aksiyon
//*fonksiyon içerisinde fonksiyon retun ederiz
export const getRestaurants = () => {
  return (dispatch) => {
    //asenkron işlemler yapılabilir
    //dispatch ile reducerà haber gönderebiliyoruz
    dispatch({ type: ActionTypes.REST_LOADING });

    axios
      .get("http://localhost:3001/restaurants")
      .then((res) =>
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data })
      )
      .catch((err) => dispatch({ type: ActionTypes.REST_ERROR, payload: err }));
  };
};
