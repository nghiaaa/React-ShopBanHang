import React from "react";
import Section, { SectionTitle } from "../components/Section";
import { Input } from "antd";
const { TextArea } = Input;
const CheckOut = () => {
  return (
    <>
      <SectionTitle>Trang đặt hàng </SectionTitle>
      <div className="Checkout__main">
        <div className="checkout__main-left">
          <div className="profile">
            <h2> Thông tin người dùng</h2>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <TextArea placeholder="Address" rows={4} maxLength={60} />
          </div>{" "}
        </div>

        <div className="checkout__main-right"></div>
      </div>
    </>
  );
};

export default CheckOut;
