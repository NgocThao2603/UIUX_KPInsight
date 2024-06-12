import "./index.css";
import { Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { KeyOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const navigate = useNavigate();
  const handleFinish = (value) => {
    toast.success("Thiết lập mật khẩu mới thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };
  return (
    <div className="reset-container">
      <div className="reset-wrap">
        <h3 className="reset-header">THIẾT LẬP LẠI MẬT KHẨU</h3>
        <Form className="reset-form" autoComplete="off" onFinish={handleFinish}>
          <Form.Item
            className="reset-item-form"
            label={<KeyOutlined className="reset-icon" />}
            name="password"
            rules={[]}
          >
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>
          <Form.Item
            className="reset-item-form"
            label={<KeyOutlined className="reset-icon" />}
            name="password2"
            dependencies={["password"]}
            rules={[
              {},
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Nhập lại mật khẩu không khớp")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu mới" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="reset-form-button"
            >
              THIẾT LẬP
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResetPassword;
