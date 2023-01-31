import { Button, Card, Col, Row, Table } from "antd";
import React from "react";
import Navbar from "../../components/Navbar";

export default function Detail() {
  const columns = [
    {
      title: "Tanggal Record",
      dataIndex: "tanggal_record",
      key: "tanggal_record",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Button>Detail</Button>,
    },
  ];
  const data = [
    {
      key: "1",
      tanggal_record: "2001-08-23",
    },
    {
      key: "2",
      tanggal_record: "2001-08-23",
    },
    {
      key: "3",
      tanggal_record: "2001-08-23",
    },
  ];
  return (
    <>
      <Navbar />
      <Row justify="center" align="middle" style={{ marginTop: 50 }}>
        <Col span={8}>
          <Card
            title="Profil Pasien"
            style={{
              width: 400,
            }}
          >
            <p>Nama : jnkawjdnkaw</p>
            <p>Jenis Kelamin : Laki-Laki</p>
            <p>Umur : 34</p>
            <p>Tanggal Lahir : 05-08-2001</p>
            <p>Kondisi Kesehatan : Sehat Bet</p>
          </Card>
        </Col>
        <Col span={16}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </>
  );
}
