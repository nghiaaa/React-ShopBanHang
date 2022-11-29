import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import Section, { SectionTitle } from "../components/Section";
import {
  addProduct,
  decreaseProduct,
  getTotals,
  deleteProduct,
} from "../redux/slices/cartSlide";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalCartQuanlity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  // const totalPrice = useSelector((state) => state.cart.totalAmount);

  const handleDecrementItem = (item) => {
    dispatch(decreaseProduct(item));
  };
  const handleUpdateItems = (item, price) => {
    dispatch(addProduct(item, price));
  };
  const handleDeleteItem = (item) => {
    if (window.confirm("Bạn muốn xóa?")) {
      dispatch(deleteProduct(item));
    }
  };
  return (
    <Helmet>
      <Section
        className="sectionTitle"
        style={{ width: "100% !important", paddingTop: "10vh" }}
      >
        <SectionTitle>Giỏ hàng của bạn </SectionTitle>
      </Section>
      <div className="flexTable">
        <table class="table">
          <thead className="none">
            <tr style={{ fontWeight: "700", fontSize: "20px" }}>
              <td>Sản phẩm</td>
              <td>Đơn giá</td>
              <td>Số Lượng</td>
              <td>Thành tiền</td>
            </tr>
            {/* <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr> */}
          </thead>
          {cartItems.map((item) => {
            return (
              <>
                <tbody className="tbody">
                  <tr>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <img className="img" src={item.image} alt="" />
                      <p>{item.title}</p>
                    </td>

                    <td className="cart__list-item-price">{item.price}</td>

                    <td>
                      <div className="cart__list-item-control">
                        <button
                          className="cart__list-item-minus"
                          onClick={() => handleDecrementItem(item)}
                        >
                          <i class="bx bx-minus"></i>
                        </button>
                        <input
                          style={{ width: "40px" }}
                          className="cart__list-item-input-quantity"
                          value={item.cartQuantity}
                        />
                        <button
                          className="cart__list-item-plus"
                          onClick={() => handleUpdateItems(item)}
                        >
                          <i class="bx bx-plus"> </i>
                        </button>
                      </div>
                    </td>
                    <td>
                      <p>
                        {" "}
                        {item.price * item.cartQuantity}{" "}
                        <i
                          class="bx bx-trash"
                          onClick={() => {
                            handleDeleteItem(item);
                          }}
                        ></i>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
        <section class="section" style={{ width: "28vw" }}>
          <>
            <div className="cart">
              {/* <div className="cart__list">
                <div className="cart__list-title">
                  <span>Sản phẩm </span>
                  <span style={{ transform: "translateX(-60px)" }}>Đơn giá </span>
                  <span> Số Lượng </span>
                  <span>Thành tiền </span>
                </div>
                {cartItems.map((item) => (
                  <div className="cart__list-item" key={item.id}>
                    <div style={{ display: "flex" }}>
                      <div className="cart__list-item-img">
                        <img src={item.image01} alt="" />
                      </div>
                      <div className="cart__list-item-title">{item.title}</div>
                    </div>
                    <div className="cart__list-item-price"> {item.price} </div>
                    <div className="cart__list-item-addFrom-quantity">
                      <div className="cart__list-item-control">
                        <button
                          className="cart__list-item-minus"
                          onClick={() => handleDecrementItem(item)}
                        >
                          <i class="bx bx-minus"></i>
                        </button>
  
                        <input
                          type="number"
                          className="cart__list-item-input-quantity"
                          value={item.cartQuantity}
                        />
                        <button
                          className="cart__list-item-plus"
                          onClick={() => handleUpdateItems(item)}
                        >
                          <i class="bx bx-plus"> </i>
                        </button>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="cart__list-item-totalPrice ">
                        {item.price * item.cartQuantity}
                      </div>
                      <div className="ii">
                        <i
                          class="bx bx-trash"
                          onClick={() => {
                            handleDeleteItem(item);
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="cart__info">
                <div className="cart__info_top">
                  <div className="cart__info_top-total">
                    <span>Tổng sản phẩm</span>
                    <span className="xx1 ">{totalCartQuanlity}</span>
                  </div>
                  <div className="cart__info_top-totalPrice">
                    <span>Thành tiền</span>
                    <span className="xx2 ">{cart.cartTotalAmount}</span>
                  </div>
                </div>

                <div className="cart__info-bottom">
                  <button
                    className="cart__info-bottom-tocart"
                    style={{
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    {/* <Link to="/checkout"> </Link> */}
                    Đặt hàng
                  </button>
                  <button
                    className="cart__info-bottom-buy"
                    style={{
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <Link to="/catalog">Mua sắm</Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        </section>
      </div>
    </Helmet>
  );
};

export default Cart;
