import React from "react";
import { Button, Input } from "antd";
import contact from "../../src/assets/images/contact.png";
const { TextArea } = Input;
const Contact = () => {
  return (
    <div className="mainContact">
      <div className="mainContact__Left">
        <img src={contact} alt="" />
      </div>
      <div className="mainContact__Right">
        <h1> LIÊN HỆ</h1>
        <div className="mainContact__Right_content">
          <div className="mainContact__Right_content-left">
            <span> Họ và tên:</span>
            <input type="text" />
          </div>
          <div className="mainContact__Right_content-right">
            <span> Email</span>
            <input type="text" />
          </div>
          <div className="mainContact__Right_content-bottom">
            <span> Nội dung</span>
            <>
              <TextArea
                className=" txt"
                rows={4}
                placeholder="Viết nội dung vào đây..."
                maxLength={6}
                style={{ width: "cacl(100vw - 50px)" }}
              />
            </>
            <Button type="primary">Gửi đi</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
