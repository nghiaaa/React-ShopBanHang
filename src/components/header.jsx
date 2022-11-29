import React, { useEffect, useRef, useState } from "react";
import logo1 from "../assets/images/logo1.png";
import { Link, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const navigateToCart = () => {
  Navigate("/cart");
};
const Header = () => {
  const headerQuantityCart = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  // const menuToggle = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  //   console.log(menuToggle);
  // };
  const [drop, setDrop] = useState(false);
  const menuToggle = () => {
    setDrop((drop) => !drop);
    console.log(drop);
  };
  const cart2 = useSelector((state) => state.cart.cart);

  return (
    <div className="Header">
      {/* <div className="Container">
        <div className="Header__logo">
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
      </div> */}
      <div className="Header__menu">
        <div
          // className="header__menu__mobile-toggle"
          className={`header__menu__mobile-toggle ${drop ? "active" : ""}`}
        >
          <div className="flex2">
            <i
              className="bx bx-menu-alt-left"
              onClick={() => menuToggle()}
              style={{ fontSize: "35px" }}
            ></i>
            <div className="Container2" style={{ display: "flex" }}>
              <div className="Header__menu__right__search">
                <i className="bx bx-search" style={{ fontSize: "30px" }}>
                  {" "}
                </i>
              </div>
              <div className="Header__menu__right__cart">
                <Link to="/cart">
                  {/* <i className="bx bx-shopping-bag" onClick={() => navigateToCart}>
                {" "}
              </i>
              <span className="bagde"> {headerQuantityCart}</span> */}
                  <Badge
                    badgeContent={headerQuantityCart}
                    color="primary"
                    onClick={() => navigateToCart}
                  >
                    <ShoppingCartIcon style={{ fontSize: "30px" }} />
                  </Badge>
                </Link>
              </div>
              <div className="Header__menu__right__login">
                <Link to="/login">
                  <i className="bx bx-user" style={{ fontSize: "30px" }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="Header__menu__left">
          {mainNav.map((item, index) => (
            <div key={index} className="Header__menu__left__item">
              <Link to={item.path}>
                <span>{item.display}</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="Container">
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
        <div className="Header__menu__right">
          <div className="Header__menu__right__search">
            <i className="bx bx-search" style={{ fontSize: "30px" }}>
              {" "}
            </i>
          </div>
          <div className="Header__menu__right__cart">
            <Link to="/cart">
              {/* <i className="bx bx-shopping-bag" onClick={() => navigateToCart}>
                {" "}
              </i>
              <span className="bagde"> {headerQuantityCart}</span> */}
              <Badge
                badgeContent={headerQuantityCart}
                color="primary"
                onClick={() => navigateToCart()}
              >
                <ShoppingCartIcon style={{ fontSize: "30px" }} />
              </Badge>
            </Link>
          </div>
          <div className="Header__menu__right__login">
            <Link to="/login">
              <i className="bx bx-user" style={{ fontSize: "30px" }}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
