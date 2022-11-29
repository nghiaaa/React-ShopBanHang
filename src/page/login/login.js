import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "../login/style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/inputForm/inputForm";
import imageLogo from "../../assets/images/logo-login.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const HandleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div
      className="backgroundImg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: " #f3f3f3",
        height: "100vh",
      }}
    >
      <div
        className="loginForm"
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px", width: "100%" }}
            placeholder="abc@gmail.com"
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "17px",
                right: "8px",
              }}
              onClick={() => HandleShowPassword()}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "97%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p>
          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight> Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <div className="imgLogo">
          <img src={imageLogo} alt=""></img>
        </div>
        {/* <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="203px"
            width="203px"
          />
          <h4 style={{ margiTop: 10 }}>Mua sắm tại Nghia</h4>
        </WrapperContainerRight> */}
      </div>
    </div>
  );
};

export default Login;
