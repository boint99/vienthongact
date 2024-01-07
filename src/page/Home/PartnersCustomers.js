import { Col, Row } from "antd";
import FptLogo from "../../assets/images/FPT_Logo.png";
import VtLogo from "../../assets/images/Viettel_Logo.png";
import DienPhucThanhLogo from "../../assets/images/DienPhucThanh_Logo.png";
import HungLocPhatLogo from "../../assets/images/HungLocPhat_Logo.png";
import MobifoneLogo from "../../assets/images/Mobifone_Logo.png";
import NamLongLogo from "../../assets/images/NamLong_Logo.png";
import PicityHighParkLogo from "../../assets/images/PicityHighPark_Logo.png";
import CharmCityLogo from "../../assets/images/Charm_City_Logo.png";
import XuanMaiCorpLogo from "../../assets/images/XuanMaiCorp_Logo.png";
import CMCTelecomLogo from "../../assets/images/CMC_Telecom_Logo.png";
const PartnersCustomers = () => {
  const itemimagesmalls = [
    {
      key: 1,
      imageSmall: <img src={FptLogo} alt="FptLogo" />,
    },
    {
      key: 2,
      imageSmall: <img src={VtLogo} alt="VtLogo" />,
    },
    {
      key: 3,
      imageSmall: <img src={DienPhucThanhLogo} alt="DienPhucThanhLogo" />,
    },
    {
      key: 4,
      imageSmall: <img src={HungLocPhatLogo} alt="VtHungLocPhatLogoLogo" />,
    },
    {
      key: 5,
      imageSmall: <img src={MobifoneLogo} alt="MobifoneLogo" />,
    },
    {
      key: 6,
      imageSmall: <img src={PicityHighParkLogo} alt="PicityHighParkLogo" />,
    },
    {
      key: 7,
      imageSmall: <img src={NamLongLogo} alt="NamLongLogo" />,
    },
    {
      key: 8,
      imageSmall: <img src={CharmCityLogo} alt="CharmCityLogo" />,
    },
    {
      key: 9,
      imageSmall: <img src={XuanMaiCorpLogo} alt="XuanMaiCorpLogo" />,
    },
    {
      key: 10,
      imageSmall: <img src={CMCTelecomLogo} alt="CMCTelecomLogo" />,
    },
  ];

  return (
    <>
      <section className="partners-customers" style={{ marginTop: "80px" }}>
        <div className="container">
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="partners-customers__head">
                <h3>Đối tác & Khách hàng</h3>
                <p>
                  Trên những chặng đường phát triển của ACT, mỗi đối tác và
                  khách hàng đều là một hành trang quý giá. ACT rất vinh hạnh
                  khi được nhiều đối tác chọn lựa và hài lòng khi trao gửi niềm
                  tin.
                </p>
              </div>
            </Col>
          </Row>
          <Row wrap={false}  style={{overflow: "hidden"}}>
            {itemimagesmalls && (
              <>
                {itemimagesmalls.map((item) => (
                  <Col xl={4} lg={4} md={6} sm= {8}  xs={12} key={item.key}>
                    {/* <Flex> */}
                      <div className="partners-customers__list-icon">
                        {item.imageSmall}
                      </div>
                    {/* </Flex> */}
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
export default PartnersCustomers;
