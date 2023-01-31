import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
} from "antd";
import axios from "axios";
import moment from "moment";
import React from "react";

export default function FormInputDataPasien(props) {
  const { isOpen, onCancel, fetch } = props;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  function onOK() {
    form.validateFields().then((values) => {
      form.resetFields();

      axios
        .post(`${process.env.REACT_APP_BASE_URL}/api/patient`, {
          nama: values.nama,
          jenis_kelamin: values.jenisKelamin,
          umur: values.umur,
          tanggal_lahir: moment(values.tanggalLahir).format("YYYY-MM-DD"),
          kondisi_kesehatan: values.kondisiKesehatan,
        })
        .then((response) => {
          console.log(response);
          messageApi.open({
            type: "success",
            content: "Data berhasil tersimpan",
          });
          setTimeout(() => {
            onCancel();
            fetch();
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          messageApi.open({
            type: "error",
            content: "Data gagal tersimpan",
          });
          setTimeout(() => {
            onCancel();
          }, 1000);
        });
    });
  }

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={onCancel}
        title="Input Data Pasien"
        okText="Simpan"
        cancelText="Batal"
        onOk={onOK}
      >
        <Row>
          <Col span={24}>
            <Form form={form} name="form_input_data_pasien" layout="vertical">
              <Form.Item
                label="Nama"
                name="nama"
                rules={[
                  {
                    required: true,
                    message: "Nama masih kosong!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Jenis Kelamin"
                name="jenisKelamin"
                rules={[
                  {
                    required: true,
                    message: "Jenis Kelamin masih kosong!",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="LAKI-LAKI">Laki-Laki</Select.Option>
                  <Select.Option value="PEREMPUAN">Perempuan</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Umur"
                name="umur"
                rules={[
                  {
                    required: true,
                    message: "Umur masih kosong!",
                  },
                ]}
              >
                <InputNumber min={1} />
              </Form.Item>
              <Form.Item
                label="Tanggal Lahir"
                name="tanggalLahir"
                rules={[
                  {
                    required: true,
                    message: "Tanggal Lahir masih kosong!",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label="Kondisi Kesehatan"
                name="kondisiKesehatan"
                rules={[
                  {
                    required: true,
                    message: "Kondisi Kesehatan masih kosong!",
                    type: "string",
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
