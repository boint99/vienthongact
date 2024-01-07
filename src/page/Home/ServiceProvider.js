import { Col, Row } from "antd";
import iconCNTT from '../../assets/images/cung_cap_san_pham_giai_phap_cntt.jpg';
import iconTHS from '../../assets/images/cung_cap_truyen_hinh_so.jpg';
import iconTelecommunication from '../../assets/images/dau_tu_ha_tang_vien_thong.jpg';
import iconOpticalFiberT from '../../assets/images/vien_thong_cap_quang.jpg';
import iconStationManagement from '../../assets/images/ql_vhkt_ha_tang_vien_thong.jpg';
import iconTelecommunicationProjects from '../../assets/images/thi_cong_cong_trinh_vien_thong.jpg';

const ServiceProvider = () => {
  const ServiceProviderItems = [
    {
      key: 1,
      icon: <img src={iconCNTT}  alt="iconCNTT"/>,
      title: "Cung cấp sản phẩm, giải pháp CNTT",
      content:
        "Cung cấp sản phẩm & giải pháp CNTT. Giải pháp nhà thông minh rạng đông. Kiến tạo cuộc sống, hoà hợp với thiên nhiên, thông minh hạnh phúc …",
    },
    {
      key: 2,
      icon: <img src={iconTHS}  alt="iconCNTT"/>,
      title: "Cung cấp truyền hình số",
      content:
        "Cung cấp dịch vụ viễn thông cho các khách hàng trong dự án và cho các doanh nghiệp Việt Nam.",
    },
    {
        key: 3,
        icon: <img src={iconTelecommunication}  alt="iconCNTT"/>,
        title: "Cung cấp truyền hình số",
        content:
          "Công ty Cổ phần Viễn thông ACT đang là đối tác hợp tác đầu tư, cung cấp dịch vụ của các đơn vị như: Tập đoàn Công nghiệp Viễn thông Quân đội Viettel,…",
      },
      {
        key: 4,
        icon: <img src={iconOpticalFiberT}  alt="iconCNTT"/>,
        title: "Hạ tầng viễn thông cáp quang",
        content:
          "Cung cấp dịch vụ viễn thông cho các khách hàng trong dự án và cho các doanh nghiệp Việt Nam.",
      },
      {
        key: 5,
        icon: <img src={iconStationManagement}  alt="iconCNTT"/>,
        title: "Quản lý, vận hành khai thác hạ tầng viễn thông",
        content:
          "Trực tiếp Vận hành, khai thác các hệ thống CNTT đảm bảo hệ thống hoạt động ổn định phục vụ sự phát triển CNTT & Viễn thông.",
      },
      {
        key: 6,
        icon: <img src={iconTelecommunicationProjects}  alt="iconCNTT"/>,
        title: "Thi công công trình viễn thông",
        content:
          "Khảo sát, thi công kéo ngầm mạng cáp đồng và cáp quang theo yêu cầu khách hàng. Bảo trì, bảo dưỡng hạ tầng viễn thông (các tuyến cáp, hầm cống, tủ cáp,…)",
      },
  ];
  return (
    <>
      <section className="service-provider" style={{ marginTop: "80px" }}>
        <div className="container">
            <div className="service-provider__head">
                <p>DỊCH VỤ</p>
                <h2>Chúng tôi cung cấp những <br/>
<span>Dịch vụ tốt nhất</span></h2>
            </div>
          <Row gutter={[20,20]}>
            {ServiceProviderItems && (
              <>
                {ServiceProviderItems.map((item) => (
                  <Col xl={8} lg={8} md={12} sm={12} xs={24}key={item.key}>
                    <div className="service-provider__item" >
                        {item.icon}
                      <div className="title">{item.title}</div>
                      <p className="content">{item.content}</p>
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
export default ServiceProvider;
