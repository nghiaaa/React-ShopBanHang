import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
const footerLink = [
  {
    display: "giới thiệu",
    path: "/gioithieu",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Tuyển dụng",
    path: "/tuyendung",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/hethongcuahang",
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="flex">
        <div className="footer__contact">
          <div className="footer__tittle">Tổng đài hỗ trợ</div>
          <div className="footer__content">
            <p>
              Liên hệ đặt hàng <strong>0123456789</strong>
            </p>
            <p>
              Thắc mắc đơn hàng <strong>0123456789</strong>
            </p>
            <p>
              Góp ý, khiếu nại <strong>0123456789</strong>
            </p>
          </div>
        </div>
        <div className="footer__profile">
          <div className="footer__tittle">NghiaX</div>
          <div className="footer__content">
            {footerLink.map((item, index) => (
              <p key={index}>
                <Link to={item.path}>{item.display}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__about">
        <div className="footer__tittle2">
          <Link to="/">
            <img src={logo1} alt="" className="footer__logo" />
          </Link>
        </div>
        <div className="footer__content">
          <p>
            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới <br /> mỗi ngày cho
            hàng triệu người yêu thích thời trang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
