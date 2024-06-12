import React, { useState, useEffect } from "react";
import "./index.css";
import { DownOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "04/2024", month: 4 },
  { key: "2", label: "03/2024", month: 3 },
  { key: "3", label: "02/2024", month: 2 },
  {
    key: "sub1",
    label: "Xem thêm",
    children: [
      { key: "5", label: "01/2024", month: 1 },
      { key: "6", label: "12/2023", month: 12 },
      { key: "7", label: "11/2023", month: 11 },
      { key: "8", label: "10/2023", month: 10 },
    ],
  },
];

function NavbarStatus({ onMonthChange }) {
  const [selectedKey, setSelectedKey] = useState("1");
  const [openKeys, setOpenKeys] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (key, month) => {
    const item = items.find((item) => item.key === key);
    if (item && !item.children && !item.parentKey) {
      setOpenKeys([]);
    }
    setSelectedKey(key);
    if (onMonthChange) onMonthChange(month);
    if (item && item.children) {
      if (openKeys.includes(item.key)) {
        setOpenKeys(openKeys.filter((k) => k !== key));
      } else {
        setOpenKeys([...openKeys, key]);
      }
    }
    if (isMobile) {
      setIsOverlayActive(false); // Đóng overlay sau khi chọn trên mobile
    }
  };

  const handlePrevious = () => {
    const allItems = getAllItems();
    const currentIndex = allItems.findIndex((item) => item.key === selectedKey);
    if (currentIndex < allItems.length - 1) {
      const newItem = allItems[currentIndex + 1];
      handleItemClick(newItem.key, newItem.month);
    }
  };

  const handleNext = () => {
    const allItems = getAllItems();
    const currentIndex = allItems.findIndex((item) => item.key === selectedKey);
    if (currentIndex > 0) {
      const newItem = allItems[currentIndex - 1];
      handleItemClick(newItem.key, newItem.month);
    }
  };

  const getAllItems = () => {
    const allItems = [];
    items.forEach((item) => {
      if (!isMobile || item.key !== "sub1") {
        allItems.push(item);
      }
      if (item.children) {
        item.children.forEach((child) => {
          allItems.push(child);
        });
      }
    });
    return allItems;
  };

  const allItems = getAllItems();
  const currentIndex = allItems.findIndex((item) => item.key === selectedKey);

  return (
    <>
      <div
        className={`navbar-overlay ${isOverlayActive ? "active" : ""}`}
        onClick={() => setIsOverlayActive(false)}
      ></div>
      <div className={`navbar-menu-container ${isMobile ? "mobile" : ""}`}>
        <h1 className="navbar-name">Giai đoạn</h1>
        {isMobile ? (
          <div className="pagination-container">
            <button
              className="pagination-button"
              onClick={handlePrevious}
              disabled={currentIndex === allItems.length - 1}
            >
              <LeftOutlined />
            </button>
            <div
              className="pagination-label"
              onClick={() => setIsOverlayActive(!isOverlayActive)}
            >
              {allItems[currentIndex]?.label}
            </div>
            <button
              className="pagination-button"
              onClick={handleNext}
              disabled={currentIndex === 0}
            >
              <RightOutlined />
            </button>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.key}
              className={item.children ? "navbar-status-more" : ""}
            >
              <div
                className={`navbar-item ${
                  selectedKey === item.key ? "selected" : ""
                } ${item.children ? "has-children" : ""} ${
                  openKeys.includes(item.key) ? "open" : ""
                }`}
                onClick={() => handleItemClick(item.key, item.month)}
              >
                {item.key === "sub1" && openKeys.includes(item.key)
                  ? "Thu gọn"
                  : item.label}
                {item.key === "sub1" && (
                  <DownOutlined
                    className={`downicon ${
                      openKeys.includes(item.key) ? "rotate" : ""
                    }`}
                  />
                )}
              </div>
              {item.children && openKeys.includes(item.key) && (
                <div className="navbar-submenu">
                  {item.children.map((child) => (
                    <div
                      key={child.key}
                      className={`navbar-menu-item child-item ${
                        selectedKey === child.key ? "selected" : ""
                      }`}
                      onClick={() => handleItemClick(child.key, child.month)}
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
        {isMobile && isOverlayActive && (
          <div className="navbar-mobile-overlay">
            {allItems.map((item) => (
              <div
                key={item.key}
                className={`navbar-menu-item ${
                  selectedKey === item.key ? "selected" : ""
                }`}
                onClick={() => handleItemClick(item.key, item.month)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default NavbarStatus;
