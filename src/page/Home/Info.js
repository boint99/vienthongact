import { Col, Row } from "antd";
import homeInfo1 from "../../assets/images/home-info-1.svg";
import homeInfo2 from "../../assets/images/home-info-2.svg";
import homeInfo3 from "../../assets/images/home-info-3.svg";
import homeInfoLogo1 from "../../assets/images/hone-logo-x.png";
import homeInfoLogo2 from "../../assets/images/hone-info-small-act.png";

const Info = () => {
  return (
    <>
      <section className="home-info" style={{ marginTop: "80px" }}>
        <Row>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="home-info__warp">
            <div className="bg-opacity"></div>
              <div className="home-info__logo">
                <div className="logo-y">
                  <img src={homeInfoLogo1} alt="homeInfoLogoy" />
                </div>
                <div className="logo-x">
                  <img src={homeInfoLogo2} alt="homeInfoLogo2" />
                </div>
              </div>
              <div className="home-info__lists">
                <div className="home-info__lists--item item-1">
                  <div className="home-info__lists--icon">
                    <img src={homeInfo3} alt="homeInfo3" />
                  </div>
                  <div className="home-info__lists--content content-1">
                    <h4>giá trị cốt lõi</h4>
                    <p>
                      Gắn liền với chữ viết tắt tên gọi ACT, gồm 3 giá trị:
                      AMOUT (Chân giá trị) – COOPERATION (Sự hợp tác) – TRUTH
                      (Sự trung thực)
                    </p>
                  </div>
                </div>
                <div className="home-info__lists--item item-2">
                  <div className="home-info__lists--content content-2">
                    <h4>sứ mệnh</h4>
                    <p>
                    Tối ưu giá thành và nâng cao chất lượng hạ tầng mạng lưới cho nhà mạng và cung cấp tốt nhất cho khách hàng cuối cùng là người sử dụng dịch vụ
                    </p>
                  </div>
                  <div className="home-info__lists--icon">
                    <img src={homeInfo2} alt="homeInfo2" />
                  </div>
                </div>
                <div className="home-info__lists--item item-3">
                  <div className="home-info__lists--content content-3">
                    <h4>Tầm nhìn</h4>
                    <p>
                    Cung cấp dịch vụ kỹ thuật vận hành khai thác hạ tầng mạng lưới và quản lý khách hàng viễn thông, đầu tư và hợp tác cung cấp dịch vụ viễn thông, giải pháp CNTT hàng đầu Việt Nam.
                    </p>
                  </div>
                  <div className="home-info__lists--icon">
                    <img src={homeInfo1} alt="homeInfo1" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Info;