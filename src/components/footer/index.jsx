import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faFile,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Footer() {
  const [active, setActive] = useState(1);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname == "/setting/account" ||
      location.pathname == "/setting/general-setting" ||
      location.pathname == "/setting/help"
    ) {
      setActive(0);
    }
  }, [location.pathname]);
  const navbar = [
    {
      key: 1,
      icon: <FontAwesomeIcon icon={faHouse} />,
      name: "Trang chủ",
      navigate: "/home",
    },
    {
      key: 2,
      icon: <FontAwesomeIcon icon={faList} />,
      name: "Hoạt động",
      navigate: "/activity-list",
    },
    {
      key: 3,
      icon: <FontAwesomeIcon icon={faFile} />,
      name: "Mục tiêu",
      navigate: "/define-goal",
    },
    {
      key: 4,
      icon: <FontAwesomeIcon icon={faChartSimple} />,
      name: "Trạng thái",
      navigate: "/kpi-status",
    },
  ];
  const user = localStorage.getItem("username");
  return (
    <div className="footer-container">
      {user && (
        <div className="footer-content">
          {navbar.map((item) => (
            <Link to={item.navigate} className="header-link">
              <div
                className={
                  item.key === active
                    ? "footer-item footer-active"
                    : "footer-item"
                }
                key={item.key}
                onClick={() => setActive(item.key)}
              >
                <div className="footer-icon">{item.icon}</div>
                <div className="footer-name">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Footer;
