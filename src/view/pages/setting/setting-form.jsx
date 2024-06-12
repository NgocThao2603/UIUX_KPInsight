import NavbarOption from "../../../components/navbar/navbar-option";
import "./setting-form.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function SettingForm(props) {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="setting-form-mobile">
        <NavbarOption />
      </div>
      <div>
        <div className="bar-mobile">
          <div
            className={active === 1 ? "bar-account bar-active" : "bar-account"}
            onClick={() => setActive(1)}
          >
            <Link className="bar-link" to="/setting/account">
              Tài khoản
            </Link>
          </div>
          <div
            className={active === 2 ? "bar-setting bar-active" : "bar-setting"}
            onClick={() => setActive(2)}
          >
            <Link to="/setting/general-setting" className="bar-link">
              Cài đặt chung
            </Link>
          </div>
          <div
            className={active === 3 ? "bar-help bar-active" : "bar-help"}
            onClick={() => setActive(3)}
          >
            <Link to="/setting/help" className="bar-link">
              Trợ giúp
            </Link>
          </div>
        </div>
        <div>{props.component}</div>
      </div>
    </div>
  );
}

export default SettingForm;
