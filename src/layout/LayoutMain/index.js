import "../layout.scss";
import { Layout } from "antd";
import MenuHeader from "../../components/MenuHeader";
import { Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <>
      <Layout className="layout">
        <Header className="layout__header">
          <MenuHeader />
        </Header>
        <Layout>
          <Outlet />
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};
export default LayoutMain;
