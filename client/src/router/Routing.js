import { Routes, Route } from "react-router-dom";
import React from "react";
import ScrollToTop from "../util/ScrollToTop";
import {
  About,
  LandingPage,
  Careers,
  NoPage,
  Products,
  ProductDetails,
  Support,
} from "../pages";

function Routing() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/contact" element={<Support />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="/products/ourproducts" element={<Products />} />
          <Route path="/products/:product" element={<ProductDetails />} />
        </Route>
        {/* <Route path="" element={}></Route> */}
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </>
  );
}

export default Routing;
