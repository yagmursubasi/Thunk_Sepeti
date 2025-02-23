const Error = ({ info, retry }) => {
  return (
    <div>
      <div className="bg-red-100 mt-20 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir hata oluştu</p>
        <p className="font-semibold">{info}</p>
      </div>

      {retry && (
        <div className="flex justify-center my-10">
          <button onClick={retry} className="block">
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
