import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import amons from "../../assets/icon/amons.svg";
import "./index.css";
import LiveMonitoring from "../../components/LiveMonitoring";
// import { dataStatus } from "../../data/ECGStatus";

export default function Home() {
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (true) {
      setStatus("normal");
    }
  }, []);

  return (
    <Row className="container">
      <Col span={24}>
        <Row justify="space-between">
          <Col xs={24} xl={12}>
            <img src={amons} alt="" />
          </Col>
          <Col xs={24} xl={12}>
            <Row justify="end">
              <Col>
                <div className="name">Dhio Fauzan</div>
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
          <Col xs={24} xl={19}>
            <Row justify="center">
              <LiveMonitoring />
            </Row>
          </Col>
          <Col xs={24} xl={5} className="table-status">
            <Row justify="center" style={{ position: "sticky" }}>
              <h3>Status</h3>
            </Row>
            <Row>
              <Col span={24}>
                {status === "normal" ? (
                  <div className="status" style={{ color: "green" }}>
                    {status}
                  </div>
                ) : (
                  <div className="status" style={{ color: "red" }}>
                    {status}
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
