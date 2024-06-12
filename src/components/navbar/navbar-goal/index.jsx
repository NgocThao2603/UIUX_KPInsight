import React, { useState } from "react";
import "./index.css";
import {
  UnorderedListOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <VerticalRightOutlined />,
    label: "Thiết lập KPI",
    navigate: "/define-goal",
  },
  {
    key: "2",
    icon: <UnorderedListOutlined />,
    label: "Mục tiêu",
    navigate: "/target_list",
  },
];

function NavbarGoal() {
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();
  const handleSelected = (key, link) => {
    setSelectedKey(key);
    // setTimeout(() => {
    //   navigate(link);
    // }, 1000);
  };
  return (
    <div className="navbar-goal-container">
      <div className="navbar-goal-frame">
        {items.map((item) => (
          <div>
            <div
            // onClick={() => handleSelected(item.key, item.navigate)}
            // className={`navbar-goal-item ${
            //   selectedKey === item.key ? "navbar-selected" : ""
            // }`}
            >
              <Link
                key={item.key}
                className={`navbar-goal-item ${
                  selectedKey === item.key ? "navbar-selected" : ""
                }`}
                to={item.navigate}
                onClick={() => {
                  setSelectedKey(item.key);
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="icon"> {item.icon}</span>
                  {item.label}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavbarGoal;
