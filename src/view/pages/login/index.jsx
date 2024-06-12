import "./index.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("username", values.username);
    console.log("Received values of form: ", values);
    navigate("/home");
  };
  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="login-header">ĐĂNG NHẬP</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{ width: 300 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên đăng nhập",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Tên đăng nhập"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/forgot-password">
              Quên mật khẩu
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              ĐĂNG NHẬP
            </Button>
          </Form.Item>
        </Form>
        <div className="login-option">
          <div className="login-or">Hoặc</div>
          <div className="login-icon">
            <FontAwesomeIcon icon={faGoogle} className="login-icon-font" />
            <FontAwesomeIcon icon={faFacebook} className="login-icon-font" />
          </div>
        </div>
        <div className="login-to-register">
          Bạn chưa có tài khoản ?
          <span>
            <Link to="/register" className="login-regis">
              Đăng ký ngay
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
