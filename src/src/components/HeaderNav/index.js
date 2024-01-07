import "./header.scss";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import LogoAct from "../../assets/images/logo_ACT.png";

const HeaderNav = () => {
    const localtion = useLocation()
  const items = [
    {
      key: "/",
      label: <Link to={"/home"}>Trang chủ</Link>,
    },
    {
      key: "/about",
      label: <Link to={"/about"}>Giới thiệu </Link>,
    },
    {
      key: "/services",
      label: <Link to={"/Services"}>Dịch vụ</Link>,
    },
    {
      key: "/project",
      label: <Link to={"/project"}>dự án</Link>,
      children: [
        {
          key: "/project/completed",
          label: <Link to={"/completed"}>Bài viết</Link>,
        },
        {
          key: "/project/UnderConstruction",
          label: <Link to={"/UnderConstruction"}>hoàn thành</Link>,
        },
      ],
    },
    {
      key: "/newsletter",
      label: <Link to={"/newsletter"}>Bài viết</Link>,
      children: [
        {
          key: "/newsletter/news-event",
          label: <Link to={"/news-event"}>tin tức - sự kiện</Link>,
        },
        {
          key: "/newsletter/recruitment",
          label: <Link to={"/recruitment"}>tuyển dụng</Link>,
        },
      ],
    },
    {
      key: "/contact",
      label: <Link to={"/contact"}>Liên hệ</Link>,
    },
  ];
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__lists">
            <a href="/" className="header__image">
              <img src={LogoAct} alt="LogoAct" />
            </a>
            <Menu
              mode="horizontal"
              className="header__nav"
              items={items}
              selectedKeys={[localtion.pathname]}
            />
            <div className="header__bar">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderNav;
