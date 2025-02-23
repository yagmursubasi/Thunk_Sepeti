import { Link } from "react-router-dom";
import { IoRestaurantSharp } from "react-icons/io5";
import { BsBasket2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { restaurants } = useSelector(
    (store) => store.restaurantReducer.restaurants
  ); // restaurants dizisini al
  const { card } = useSelector((store) => store.cardReducer); // card dizisini al
  const totalAmount = card.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="shadow">
      <div className="container flex justify-between items-center py-4">
        <Link to={"/"} className="text-[#f5510b] font-[900] text-2xl font-mono">
          ThunkSepeti
        </Link>
        <div className="flex gap-5 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            Yakınınızda {restaurants?.length}
            <IoRestaurantSharp className="text-2xl text-[#f5510b]" />
            <span className="max-md:hidden">Restoran Var</span>
          </Link>

          <button className="flex items-center gap-2 px-3 py-1 text-[15px] rounded-lg border-1 border-[#9c7171]  text-[#f5510b] hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl max-md:hidden cursor-pointer">
            Giriş Yap
          </button>
          <button className="btn cursor-pointer">Kayıt Ol</button>

          {/* Basket Butonu */}
          <Link
            to="/card"
            className="bsk flex items-center gap-2 p-2 rounded-full hover:bg-amber-50 hover:text-[#f5510b]  transition-all duration-300"
          >
            <BsBasket2 className=" text-xl  " />
            <span className=" font-normal   ">{totalAmount} </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
