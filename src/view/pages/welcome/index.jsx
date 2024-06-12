import "./index.css";
import welcome from "../../../assets/images/logo.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-get-started">
        <div className="welcome-get-started-intro">
          <h2 className="welcome-get-header">Chào mừng đến với KPInsight</h2>
          <div
            className="welcome-get-btn"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            <Link className="header-link" to="/register">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Bắt đầu
              </Button>
            </Link>
          </div>
        </div>
        <div className="welcome-img">
          <img src={welcome} alt="welcome" className="welcome-pic" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
