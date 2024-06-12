import "./index.css";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Done() {
  return (
    <div>
      <div className="done-container">
        <div className="done-wrap">
          <div className="done-icon">
            <CheckOutlined style={{ fontSize: "20px", fontWeight: "600" }} />
          </div>
          <div className="done-heading">
            <h3 className="done-header">Bạn đã hoàn thành thiết lập KPI</h3>
          </div>
          <p className="done-des">
            Bạn có muốn tải file "Thiết lập KPI tháng 06/2024"
          </p>
          <div className="done-btn">
            <Button type="primary" className="done-button">
              <Link to="/target_list" className="header-link">
                Để sau
              </Link>
            </Button>
            <Button type="primary" className="done-button">
              Tải về
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Done;
