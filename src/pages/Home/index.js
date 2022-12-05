import React from "react";
import { Col, Row } from "antd";
import amons from "../../assets/icon/amons.svg";
import "./index.css";
import LiveMonitoring from "../../components/LiveMonitoring";

export default function Home() {
  // const chartReference = useRef();

  // const [data, setData] = useState({
  //   labels: [],
  //   datasets: [
  //     {
  //       // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       data: [],
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // });

  // setInterval(() => {
  //   const chart = chartReference.current;

  //   chart.data.datasets[0].data.push(Math.random() * (3 - -3) + -3);
  //   chart.data.labels.push(chart.data.labels.length + 1);
  //   // setInterval(() => {

  //   // }, 2000);
  //   chart.update();
  // }, 100);

  // setInterval(() => {
  //   const chart = chartReference.current;

  //   chart.data.datasets[0].data.shift();
  //   chart.data.labels.shift();

  //   chart.update();
  // }, 150);

  // const options = {
  //   responsive: true,
  //   elements: {
  //     line: {
  //       tension: 0.1,
  //     },
  //     point: {
  //       radius: 0,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     title: {
  //       display: false,
  //     },
  //   },
  // };

  return (
    <Row className="container">
      <Col span={24}>
        <Row justify="space-between">
          <Col span={12}>
            <img src={amons} alt="" />
          </Col>
          <Col span={12}>
            <Row justify="end">
              <Col>
                <div className="name">Mar'i Fauzan Rambe</div>
              </Col>
            </Row>
            <Row justify="end">
              <Col>
                <div className="age">21 Tahun</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="content">
          <Col span={19}>
            <Row justify="center">
              {/* <Line
                options={options}
                ref={chartReference}
                data={data}
                height={150}
              /> */}
              <LiveMonitoring />
            </Row>
          </Col>
          <Col span={5} className="table-status">
            <Row justify="center">Status</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
