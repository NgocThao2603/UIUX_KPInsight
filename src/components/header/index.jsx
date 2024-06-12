import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [active, setActive] = useState("");
  const user = localStorage.getItem("username");
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header-max">
      <div class="header-container">
        <Link to="/home" className="header-link" onClick={() => setActive("")}>
          <div class="header-logo">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e33db95f30319054c2882af6a077b82c0e76fc395e0da11ae937aee35f7a21?apiKey=ffc2b1564c644340a68e4591e1bff550&"
              class="img"
            />
            <div class="header-name">KPInsight</div>
          </div>
        </Link>
        <div class="header-tab">
          {!user ? (
            <>
              <button class="header-register">
                <Link
                  className={`header-link ${
                    active === "register" ? "header-active" : ""
                  }`}
                  to="/register"
                  onClick={() => setActive("register")}
                >
                  Đăng ký
                </Link>
              </button>

              <button class="header-login">
                <Link
                  className={`header-link ${
                    active === "login" ? "header-active" : ""
                  }`}
                  to="/login"
                  onClick={() => setActive("login")}
                >
                  Đăng nhập
                </Link>
              </button>
            </>
          ) : (
            <>
              <button class="header-login">
                <Link
                  to="/activity-list"
                  className={`header-link ${
                    active === "activity" ? "header-active" : ""
                  }`}
                  onClick={() => setActive("activity")}
                >
                  Hoạt động
                </Link>
              </button>

              <button class="header-login">
                <Link
                  className={`header-link ${
                    active === "target" ? "header-active" : ""
                  }`}
                  onClick={() => setActive("target")}
                  to="/define-goal"
                >
                  Mục tiêu KPI
                </Link>
              </button>
              <button class="header-login">
                <Link
                  to="/kpi-status"
                  className={`header-link ${
                    active === "status" ? "header-active" : ""
                  }`}
                  onClick={() => setActive("status")}
                >
                  Trạng thái KPI
                </Link>
              </button>
              <button class="header-login">
                <Link
                  className="header-link"
                  to="/setting/account"
                  onClick={() => setActive("")}
                >
                  <img
                    src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
      {user && (
        <div className="header-mobile">
          {location.pathname === "/home" ? (
            <div className="header-mobile-logo">
              <Link className="header-link" to="/home">
                <h3 className="header-mobile-name">KPInsight</h3>
              </Link>
            </div>
          ) : (
            <>
              <div className="header-mobile-back">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={() => navigate(-1)}
                />
              </div>
              <div className="header-mobile-name-page">{props.name}</div>
            </>
          )}
          <div className="header-mobile-avatar">
            <Link className="header-link" to="/setting/account">
              <img
                src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
                alt="avatar"
                className="header-mobile-ava"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
