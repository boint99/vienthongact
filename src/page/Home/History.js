import { Button, Col, Row } from "antd";
import homeImage1 from "../../assets/images/home_2-1.png";
import homeImage2 from "../../assets/images/home_2-2.jpg";
const History = () => {
  return (
    <>
      <section className="history">
        <div className="container">
        <Row>
          <Col xl={12}>
            <div className="history__photo">
              <img src={homeImage1} alt="homeImage1" />
              <img src={homeImage2} alt="homeImage2" />
            </div>
          </Col>
          <Col xl={12}>
            <div className="history__content">
              <div>
                TỪ NĂM <span>2011</span>
              </div>
              <h2>Chúng tôi có 20+ năm kinh nghiệm</h2>
              <p>
                Công ty Cổ phần Viễn thông ACT thành lập ngày 21 tháng 11 năm
                2011; Hoạt động trên phạm vi toàn quốc, với các lĩnh vực kinh
                doanh thuộc ngành viễn thông như: Thiết kế hạ tầng viễn thông;
                Cho thuê hạ tầng viễn thông cáp quang; Thi công công trình viễn
                thông; Dịch vụ quản lý vận hành hạ tầng viễn thông; Cung cấp
                thiết bị truyền hình số; Cung cấp hàng hóa, thiết bị viễn thông;
                Cung cấp sản phẩm và giải pháp CNTT…
              </p>
              <p>
                Với phương châm đặt chất lượng dịch vụ lên hàng đầu, cùng với sự
                tận tâm và trách nhiệm, chúng tôi hoàn toàn tin tưởng sẽ đáp ứng
                được sự kỳ vọng của Quý Khách hàng một cách tốt nhất.
              </p>
            </div>
            <Button className="history__btn btn-primary">Về Chúng Tôi</Button>
          </Col>
        </Row>
        </div>
      </section>
    </>
  );
};
export default History;
