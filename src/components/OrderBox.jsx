const OrderBox = ({ card }) => {
  //sepetteki toplam ürün adedi
  const totalAmount = card.reduce((total, item) => total + item.amount, 0);
  //sepetteki toplam fiyat
  const totalPrice = card.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="p-5 rounded-md border border-gray-300 border-opacity-50 shadow-md h-fit">
      <h2 className="font-semibold text-xl">Sipariş Detayları </h2>
      <p className="flex items-center gap-2 my-4 ">
        <span className="text-gray-600">Ürün Adedi:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount} </span>
      </p>
      <p className="flex items-center gap-2 my-4 ">
        <span className="text-gray-600">Fiyat:</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)}$
        </span>
      </p>
      <button className="  px-4 py-2 bg-red-500 text-white p-3 rounded-lg cursor-pointer hover:bg-red-600 transition">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderBox;
