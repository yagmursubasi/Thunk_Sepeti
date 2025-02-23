import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../redux/actions/basketActions";

const ProductCard = ({ item }) => {
  const { card } = useSelector((store) => store.cardReducer);
  const dispatch = useDispatch();

  //prop olarak sepete gelen ürün daha önce eklenmiş mi?
  const found = card?.find((cardItem) => cardItem.productId === item.id);
  console.log(found);

  const handleAddToCard = () => {
    //ürün daha önce eklenmişse amount`u 1 arttır
    found
      ? //eğer ürün sepette varsa miktarını 1 arttıran fonksiyounu çalıştır
        dispatch(updateItem(found.id, found.amount + 1))
      : //eğer ürün sepette yoksa yeni ürün ekleyen fonksiyonu çalıştır
        dispatch(createItem(item));
  };
  return (
    <div className="  grid grid-cols-[1fr_115px] gap-3 shadow shadow-gray-400 p-3 rounded-lg hover:bg-orange-100 hover:scale-[1.02] cursor-pointer transition duration-300  ">
      <div className="items-center">
        <div>
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-gray-500 my-1">{item.desc} </p>
        </div>
        <p className="text-lg font-semibold">{item.price}$ </p>
      </div>
      <div className="relative">
        <img src={item.photo} className="rounded-md object-cover size-full" />
        <button
          onClick={handleAddToCard}
          className="absolute bottom-2 end-2 grid place-items-center bg-orange-400 hover:bg-orange-500 text-white p-2 size-8 rounded-full cursor-pointer"
        >
          {found ? (
            <span className="font-bold">{found.amount} </span>
          ) : (
            <FaPlus className="text-[15px]  " />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
