import React from "react";
import prodpic1 from "../Assets/images/bg/bottle-splush-01.png";

function Products() {
  return (
    <div className="products__section">
      <div className="products__title">
        <h1>Stellar Products</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-12 products__list">
        <div className="col-span-4 product__container">
          <div className="item">
            <div className="prod__pic">
              <img src={prodpic1} alt="product pict" />
            </div>
            <div className="prod__name">
              <h6>Natural Flavor</h6>
            </div>
            <div className="prod__description">
              <p>
                rem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisiLorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 product__container">
          <div className="item">
            <div className="prod__pic">
              <img src={prodpic1} alt="product pict" />
            </div>
            <div className="prod__name">
              <h6>Vanilla Flavor</h6>
            </div>
            <div className="prod__description">
              <p>
                rem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisiLorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 product__container">
          <div className="item">
            <div className="prod__pic">
              <img src={prodpic1} alt="product pict" />
            </div>
            <div className="prod__name">
              <h6>Passion Flavor</h6>
            </div>
            <div className="prod__description">
              <p>
                rem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisiLorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="view__all__btn">
        <h4>View All Products</h4>
      </div>
    </div>
  );
}

export default Products;
