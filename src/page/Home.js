import { Row, Col, Container } from "reactstrap";
import Banner from "../components/banner";
import Helmet from "../components/Helmet";
import Services from "../components/Services";
import Section, { SectionTitle } from "../components/Section";
import ProductList from "../components/ProductList";
import Products from "../assets/fake-data/products";
import { useState, useEffect } from "react";
import banner1111 from "../assets/images/banner1111.png";
import SliderComponent from "../components/Slider/SliderComponent";

const Home = () => {
  const [BestSellProduct, setBestSellProduct] = useState([]);
  const [BestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    const filterBestSellProducts = Products.filter(
      (item) => item.categorySlug === "ao-thun"
    );

    const filterBestProducts = Products.filter(
      (item) => item.categorySlug === "ao-somi"
    );
    setBestSellProduct(filterBestSellProducts);
    setBestProduct(filterBestProducts);
  }, []);

  return (
    <div>
      <Helmet title={"Trang chủ"}>
        <Banner />
        <>
          <Services />
        </>
        <Section>
          <SectionTitle>Sản phẩm bán chạy nhất</SectionTitle>
        </Section>
        <>
          <Container>
            <Row className="trending__product">
              <Col>
                <ProductList data={BestSellProduct} />
              </Col>
            </Row>
          </Container>
        </>
        <div className=" banner-1111">
          <img src={banner1111} alt="" />
        </div>
        <Section>
          <SectionTitle>Sản phẩm Mới</SectionTitle>
        </Section>
        <>
          <Container>
            <Row className="New__product">
              <Col>
                <ProductList data={BestProduct} />
              </Col>
            </Row>
          </Container>
        </>
        <SliderComponent />
      </Helmet>
    </div>
  );
};

export default Home;
