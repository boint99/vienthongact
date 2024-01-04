import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Layout} from "antd";
import '../layout.scss';

const LayoutMain = () => {
  const { Content, Header } = Layout;
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Content>main content</Content>
          <Outlet />
        </Layout>
        <Footer />
      </Layout>
    </>
  );
}
export default LayoutMain;
