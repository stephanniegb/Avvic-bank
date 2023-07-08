import React from "react";
import { Community, Product, SideNav } from "../../components";
import products from "../../Data/products.json";
import { Outlet, useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  return (
    <div id="products-container">
      <section id="entry">
        <h2>Our Products </h2>
        <p>
          Avvic Group leads an integrated subsidiary system that provides
          collaborative synergies to drive value creation. Avvic provides unique
          opportunities for creativity, career growth, and development in
          specific skill sets.
        </p>
      </section>
      <main id="products-main">
        <SideNav />
        {products.map((product) => {
          const { Image, Name, introDescription, Details, ...rest } = product;
          if (
            location.pathname ===
            `/products/${Name.toLowerCase().replace(/[\s,]+/g, "")}`
          ) {
            return <Outlet key={Name} context={Details} />;
          }
          return null;
        })}

        {location.pathname === "/products" ||
        location.pathname === "/products/ourproducts" ? (
          <section id="products-wrapper">
            {products.map((product) => {
              const { Image, Name, introDescription } = product;
              return (
                <Product
                  key={Name}
                  Image={Image}
                  Name={Name}
                  introDescription={introDescription}
                />
              );
            })}
          </section>
        ) : (
          <></>
        )}
      </main>
      <Community />
    </div>
  );
}

export default Products;
