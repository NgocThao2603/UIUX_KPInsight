import "./index.css";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Way1 from "../../../../assets/images/way1.png";
import Way2 from "../../../../assets/images/way2.png";

import {
  Button,
  Card,
  Form,
  Input,
  Space,
  Typography,
  Radio,
  Divider,
  Tour,
  Modal,
  Select,
  Tooltip,
} from "antd";
const { Paragraph } = Typography;
let index = 0;
function TurnStandard() {
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [select, setSelect] = useState("");
  const [items, setItems] = useState(["Từ", "Bài", "Nhóm", "Section"]);
  const [itemTime, setItemTime] = useState([
    "Phút",
    "Giờ",
    "Ngày",
    "Tuần",
    "Tháng",
  ]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  // const ref6 = useRef(null);
  // const ref7 = useRef(null);
  // const ref8 = useRef(null);
  // const ref9 = useRef(null);
  // const ref10 = useRef(null);
  const steps = [
    {
      title: "Thêm hoạt động",
      description: "Thêm hoạt động cho mục tiêu",
      // cover: (
      //   <img
      //     alt="tour.png"
      //     src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
      //   />
      // ),
      target: () => ref1.current,
    },
    {
      title: "Chi tiết",
      description:
        "Có 2 cách thiết lập cho từng hoạt động: Theo đơn vị hoặc theo nhiệm vụ. Theo đơn vị ví dụ như học từ bài 1 tới bài 10, theo nhiệm vụ(chia hoạt động thành từng hoạt động con) ví dụ làm project gồm các nhiệm vụ như phân tích yêu cầu, thiết kế, lập trình, ....  mỗi cách thiết lập đều cần nhập phần giá trị tối thiểu và tối đa bạn muốn đạt được để hệ thống thực hiện đánh giá KPI",
      cover: <img alt="way1" src={Way1} />,
      target: () => ref2.current,
    },
    {
      title: "Đơn vị",
      description:
        "Đơn vị ví dụ như bài (bài 1), từ (từ 100), phần (phần 1). Đơn vị dành cho cácch thiết lập 'Theo đơn vị'",
      target: () => ref3.current,
    },
    {
      title: "Thời lượng",
      description:
        "Định lượng cho việc thực hiện 1 đơn vị hoặc 1 nhiệm vụ. Thời lượng ước tính dùng để đánh giá hiệu suất hoàn thành mục tiêu",
      target: () => ref4.current,
    },
    {
      title: "Thêm hoạt động",
      description: "Ấn đê thêm các hoạt động cho mục tiêu",
      target: () => ref5.current,
    },
    // {
    //   title: "Thêm hoạt động",
    //   description: "Thêm hoạt động cho mục tiêu",
    //   // cover: (
    //   //   <img
    //   //     alt="tour.png"
    //   //     src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
    //   //   />
    //   // ),
    //   target: () => ref6.current,
    // },
    // {
    //   title: "Chi tiết",
    //   description:
    //     "Có 2 cách thiết lập cho từng hoạt động: Theo đơn vị hoặc theo nhiệm vụ. Theo đơn vị ví dụ như học từ bài 1 tới bài 10, theo nhiệm vụ(chia hoạt động thành từng hoạt động con) ví dụ làm project gồm các nhiệm vụ như phân tích yêu cầu, thiết kế, lập trình, ....  mỗi cách thiết lập đều cần nhập phần giá trị tối thiểu và tối đa bạn muốn đạt được để hệ thống thực hiện đánh giá KPI",
    //   cover: <img alt="way1" src={Way1} />,
    //   target: () => ref7.current,
    // },
    // {
    //   title: "Đơn vị",
    //   description:
    //     "Đơn vị ví dụ như bài (bài 1), từ (từ 100), phần (phần 1). Đơn vị dành cho cácch thiết lập 'Theo đơn vị'",
    //   target: () => ref8.current,
    // },
    // {
    //   title: "Thời lượng",
    //   description:
    //     "Định lượng cho việc thực hiện 1 đơn vị hoặc 1 nhiệm vụ. Thời lượng ước tính dùng để đánh giá hiệu suất hoàn thành mục tiêu",
    //   target: () => ref9.current,
    // },
    // {
    //   title: "Thêm hoạt động",
    //   description: "Ấn đê thêm các hoạt động cho mục tiêu",
    //   target: () => ref10.current,
    // },
  ];
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const addItemTime = (e) => {
    e.preventDefault();
    setItemTime([...itemTime, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const showModal = (e) => {
    // console.log(e.target.value);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    // console.log(typeof value);
    setSelect(value);
  };

  return (
    <div className="turn-standard-container">
      <div className="turn-standard-wrap">
        <div
          className="turn-standard-head"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="turn-standard-heading">
            <h3 className="turn-standard-header">
              Quy chuẩn mục tiêu thành KPI
            </h3>
          </div>
          <div className="turn-standard-tooltip">
            <Tooltip title="Nhấn vào các mục tiêu để thiết lập KPI">
              <span
                style={{
                  color: "#074979",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginRight: "2px",
                }}
              >
                Hướng dẫn
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="turn-standard-list">
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
                      className="turn-standard-card-big"
                      title={
                        <Form.Item
                          className="turn-standard-form-mobile"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          name={[field.name, "name"]}
                        >
                          <Input
                            className="turn-standard-label"
                            placeholder="Nhập lĩnh vực"
                          />
                        </Form.Item>
                      }
                      key={field.key}
                      // extra={
                      //   <CloseOutlined
                      //     onClick={() => {
                      //       remove(field.name);
                      //     }}
                      //   />
                      // }
                    >
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
                                        // flexDirection: "row",
                                      }}
                                    >
                                      <Input
                                        className="turn-standard-input-act"
                                        placeholder="Nhập nhãn"
                                      />
                                    </Form.Item>
                                  }
                                  key={field1.key}
                                  style={{ width: "47%" }}
                                  className="card-big-mobile"
                                  // extra={
                                  //   <CloseOutlined
                                  //     onClick={() => {
                                  //       remove(field1.name);
                                  //     }}
                                  //   />
                                  // }
                                >
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
                                            <Space key={subField1.key}>
                                              <Form.Item
                                                noStyle
                                                name={[subField1.name, "first"]}
                                              >
                                                <Input
                                                  style={{ width: "220%" }}
                                                  value={subField1.first}
                                                  onClick={showModal}
                                                  className="turn-standard-mobile-inp"
                                                />
                                              </Form.Item>
                                              {/* <CloseOutlined
                                                onClick={() => {
                                                  subOpt1.remove(
                                                    subField1.name
                                                  );
                                                }}
                                              /> */}
                                            </Space>
                                          ))}

                                          {/* <Button
                                            type="dashed"
                                            onClick={() => subOpt1.add()}
                                            block
                                            className="turn-standard-btn-add-act"
                                          >
                                            + Thêm mục tiêu
                                          </Button> */}
                                        </div>
                                      )}
                                    </Form.List>
                                  </Form.Item>
                                </Card>
                              ))}

                              {/* <Button
                                type="dashed"
                                style={{ width: "60%", margin: "auto" }}
                                onClick={() => add()}
                                block
                                className="turn-standard-btn-add-label"
                              >
                                + Thêm nhãn
                              </Button> */}
                            </div>
                          )}
                        </Form.List>
                      </Form>
                    </Card>
                  ))}

                  {/* <Button type="dashed" onClick={() => add()} block>
                    + Thêm lĩnh vực
                  </Button> */}
                </div>
              )}
            </Form.List>
          </Form>
        </div>
        <div className="choose-month-btn">
          <Button type="primary" className="choose-month-button">
            <Link className="header-link" to="/define-target">
              Quay lại
            </Link>
          </Button>
          <Button type="primary" className="choose-month-button">
            <Link className="header-link" to="/home">
              Lưu và thoát
            </Link>
          </Button>
          <Button type="primary" className="choose-month-button">
            <Link className="header-link" to="/set-done">
              Tiếp tục
            </Link>
          </Button>
        </div>
      </div>
      <Modal
        className="modal-for-mobile"
        title="Quy chuẩn KPI"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        // style={{ width: "900px" }}
      >
        <Button
          type="primary"
          onClick={() => setOpen(true)}
          style={{ backgroundColor: "#074979", color: "white" }}
        >
          Hướng dẫn cách quy chuẩn
        </Button>
        <div className="turn-standard-tags for-web">
          <div className="turn-standard-act-name" ref={ref1}>
            Tên hoạt động
          </div>
          <div className="turn-standard-act-detail" ref={ref2}>
            Chi tiết
          </div>
          <div className="turn-standard-act-unit" ref={ref3}>
            Đơn vị
          </div>
          <div className="turn-standard-act-time" ref={ref4}>
            Thời lượng
          </div>
        </div>
        {/* Add task to goal */}
        <Form
          className="for-web"
          name="dynamic_form_nest_item"
          // onFinish={onFinish}
          style={{
            width: 850,
          }}
          autoComplete="off"
        >
          {/* fields : task list */}
          <Form.List name="tasks">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    className="intro-turn-standard-mobile"
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    {/* Add task name */}
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu tên hoạt động",
                        },
                      ]}
                    >
                      <Input
                        className="turn-standard-inp turn-standard-inp-mobile"
                        placeholder="Tên hoạt động"
                        style={{ marginLeft: "12px", width: "190px" }}
                      />
                    </Form.Item>
                    {/* Add sub task, min, max */}
                    <Form.Item
                      {...restField}
                      name={[name, "detail"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu chi tiết",
                        },
                      ]}
                    >
                      {/* choose unit or task */}
                      <Select
                        className="turn-standard-select"
                        placeholder="Chọn cách thiết lập"
                        style={{
                          width: 350,
                          marginLeft: "16px",
                        }}
                        onChange={handleChange}
                        options={[
                          {
                            value: "unit",
                            label: "Theo đơn vị cụ thể",
                          },
                          {
                            value: "task",
                            label: "Theo nhiệm vụ cụ thể",
                          },
                        ]}
                      />
                      {/* if choose unit */}
                      {select === "unit" && (
                        <div className="turn-standard-choose-unit">
                          {/* add begin, max, min */}
                          <Input
                            placeholder="Bắt đầu"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                          <Input
                            placeholder="Tối thiểu"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                          <Input
                            placeholder="Lớn nhất"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                        </div>
                      )}
                      {/* if choose task */}
                      {select === "task" && (
                        <div className="turn-standard-choose-task">
                          {/* add sub task */}
                          <Form
                            name="dynamic_form_nest_item-2"
                            // onFinish={onFinish}
                            style={{
                              maxWidth: 350,
                              marginLeft: "16px",
                            }}
                            autoComplete="off"
                          >
                            <Form.List name="sub-task">
                              {(fields1, { add, remove }) => (
                                <>
                                  {fields1.map(
                                    ({ key, name, ...restField }) => (
                                      <Space
                                        key={key}
                                        style={{
                                          display: "flex",
                                          marginBottom: 8,
                                        }}
                                        align="baseline"
                                      >
                                        <Form.Item
                                          {...restField}
                                          name={[name, "sub-task"]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Nhập nhiệm vụ",
                                            },
                                          ]}
                                        >
                                          <Input
                                            className="turn-standard-inp"
                                            placeholder="Thêm nhiệm vụ"
                                            style={{
                                              margin: "2px 0",
                                              width: "350px",
                                            }}
                                          />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                          onClick={() => remove(name)}
                                        />
                                      </Space>
                                    )
                                  )}
                                  <Form.Item>
                                    <Button
                                      type="dashed"
                                      onClick={() => add()}
                                      block
                                      className="turn-standard-btn-add"
                                      icon={<PlusOutlined />}
                                      style={{ margin: "2px 0" }}
                                    >
                                      Thêm nhiệm vụ
                                    </Button>
                                  </Form.Item>
                                </>
                              )}
                            </Form.List>
                          </Form>
                          <div className="turn-standard-choose-minmax">
                            {/* choose task min */}
                            <Select
                              className="turn-standard-select"
                              placeholder="Chọn mục tiêu tối thiểu"
                              style={{
                                width: 350,
                                marginLeft: "16px",
                              }}
                              // onChange={handleChange}
                              options={[
                                {
                                  value: "1",
                                  label: "Vẽ usecase cho dự án",
                                },
                                {
                                  value: "2",
                                  label: "Đặc tả các usecase",
                                },
                              ]}
                            />
                            {/* choose task max */}
                            <Select
                              className="turn-standard-select"
                              placeholder="Chọn mục tiêu tối đa"
                              style={{
                                width: 350,
                                marginLeft: "16px",
                                marginTop: "6px",
                              }}
                              // onChange={handleChange}
                              options={[
                                {
                                  value: "1",
                                  label: "Vẽ usecase cho dự án",
                                },
                                {
                                  value: "2",
                                  label: "Đặc tả các usecase",
                                },
                              ]}
                            />
                          </div>
                        </div>
                      )}
                    </Form.Item>
                    {/* choose unit of task */}
                    {select === "unit" ? (
                      <Form.Item>
                        <Select
                          className="turn-standard-select"
                          style={{
                            width: 100,
                            marginLeft: "16px",
                          }}
                          placeholder="Bài"
                          dropdownRender={(menu) => (
                            <>
                              {menu}
                              <Divider
                                style={{
                                  margin: "8px 0",
                                }}
                              />
                              <Space
                                style={{
                                  padding: "0 8px 4px",
                                }}
                              >
                                <Input
                                  className="turn-standard-inp"
                                  placeholder="Nhập đơn vị khác"
                                  ref={inputRef}
                                  value={name}
                                  onChange={onNameChange}
                                  onKeyDown={(e) => e.stopPropagation()}
                                />
                                <Button
                                  // type="text"
                                  icon={<PlusOutlined />}
                                  onClick={addItem}
                                >
                                  {/* Add item */}
                                </Button>
                              </Space>
                            </>
                          )}
                          options={items.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                        />
                      </Form.Item>
                    ) : (
                      <div style={{ minWidth: "80px", marginLeft: "16px" }}>
                        {/* Nhiệm vụ */}
                      </div>
                    )}
                    {/* choose time for task */}
                    <Form.Item style={{ marginLeft: "16px" }}>
                      <Input
                        style={{ minWidth: "40px" }}
                        className="turn-standard-inp"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Select
                        className="turn-standard-select"
                        style={{
                          width: 80,
                        }}
                        placeholder="Giờ"
                        dropdownRender={(menu) => (
                          <>
                            {menu}
                            <Divider
                              style={{
                                margin: "8px 0",
                              }}
                            />
                            <Space
                              style={{
                                padding: "0 8px 4px",
                              }}
                            >
                              <Input
                                // placeholder="Please enteritem "
                                ref={inputRef}
                                value={name}
                                className="turn-standard-inp"
                                onChange={onNameChange}
                                onKeyDown={(e) => e.stopPropagation()}
                              />
                              <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={addItemTime}
                              >
                                {/* Add item */}
                              </Button>
                            </Space>
                          </>
                        )}
                        options={itemTime.map((itemTime) => ({
                          label: itemTime,
                          value: itemTime,
                        }))}
                      />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                {/* add new task */}
                <Form.Item>
                  <div
                    className="turn-standard-add-item"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      className="turn-standard-btn-add"
                      style={{ width: "50%" }}
                      icon={<PlusOutlined />}
                      ref={ref5}
                    >
                      Thêm hoạt động
                    </Button>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
        <div className="turn-standard-tags for-mobile">
          <div className="turn-standard-act-name">Tên hoạt động</div>
          <div className="turn-standard-act-detail">Chi tiết</div>
          <div className="turn-standard-act-unit">Đơn vị</div>
          <div className="turn-standard-act-time">Thời lượng</div>
        </div>
        {/* Add task to goal */}
        <Form
          className="for-mobile"
          name="dynamic_form_nest_item"
          // onFinish={onFinish}
          style={{
            width: 850,
          }}
          autoComplete="off"
        >
          {/* fields : task list */}
          <Form.List name="tasks">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    className="intro-turn-standard-mobile"
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                    align="baseline"
                  >
                    {/* Add task name */}
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu tên hoạt động",
                        },
                      ]}
                    >
                      <Input
                        className="turn-standard-inp"
                        placeholder="Tên hoạt động"
                        style={{ marginLeft: "12px", width: "190px" }}
                      />
                    </Form.Item>
                    {/* Add sub task, min, max */}
                    <Form.Item
                      {...restField}
                      name={[name, "detail"]}
                      rules={[
                        {
                          required: true,
                          message: "Thiếu chi tiết",
                        },
                      ]}
                    >
                      {/* choose unit or task */}
                      <Select
                        className="turn-standard-select"
                        placeholder="Chọn cách thiết lập"
                        style={{
                          width: 350,
                          marginLeft: "16px",
                        }}
                        onChange={handleChange}
                        options={[
                          {
                            value: "unit",
                            label: "Theo đơn vị cụ thể",
                          },
                          {
                            value: "task",
                            label: "Theo nhiệm vụ cụ thể",
                          },
                        ]}
                      />
                      {/* if choose unit */}
                      {select === "unit" && (
                        <div className="turn-standard-choose-unit">
                          {/* add begin, max, min */}
                          <Input
                            placeholder="Bắt đầu"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                          <Input
                            placeholder="Tối thiểu"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                          <Input
                            placeholder="Lớn nhất"
                            className="turn-standard-choose-unit-item turn-standard-inp"
                          />
                        </div>
                      )}
                      {/* if choose task */}
                      {select === "task" && (
                        <div className="turn-standard-choose-task">
                          {/* add sub task */}
                          <Form
                            name="dynamic_form_nest_item-2"
                            // onFinish={onFinish}
                            style={{
                              maxWidth: 350,
                              marginLeft: "16px",
                            }}
                            autoComplete="off"
                          >
                            <Form.List name="sub-task">
                              {(fields1, { add, remove }) => (
                                <>
                                  {fields1.map(
                                    ({ key, name, ...restField }) => (
                                      <Space
                                        key={key}
                                        style={{
                                          display: "flex",
                                          marginBottom: 8,
                                        }}
                                        align="baseline"
                                      >
                                        <Form.Item
                                          {...restField}
                                          name={[name, "sub-task"]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Nhập nhiệm vụ",
                                            },
                                          ]}
                                        >
                                          <Input
                                            className="turn-standard-inp"
                                            placeholder="Thêm nhiệm vụ"
                                            style={{
                                              margin: "2px 0",
                                              width: "350px",
                                            }}
                                          />
                                        </Form.Item>

                                        <MinusCircleOutlined
                                          onClick={() => remove(name)}
                                        />
                                      </Space>
                                    )
                                  )}
                                  <Form.Item>
                                    <Button
                                      type="dashed"
                                      onClick={() => add()}
                                      block
                                      className="turn-standard-btn-add"
                                      icon={<PlusOutlined />}
                                      style={{ margin: "2px 0" }}
                                    >
                                      Thêm nhiệm vụ
                                    </Button>
                                  </Form.Item>
                                </>
                              )}
                            </Form.List>
                          </Form>
                          <div className="turn-standard-choose-minmax">
                            {/* choose task min */}
                            <Select
                              className="turn-standard-select"
                              placeholder="Chọn mục tiêu tối thiểu"
                              style={{
                                width: 350,
                                marginLeft: "16px",
                              }}
                              // onChange={handleChange}
                              options={[
                                {
                                  value: "1",
                                  label: "Vẽ usecase cho dự án",
                                },
                                {
                                  value: "2",
                                  label: "Đặc tả các usecase",
                                },
                              ]}
                            />
                            {/* choose task max */}
                            <Select
                              className="turn-standard-select"
                              placeholder="Chọn mục tiêu tối đa"
                              style={{
                                width: 350,
                                marginLeft: "16px",
                                marginTop: "6px",
                              }}
                              // onChange={handleChange}
                              options={[
                                {
                                  value: "1",
                                  label: "Vẽ usecase cho dự án",
                                },
                                {
                                  value: "2",
                                  label: "Đặc tả các usecase",
                                },
                              ]}
                            />
                          </div>
                        </div>
                      )}
                    </Form.Item>
                    {/* choose unit of task */}
                    {select === "unit" ? (
                      <Form.Item>
                        <Select
                          className="turn-standard-select"
                          style={{
                            width: 100,
                            marginLeft: "16px",
                          }}
                          placeholder="Bài"
                          dropdownRender={(menu) => (
                            <>
                              {menu}
                              <Divider
                                style={{
                                  margin: "8px 0",
                                }}
                              />
                              <Space
                                style={{
                                  padding: "0 8px 4px",
                                }}
                              >
                                <Input
                                  className="turn-standard-inp"
                                  placeholder="Nhập đơn vị khác"
                                  ref={inputRef}
                                  value={name}
                                  onChange={onNameChange}
                                  onKeyDown={(e) => e.stopPropagation()}
                                />
                                <Button
                                  // type="text"
                                  icon={<PlusOutlined />}
                                  onClick={addItem}
                                >
                                  {/* Add item */}
                                </Button>
                              </Space>
                            </>
                          )}
                          options={items.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                        />
                      </Form.Item>
                    ) : (
                      //   // <div style={{ minWidth: "80px", marginLeft: "16px" }}>
                      //   //   Nhiệm vụ
                      //   // </div>
                      <div></div>
                    )}
                    {/* choose time for task */}
                    <Form.Item style={{ marginLeft: "16px" }}>
                      <Input
                        style={{ minWidth: "40px" }}
                        className="turn-standard-inp"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Select
                        className="turn-standard-select"
                        style={{
                          width: 80,
                        }}
                        placeholder="Giờ"
                        dropdownRender={(menu) => (
                          <>
                            {menu}
                            <Divider
                              style={{
                                margin: "8px 0",
                              }}
                            />
                            <Space
                              style={{
                                padding: "0 8px 4px",
                              }}
                            >
                              <Input
                                // placeholder="Please enteritem "
                                ref={inputRef}
                                value={name}
                                className="turn-standard-inp"
                                onChange={onNameChange}
                                onKeyDown={(e) => e.stopPropagation()}
                              />
                              <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={addItemTime}
                              >
                                {/* Add item */}
                              </Button>
                            </Space>
                          </>
                        )}
                        options={itemTime.map((itemTime) => ({
                          label: itemTime,
                          value: itemTime,
                        }))}
                      />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                {/* add new task */}
                <Form.Item>
                  <div
                    className="turn-standard-add-item"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      className="turn-standard-btn-add"
                      style={{ width: "50%" }}
                      icon={<PlusOutlined />}
                      // ref={ref10}
                    >
                      Thêm hoạt động
                    </Button>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  );
}

export default TurnStandard;
