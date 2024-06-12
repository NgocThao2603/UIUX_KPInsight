import React, { useState } from "react";
import "./index.css";
import {
  UserOutlined,
  KeyOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Tài khoản",
  },
  {
    key: "2",
    icon: <KeyOutlined />,
    label: "Đổi mật khẩu",
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Cài đặt",
  },
  {
    key: "4",
    icon: <QuestionCircleOutlined />,
    label: "Trợ giúp",
  },
];

function NavbarOption() {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("1");
  const handleItemClick = (key) => {
    const item = items.find((item) => item.key === key);
    setSelectedKey(key);
    switch (key) {
      case "1":
        navigate("/setting/account");
        break;
      case "2":
        navigate("/setting/change-password");
        break;
      case "3":
        navigate("/setting/general-setting");
        break;
      case "4":
        navigate("/setting/help");
    }
  };
  return (
    <div className="navbar-option-container">
      <div className="navbar-frame">
        {items.map((item) => (
          <div key={item.key}>
            <div
              className={`navbar-item ${
                selectedKey === item.key ? "selected" : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <div>
                <span className="icon"> {item.icon}</span>
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavbarOption;
