import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Routers from "../router/Routes";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="containerMain">
          <div className="main">
            <Routers />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
