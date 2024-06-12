import NavbarOption from "../../../../components/navbar/navbar-option";
import React, { useEffect, useRef } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

const SettingAccount = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    toast.success("Cập nhập thông tin thành công!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div>
      <div className="namepage-logout">
        <div className="namepage-setting">Thông tin cơ bản</div>

        <Button
          type="primary"
          htmlType="submit"
          className="log-out-text log-out-mobile"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
      <div className="namepage-mobile">
        <div className="account-wrap">
          <div className="account-container">
            <div className="account-pic">
              <img
                className="avt-img"
                src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                alt="Oops! Something went wrong"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="change-img">Thay ảnh đại diện</div>
          </div>
          <div className="user-info">
            <div className="user-name">
              <div className="name-text">Họ và tên:</div>
              <div className="user-input">
                <Input
                  defaultValue="Nguyễn Thị Hương Lan"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-date">
              <div className="date-text">Năm sinh:</div>
              <div className="user-input">
                <Input
                  defaultValue="10/10/1978"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-address">
              <div className="address-text">Địa chỉ:</div>
              <div className="user-input">
                {" "}
                <Input
                  defaultValue="Ngõ 1 đường 30/4 phường A, Hà Nội"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
            <div className="user-phone">
              <div className="phone-text">Điện thoại:</div>
              <div className="user-input">
                <Input
                  defaultValue="0911617850"
                  style={{ color: "#074979", fontWeight: "700" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="more-info">
          <div className="role-info">
            <div className="role-text">Vai trò:</div>
            <div
              className="role-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Giảng viên
            </div>
          </div>
          <div className="univer-info">
            <div className="univer-text">Trường:</div>
            <div
              className="univer-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Đại học Kinh tế Quốc dân
            </div>
          </div>
          <div className="member-info">
            <div className="member-text">Thành viên:</div>
            <div
              className="member-input"
              style={{ color: "#074979", fontWeight: "700" }}
            >
              Thân thiết (có thời gian sử dụng trên 1 năm)
            </div>
          </div>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="update-info"
          onClick={handleClick}
        >
          Cập nhật thông tin
        </Button>
      </div>
      <div className="mobile-line"></div>
      <div className="change-pass-mobile">
        <div className="change-pass-mobile-header">Thay đổi mật khẩu</div>
        <div className="change-pass-mobile-content">
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">Mật khẩu cũ:</div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">Mật khẩu mới:</div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
          <div className="change-pass-mobile-old_pass">
            <div className="change-pass-mobile-old-text">
              Nhập lại mật khẩu:
            </div>
            <div className="change-pass-mobile-old-inp">
              <Input.Password />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line"></div>
      <div className="logout-mobile">
        <Button
          type="primary"
          htmlType="submit"
          className="log-out-text"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};
export default SettingAccount;
