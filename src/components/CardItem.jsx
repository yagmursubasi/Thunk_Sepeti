import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { updateItem } from "../redux/actions/basketActions";
import { deleteItem } from "../redux/actions/basketActions";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCard = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };
  const handleDeleteToCard = () => {
    //miktar 1 den büyükse miktarı 1 azalt
    item.amount > 1
      ? dispatch(updateItem(item.id, item.amount - 1))
      : //miktar 1 ise ürünü sepetten kaldır
        dispatch(deleteItem(item.id));
  };
  return (
    <div className="flex  gap-4 border border-gray-300 border-opacity-50  shadow-md  mb-10 rounded-lg p-4 ">
      <img src={item.photo} className="w-[115px] rounded-lg " />
      <div className="w-full flex flex-col justify-between ">
        <h3 className="text-[20px] font-semibold text-[#f5510b]">
          {item.title}{" "}
        </h3>
        <div className="flex items-center justify-between ">
          <p>{item.price}$ </p>
          <div className="border border-gray-300 border-opacity-50  shadow-md  text-l rounded-lg">
            <button
              onClick={handleDeleteToCard}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg "
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash className="text-" />}
            </button>
            <span className="p-2 mr-[-5px] ">{item.amount} </span>
            <button
              onClick={handleAddToCard}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg "
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
