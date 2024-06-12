import NavbarOption from "../../../../components/navbar/navbar-option";
import { Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { KeyOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const handleFinish = (value) => {
    toast.success("Thay đổi mật khẩu thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate("/setting/account");
    }, 5000);
  };
  return (
    <div>
      {/* <NavbarOption /> */}

      <div className="namepage-changepassword">Thay đổi mật khẩu</div>
      <div className="change-password-wrap">
        <Form className="reset-form" autoComplete="off" onFinish={handleFinish}>
          <Form.Item
            label={<KeyOutlined />}
            name="old-password"
            rules={[{ required: true, message: "Hãy nhập mật khẩu cũ" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu cũ" />
          </Form.Item>
          <Form.Item
            label={<KeyOutlined />}
            name="new-password"
            rules={[{ required: true, message: "Hãy nhập mật khẩu mới" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>
          <Form.Item
            label={<KeyOutlined />}
            name="again-password"
            dependencies={["new-password"]}
            rules={[
              { required: true, message: "Hãy nhập lại mật khẩu mới" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new-password") === value) {
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
              ĐỔI MẬT KHẨU
            </Button>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ChangePassword;
