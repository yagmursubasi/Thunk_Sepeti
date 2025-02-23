import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./pages/Restaurant";
import Card from "./pages/Card";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/restActions";
import { getCard } from "./redux/actions/basketActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants()); // Fonksiyon çağrılmalı
    dispatch(getCard());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
