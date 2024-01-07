import { Col, Row } from "antd";
import SilverStar from "../../assets/images/Silver_Star_01.jpg";
import Encogreen from "../../assets/images/Eco_Green_01.jpg";
import Greenriver from "../../assets/images/Green_River_01.jpg";
import MizukiPart from "../../assets/images/Mizuky_01.jpg";
const TypicalProjects = () => {
  const listTypicalProjects = [
    {
      key: 1,
      imge: <img src={SilverStar} alt="SilverStar" />,
      tilte: "HƯNG PHÁT SILVER STAR",
      content:
        "* HƯNG PHÁT SILVER STAR - Công trình BĐS của Hưng Lộc Phát* ACT - [...]",
      status: "completed",
    },
    {
      key: 2,
      imge: <img src={Encogreen} alt="SilverStar" />,
      tilte: "ECOGREEN",
      content:
        "* ECOGREEN - Công trình BĐS của Công ty Đầu tư xây dựng Xuân Mai * [...]",
      status: "working",
    },
    {
      key: 3,
      imge: <img src={Greenriver} alt="SilverStar" />,
      tilte: "GREEN RIVER",
      content:
        "* GREEN RIVER: Công trình BĐS của Công ty TNHH 276 Ngọc Long * ACT - [...]",
      status: "completed",
    },
    {
      key: 4,
      imge: <img src={MizukiPart} alt="SilverStar" />,
      tilte: "Dự án MIZUKI PARK",
      content:
        "** MIZUKI PARK - Công trình BĐS của Công ty CP Đầu Tư Nam Long * [...]",
      status: "completed",
    },
  ];

  return (
    <>
      <section className="typical-projects" style={{ marginTop: "80px" }}>
        <div className="container">
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="typical-projects__head">
                <p>DỰ ÁN</p>
                <h3> Những dự án tiêu biểu</h3>
              </div>
            </Col>
          </Row>
          <Row gutter={[40, 40]}>
            {listTypicalProjects && (
              <>
                {listTypicalProjects.map((item) => (
                  <Col xl={8} lg={8} md={12} sm={12} xs={24} key={item.tilte}>
                    <div className="typical-projects__item">
                      <div className="typical-projects__item--effect">
                        {item.imge}
                      </div>
                      {item.status === "completed" ? <span>Dự án hoàng thành</span> : <span>dang thi công</span>}
                      <div className="typical-projects__item--title">
                        {item.tilte}
                      </div>
                      <p className="typical-projects__item--content">
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
export default TypicalProjects;
