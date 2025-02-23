import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//*Asenkron thunk aksiyonu
//sepet verilerini api`den alıp reducera dispatch ile heber gönderiyoruz
export const getCard = () => (dispatch) => {
  dispatch({ type: ActionTypes.CARD_LOADING });
  api
    .get("/card")
    .then((res) =>
      dispatch({ type: ActionTypes.CARD_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: ActionTypes.CARD_ERROR, payload: err }));
};

//sepete ürün eklemek için asenkron thunk aksiyonu(ürünü api`a kaydettikten sonra reducer`a haber gönderiyoruz)

export const createItem = (item) => (dispatch) => {
  console.log(item);
  //1)sepete eklenecek olan ürünün bilgilerini belirleyelim
  const newItem = {
    id: v4(),
    productId: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    photo: item.photo,
    amount: 1,
  };
  //2)api`a post request atalım
  api
    .post("/card", newItem)
    //3)api`dan dönen cevabı reducer`a gönderelim
    .then(() => dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem }))
    .catch((err) => console.log(err));
};
//ürünün apideki miktarını güncelledikten sonra reducer`a haber gönderiyoruz
export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/card/${id}`, { amount: newAmount })
    //istek başarılı olursa reducera haber gönder
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    );
};

//ürünü sepetten kaldırmak için asenkron thunk aksiyonu
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/card/${id}`)
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }));
};
