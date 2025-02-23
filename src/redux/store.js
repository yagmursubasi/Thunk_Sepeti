import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import cardReducer from "./reducers/cardReducer";
import { thunk } from "redux-thunk";

thunk;

const rootReducer = combineReducers({
  restaurantReducer,
  cardReducer,
});
//applyMiddleware : herhangi bir arayazılımı reduxa dahil etmeye yarar biz burada thunk`ı dahil etmek için kullnıyoruz
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
