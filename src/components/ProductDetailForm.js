import React from "react";

const ProductDetailForm = ({ dataProductDetails }) => {
  const { colors, size } = dataProductDetails;
  return (
    <div className=" form_detail">
      <div className="form__top">
        <span htmlFor="">Thông Tin </span>
        <span htmlFor=""> Chính sách đổi trả </span>
        <span htmlFor=""> Đánh giá </span>
      </div>
      <div className="form__bottom">
        <div className="form__bottom-title">
          <span> Màu sắc</span>
          <span> Size Sản Phẩm</span>
        </div>
        <div className="form__bottom-content">
          <p> {colors} </p>
          <p> {size}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailForm;
