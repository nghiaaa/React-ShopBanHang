import React from "react";
import { Row, Col, Container } from "reactstrap";
import serviceData from "./serviceData";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className=" services">
      <Container>
        <Row className="services__row">
          {serviceData.map((item, index) => (
            <Col key={index} className="col2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="services__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p> {item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
