import "../../assets/scss/base.scss"
// import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";

const LayoutMain = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
};
export default LayoutMain;
