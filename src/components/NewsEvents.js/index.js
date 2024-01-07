import { Col, Row } from "antd";
import StaffCompetition from "../../assets/images/phat-dong-thi-dua-can-bo-nhan-vien-act-1.jpg";
import travelImage from "../../assets/images/du_lich_nghi_mat_name_2023_1.png";
import Reporting from "../../assets/images/phong_su_nguoi_linh_tro_ve.png";
import "./newsevents.scss";
const NewsEvents = () => {
  const NewsEventsItem = [
    {
      tilte: "Phát Động Thi Đua “5 Nhất, 1 Mục tiêu” 6 Tháng Cuối Năm 2023",
      image: <img src={StaffCompetition} alt={StaffCompetition} />,
      content:
        "Sáng nay, ngày 23/8/2023, tại Công ty Cổ phần Viễn thông ACT đã diễn ra [...]",
    },
    {
      tilte: "Du Lịch Nghỉ Mát Năm 2023",
      image: <img src={travelImage} alt={travelImage} />,
      content:
        "Hiện nay, sự cân bằng giữa cuộc sống công việc và cá nhân đã trở [...]",
    },
    {
      tilte: "Phóng sự Người lính trở về: “Lính cựu Viettel”",
      image: <img src={Reporting} alt={Reporting} />,
      content:
        "Cựu chiến binh Trần Ngọc Thiều quê ở Ninh Bình, nhập ngũ tháng 10. 1974 [...]",
    },
  ];

  return (
    <>
      <section className="news-events" style={{ marginTop: "80px" }}>
        <div className="container">
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="news-events__head">
                <p>TIN TỨC SỰ KIỆN</p>
                <h3>Tin tức – sự kiện tại</h3>
                <span>ACT</span>
              </div>
            </Col>
          </Row>
          <Row gutter={[40, 40]}>
            {NewsEventsItem && (
              <>
                {NewsEventsItem.map((item) => (
                  <Col xl={8} lg={8} md={12} sm={12} xs={24} key={item.tilte}>
                    <div className="news-events__item">
                      <div className="news-events__item--effect">
                        {item.image}
                      </div>
                      <div className="news-events__item--title">
                        {item.tilte}
                      </div>
                      <p className="news-events__item--content">
                        {item.content}
                      </p>
                    </div>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </div>
      </section>
    </>
  );
};
export default NewsEvents;
