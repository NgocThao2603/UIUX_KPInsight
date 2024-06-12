import "./index.css";

import React, { useState, useMemo, useRef } from "react";
import { CloseOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  Space,
  Typography,
  Radio,
  Modal,
  Tour,
  Popconfirm,
  message,
} from "antd";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;
function DefineTarget() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    message.error("Hủy!");
  };
  const cancelPop = (e) => {
    console.log(e);
    message.error("Hủy xóa mục tiêu!");
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Xác định mục tiêu",
      description:
        "Xác định mục tiêu được phân cấp ra các lĩnh vực (Học tập, Cá nhân, CLB, ...). Các lĩnh vực bao gồm các nhãn (ví dụ Học tập chứa các nhãn IT, Ngoại ngữ, ...). Trong các nhãn chứa các mục tiêu chi tiết. Việc phân chia các lĩnh vực, nhãn đều do bạn tự thiết lập",
      target: () => ref1.current,
    },
    {
      title: "Thêm mục tiêu trong nhãn",
      // description: "Put your files here.",
      target: () => ref2.current,
    },
    {
      title: "Xóa mục tiêu trong nhãn",
      // description: "Save your changes.",
      target: () => ref3.current,
    },
    {
      title: "Thêm nhãn trong lĩnh vực",
      // description: "Click to see other actions.",
      target: () => ref4.current,
    },
    {
      title: "Xóa nhãn trong lĩnh vực",
      // description: "Click to see other actions.",
      target: () => ref5.current,
    },
    {
      title: "Thêm lĩnh vực",
      // description: "Click to see other actions.",
      target: () => ref6.current,
    },
    {
      title: "Xóa lĩnh vực",
      // description: "Click to see other actions.",
      target: () => ref7.current,
    },
  ];
  return (
    <div className="define-target-container">
      <div className="define-target-wrap">
        <div
          className="define-target-head"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="define-target-heading">
            <h3 className="define-target-header" ref={ref1}>
              Xác định mục tiêu
            </h3>
          </div>
          <div className="define-target-intro">
            <Button
              type="primary"
              onClick={() => setOpen(true)}
              style={{ backgroundColor: "#074979", color: "white" }}
            >
              Hướng dẫn
            </Button>
          </div>
        </div>
        <div className="define-target-list">
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 18,
            }}
            form={form1}
            name="dynamic_form_complex_one"
            style={{
              maxWidth: "100%",
            }}
            autoComplete="off"
            initialValues={{
              items: [
                {
                  name: "Học tập",
                },
                {
                  name: "Cá nhân",
                },
              ],
            }}
          >
            <Form.List name="items">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map((field) => (
                    <Card
                      size="small"
                      className="define-target-card-big"
                      title={
                        <Form.Item
                          className="define-target-form-mobile"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          name={[field.name, "name"]}
                        >
                          <Input
                            className="define-target-label"
                            placeholder="Nhập lĩnh vực"
                          />
                        </Form.Item>
                      }
                      key={field.key}
                      extra={<CloseOutlined onClick={showModal} ref={ref7} />}
                    >
                      <Modal
                        title="Xác nhận xóa"
                        open={isModalOpen}
                        onOk={() => {
                          setIsModalOpen(false);
                          message.success("Đã xóa lĩnh vực!");
                          remove(field.name);
                        }}
                        onCancel={handleCancel}
                        okText="Xác nhận"
                        cancelText="Hủy"
                      >
                        <p>Bạn có muốn xóa lĩnh vực không</p>
                      </Modal>
                      <Form
                        labelCol={{
                          span: 6,
                        }}
                        wrapperCol={{
                          span: 18,
                        }}
                        form={form2}
                        name="dynamic_form_complex-two"
                        style={{
                          maxWidth: "100%",
                        }}
                        autoComplete="off"
                        initialValues={{
                          items: [
                            {
                              name: "IT",
                              list: [
                                {
                                  first: "Hoàn thành khóa học ReactJs",
                                },
                                {
                                  first:
                                    "Đạt giải cuộc thi Shecodes tháng 9/2024",
                                },
                                {
                                  first: "Thiết kế component ở figma",
                                },
                              ],
                            },
                            {
                              name: "Ngoại ngữ",
                              list: [
                                {
                                  first: "Đạt chứng chỉ Toeic 500+",
                                },
                                {
                                  first: "Học xong từ vựng N3",
                                },
                              ],
                            },
                          ],
                        }}
                      >
                        <Form.List name="items">
                          {(fields1, { add, remove }) => (
                            <div
                              style={{
                                display: "flex",
                                rowGap: 16,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                              }}
                            >
                              {fields1.map((field1) => (
                                <Card
                                  size="small"
                                  title={
                                    <Form.Item
                                      name={[field1.name, "name"]}
                                      noStyle
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Input
                                        className="define-target-input-act"
                                        placeholder="Nhập nhãn"
                                      />
                                    </Form.Item>
                                  }
                                  key={field1.key}
                                  className="define-target-form-item-mobile"
                                  style={{ minWidth: "48%" }}
                                  extra={
                                    <CloseOutlined
                                      ref={ref5}
                                      onClick={
                                        showModal
                                        //   () => {

                                        //   // remove(field1.name);
                                        // }
                                      }
                                    />
                                  }
                                >
                                  <Modal
                                    title="Xác nhận xóa"
                                    open={isModalOpen}
                                    onOk={() => {
                                      setIsModalOpen(false);
                                      message.success("Đã xóa nhãn!");
                                      remove(field1.name);
                                    }}
                                    onCancel={handleCancel}
                                    okText="Xác nhận"
                                    cancelText="Hủy"
                                  >
                                    <p>Bạn có muốn xóa nhãn không</p>
                                  </Modal>
                                  <Form.Item>
                                    <Form.List name={[field1.name, "list"]}>
                                      {(subFields1, subOpt1) => (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            rowGap: 16,
                                            width: "100%",
                                          }}
                                        >
                                          {subFields1.map((subField1) => (
                                            <Space
                                              key={subField1.key}
                                              className="define-target-space-item-mobile"
                                              style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "133%",
                                              }}
                                            >
                                              <Form.Item
                                                noStyle
                                                name={[subField1.name, "first"]}
                                              >
                                                <Input
                                                  className="define-target-input-mobile"
                                                  style={{ width: "220%" }}
                                                  value={subField1.first}
                                                />
                                              </Form.Item>
                                              <Popconfirm
                                                placement="bottomLeft"
                                                title="Xóa hoạt động"
                                                description="Xác nhận xóa hoạt động"
                                                onConfirm={() => {
                                                  subOpt1.remove(
                                                    subField1.name
                                                  );
                                                  message.success(
                                                    "Đã xóa hoạt động!"
                                                  );
                                                }}
                                                onCancel={cancelPop}
                                                okText="Xác nhận"
                                                cancelText="Hủy"
                                              >
                                                <CloseOutlined ref={ref3} />
                                              </Popconfirm>
                                            </Space>
                                          ))}

                                          <Button
                                            type="dashed"
                                            onClick={() => subOpt1.add()}
                                            block
                                            className="define-target-btn-add-act"
                                            ref={ref2}
                                          >
                                            + Thêm mục tiêu
                                          </Button>
                                        </div>
                                      )}
                                    </Form.List>
                                  </Form.Item>
                                </Card>
                              ))}

                              <Button
                                type="dashed"
                                style={{ width: "60%", margin: "auto" }}
                                onClick={() => add()}
                                block
                                ref={ref4}
                                className="define-target-btn-add-label"
                              >
                                + Thêm nhãn
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form>
                    </Card>
                  ))}

                  <Button type="dashed" onClick={() => add()} block ref={ref6}>
                    + Thêm lĩnh vực
                  </Button>
                </div>
              )}
            </Form.List>
          </Form>
        </div>
        <div className="choose-month-btn">
          <Button type="primary" className="choose-month-button">
            <Link to="/choose-month" className="header-link">
              Quay lại
            </Link>
          </Button>
          <Button type="primary" className="choose-month-button">
            <Link to="/home" className="header-link">
              Lưu và thoát
            </Link>
          </Button>
          <Button type="primary" className="choose-month-button">
            <Link to="/turn-standard" className="header-link">
              Tiếp tục
            </Link>
          </Button>
        </div>
      </div>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        className="define-target-tour-mobile"
      />
    </div>
  );
}

export default DefineTarget;
