import React from "react";
import Chart from "../../components/chart";
import FeaturedInfo from "../../components/featuredInfo";
import Navbar from "../../components/Navbar";
import WidgetLg from "../../components/widgetLg";
import WidgetSm from "../../components/widgetSm";
import { userData } from "../../dummyData";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
};

export default Home;
