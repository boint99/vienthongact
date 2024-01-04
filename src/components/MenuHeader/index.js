import { Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import LogoAct from "../../assets/images/logo_ACT.png";

const items = [
  {
    Key: "/",
    label: "Trang chủ",
  },
  {
    Key: "/about",
    label: "Giới thiệu",
  },
  {
    Key: "/services",
    label: "Dịch vụ",
  },
  {
    Key: "/project",
    label: "Dự án",
  },
  {
    Key: "/newsletter",
    label: "Bài viết",
  },
  {
    Key: "/contact",
    label: "Liên hệ",
  },
  {
    Key: "icon",
    icon: <SearchOutlined />,
  },
];
const MenuHeader = () => {
  return (
    <>
      <div className="layout__menu">
        <div className="layout__menu--logo">
          <img src={LogoAct} alt="LogoAct" />
        </div>
        <Menu className="layout__nav" mode="vertical" items={items} defaultSelectedKeys = {["home"]}/>
      </div>
    </>
  );
};
export default MenuHeader;
