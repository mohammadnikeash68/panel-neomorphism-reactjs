import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Brands from "../Brands/Brands";

import Category from "../Category/Category";
import Colors from "../Colors/Colors";
import Dashboard from "../Dashboard/Dashboard";
import Discounts from "../Discounts/Discounts";
import Garanty from "../Garanty/Garanty";
import Products from "../Products/Products";

const Contents = () => {
  const [isCat, setIsCat] = useState(true);
  return (
    <>
      <div className="col-xl-10 col-lg-8 col-md-6 ms-auto mt-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/category"
            element={isCat ? <Category /> : <Navigate replace to="/" />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />

          <Route path="/garanty" element={<Garanty />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/discounts" element={<Discounts />} />
        </Routes>
      </div>
    </>
  );
};
export default Contents;
