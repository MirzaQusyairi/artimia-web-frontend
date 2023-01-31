import { InboxOutlined } from "@mui/icons-material";
import {
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Upload,
} from "antd";
import axios from "axios";
import moment from "moment";
import React from "react";

export default function FormUploadDataCSV(props) {
  const { isOpen, onCancel, data, fetch } = props;
  console.log(data);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  function onOK() {
    form.validateFields().then((values) => {
      form.resetFields();

      console.log({
        record_id_owner: data.id,
        record_owner: data.nama,
        record_date: moment(values.tanggalRecord).format("YYYY-MM-DD"),
        file: values.files[0].originFileObj,
      });

      const formUploadRecord = new FormData();
      formUploadRecord.append("record_id_owner", data.id);
      formUploadRecord.append("record_owner", values.nama);
      formUploadRecord.append(
        "record_date",
        moment(values.tanggalRecord).format("YYYY-MM-DD")
      );
      formUploadRecord.append("file", values.files[0].originFileObj);

      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/api/upload_record`,
          formUploadRecord,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
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
      {data && (
        <Modal
          open={isOpen}
          onCancel={onCancel}
          title="Upload Data CSV"
          okText="Simpan"
          cancelText="Batal"
          onOk={onOK}
        >
          <Row>
            <Col span={24}>
              <Form form={form} name="form_upload_data_CSV" layout="vertical">
                <Form.Item label="Nama" name="nama">
                  <Input defaultValue={data.nama} disabled />
                </Form.Item>
                <Form.Item
                  label="Tanggal Record"
                  name="tanggalRecord"
                  rules={[
                    {
                      required: true,
                      message: "Tanggal Record masih kosong!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Record">
                  <Form.Item
                    name="files"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    noStyle
                  >
                    <Upload.Dragger name="files">
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                      </p>
                    </Upload.Dragger>
                  </Form.Item>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
      )}
    </>
  );
}
