import { Button, Col, Row, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FormInputDataPasien from "../../components/FormInputDataPasien";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isOpenModalInputDataPasien, setIsOpenModalInputDataPasien] =
    useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenis_kelamin",
      key: "jenis_kelamin",
    },
    {
      title: "Umur",
      dataIndex: "umur",
      key: "umur",
    },
    {
      title: "Tanggal Lahir",
      dataIndex: "tanggal_lahir",
      key: "tanggal_lahir",
    },
    {
      title: "Kondisi Kesehatan",
      dataIndex: "kondisi_kesehatan",
      key: "kondisi_kesehatan",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>Detail</Button>
          <Button>Upload CSV</Button>
          <Button>Realtime Monitoring</Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/patient`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  }, [refreshKey]);

  return (
    <>
      <Navbar />
      <Row justify="center" align="middle" style={{ marginTop: 50 }}>
        <Col span={16}>
          <Button
            onClick={() => setIsOpenModalInputDataPasien(true)}
            type="primary"
            style={{ marginBottom: 16 }}
          >
            Data Pasien +
          </Button>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>

      <FormInputDataPasien
        isOpen={isOpenModalInputDataPasien}
        onCancel={() => setIsOpenModalInputDataPasien(false)}
        fetch={() => setRefreshKey((oldKey) => oldKey + 1)}
      />
    </>
  );
}
