import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-lg shadow-md">
      <p className="text-lg font-semibold text-gray-700">
        Sepette herhangi bir ürün yok
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-amber-600 text-white font-medium rounded-lg shadow hover:bg-amber-700 transition duration-200"
      >
        Ürünlere Göz At!
      </Link>
    </div>
  );
};

export default Warning;
