import React from "react";
import { Community, Product, SideNav } from "../../components";
import products from "../../Data/products.json";
import { Outlet, useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  return (
    <div id="products-container">
      <header id="entry">
        <div>
          <h2>Experince banking at its finest with avvic banking </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            rerum ex tempora quos repellat enim in aut, cumque magni voluptas
            expedita doloremque eligendi laudantium eveniet! Sint cupiditate
            quis non aliquam!
          </p>
        </div>
      </header>
      <main id="products-main">
        <SideNav />
        <section id="products-section">
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
            <section id="products-section">
              <div id="product-section-heading">
                <h2>Our Products</h2>
              </div>
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
            </section>
          ) : (
            <></>
          )}
        </section>
      </main>

      <Community />
    </div>
  );
}

export default Products;
