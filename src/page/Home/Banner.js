import { Button, Col, Row } from "antd";

import bg1 from "../../assets/images/home_bg_1.jpg";
import bg2 from "../../assets/images/home_bg_2.jpg";
import bg3 from "../../assets/images/home_bg_3.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Banner = () => {
  return (
    <>
      <section className="home-bg" style={{ marginTop: "80px" }}>
        <Row className="home-bg__row">
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="home-bg__item">
              <img src={bg1} alt="bg1" />
              <div className="container">
                <div className="home-bg__item--content">
                  <h2>Viễn thông ACT</h2>
                  <p>
                    Đối tác chính của Tập đoàn Công nghiệp Viettel, là đơn vị
                    chuyên triển khai cung cấp dịch vụ xây lắp, vận hành khai
                    thác hạ tầng viễn thông, triển khai các giải pháp tích hợp
                    viễn thông.
                  </p>
                  <Button className="home-bg__item--button" type="primary">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="home-bg__item">
              <img src={bg2} alt="bg2" />
              <div className="container">
                <div className="home-bg__item--content">
                  <h2>Nhân viên Kỹ thuật nhà trạm</h2>
                  <p>
                    Vận hành khai thác, ƯCTT, xử lý sự cố trên địa bàn quản lý
                    đảm bảo chất lượng lưới, chỉ tiêu KPI phục vụ kinh doanh
                    trên địa bàn. Kiểm tra chất lượng mạng và xử lý phản ánh
                    khách hàng trên địa bàn…
                  </p>
                  <Button className="home-bg__item--button" type="primary">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="home-bg__item">
              <img src={bg3} alt="bg3" />
              <div className="container">
                <div className="home-bg__item--content">
                  <h2>Nhân viên Kỹ thuật cố định băng rộng</h2>
                  <p>
                    Triển khai cung cấp dịch vụ và khắc phục sự cố cho khách
                    hàng sử dụng dịch vụ Internet, Truyền hình số và các dịch vụ
                    cố định băng rộng của Viettel…
                  </p>
                  <Button className="home-bg__item--button" type="dashed">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="home-bg__prev-next-button">
          <Button className="previous" shape="circle">
            <RightOutlined />
          </Button>
          <Button className="next" shape="circle">
            <LeftOutlined />
          </Button>
        </div>
      </section>
    </>
  );
};
export default Banner;
