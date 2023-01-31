import { Button, Col, Row, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormInputDataPasien from "../../components/FormInputDataPasien";
import FormUploadDataCSV from "../../components/FormUploadDataCSV";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [dataPasien, setDataPasien] = useState(null);
  const [isOpenModalInputDataPasien, setIsOpenModalInputDataPasien] =
    useState(false);
  const [isOpenModalUpload, setIsOpenModalUpload] = useState(false);
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
          <Button>
            <Link to={`/detail/${record.id}`}>Detail</Link>
          </Button>
          <Button
            onClick={() => {
              setDataPasien(record);
              setIsOpenModalUpload(true);
            }}
          >
            Upload CSV
          </Button>
          <Button>
            <Link to={`/live-monitoring/${record.id}`}>
              Realtime Monitoring
            </Link>
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/patient`)
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

      <FormUploadDataCSV
        isOpen={isOpenModalUpload}
        onCancel={() => {
          setDataPasien(null);
          setIsOpenModalUpload(false);
        }}
        data={dataPasien ? dataPasien : null}
        fetch={() => setRefreshKey((oldKey) => oldKey + 1)}
      />
    </>
  );
}
