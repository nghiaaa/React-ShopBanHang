import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { addProduct } from "../redux/slices/cartSlide";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = (id, image, price, title, size, colors) => {
    console.log(id, "check");
    dispatch(
      addProduct({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
    toast.success("Đã thêm vào giỏ hàng!");
  };
  return (
    <Col>
      <div className="product__item">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="product__img"
          style={{ width: "60%", margin: "auto" }}
        >
          <img src={item.image} alt="" />
        </motion.div>
        <div className="product__info">
          <h3 className="product__name">
            <Link to={`/catalog/${item.id}`}> {item.title}</Link>
          </h3>
        </div>

        <div className="product__card-bottom">
          <span className="price"> {item.price}</span>
          <span className="icon_cart">
            <i class="bx bxs-cart-add bx-tada" onClick={() => addToCart()}></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
