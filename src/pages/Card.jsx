import { useSelector } from "react-redux";
import OrderBox from "../components/OrderBox";
import CardItem from "../components/CardItem";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Warning from "../components/Warning";

const Card = () => {
  const { card, error, isLoading } = useSelector((store) => store.cardReducer);
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} />
          ) : card.length === 0 ? (
            <Warning />
          ) : (
            card.map((item) => <CardItem key={item.id} item={item} />)
          )}
        </div>
        <OrderBox card={card} />
      </div>
    </div>
  );
};

export default Card;
