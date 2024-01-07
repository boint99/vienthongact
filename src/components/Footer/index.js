import "./footer.scss";
import { Button, Col, Form, Input, Row } from "antd";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import logoAct from "../../assets/images/logo_ACT.png";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { SendOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <Row style={{alignItems: "center"}}>
            <Col xl={4} lg={4} md={12} sm={24} xs={24}>
              <div className="footer__head icon-logo">
                <img src={logoAct} alt="logoAct" />
              </div>
            </Col>
            <Col xl={14} lg={14} md={12} sm={24} xs={24}>
              <div className="footer__head">
                <p>
                  "Dù việc lớn hay nhỏ đều phải làm cho thật chuyên nghiệp và
                  chất lượng."
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <div className="footer__head icon">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </Col>
          </Row>
          <hr style={{ color: "#fff" }} />
          <Row gutter={[20, 20]}>
            <Col xl={9} lg={9} md={12} sm={24} xs={24}>
              <div className="footer__item">
                <div className="title">Liên Lạc</div>
                <div className="contact">
                  <FaEnvelope />
                  <span>info@vienthongact.vn</span>
                </div>
                <div className="phone">
                  <FaPhone />
                  <span>(028) 62924609</span>
                </div>
                <div className="address">
                  <FaLocationDot />
                  <span>
                    Số 2R-2R1 Bình Giã, Phường 13, Quận Tân Bình, Tp.HCM
                  </span>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={12} sm={24} xs={24}>
              <div className="footer__item">
                <div className="title">Các Trang</div>
                <div>Trang chủ</div>
                <div>Giới thiệu</div>
                <div>Dịch vụ</div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} sm={24} xs={24}>
              <div className="footer__item">
                <div className="title">Đáng Quan Tâm</div>
                <div>Nhà thông minh</div>
                <div>Các dịch vụ</div>
                <div>Liên hệ</div>
              </div>
            </Col>
            <Col xl={7} lg={7} md={12} sm={24} xs={24}>
              <div className="footer__item">
                <div className="title">Để Lại Thông Tin</div>
                <Form className="form-control">
                  <Form.Item
                    name="email"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input placeholder="Please input your email" />
                  </Form.Item>
                  <Form.Item name="email">
                    <Button type="primary submit">
                      <SendOutlined />
                    </Button>
                  </Form.Item>
                </Form>

                <div>
                  Gửi Email cho chúng tôi để chúng tôi liên hệ hổ trợ bạn sớm
                  nhất, hãy kiểm tra hộp thư của bạn thường xuyên nhé.
                </div>
              </div>
            </Col>
          </Row>
          <hr style={{ color: "#fff" }} />
          <div className="footer__under">© 2024 ACT All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
