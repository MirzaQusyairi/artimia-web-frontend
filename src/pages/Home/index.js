import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import amons from "../../assets/icon/amons.svg";
import "./index.css";
import LiveMonitoring from "../../components/LiveMonitoring";
import mqtt from "mqtt";

export default function Home() {
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
