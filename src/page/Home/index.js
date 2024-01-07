import "../../assets/scss/style.scss";
import "../../assets/scss/base.scss";
import Banner from "./Banner";
import History from "./History";
import Info from "./Info";
import ServiceProvider from "./ServiceProvider";
import PartnersCustomers from "./PartnersCustomers";
import TypicalProjects from "./TypicalProjects";
import NewsEvents from "../../components/NewsEvents.js";

const Home = () => {
  return (
    <>
      <Banner />
      <History />
      <Info />
      <ServiceProvider />
      <PartnersCustomers />
      <TypicalProjects />
      <NewsEvents />
    </>
  );
};
export default Home;
