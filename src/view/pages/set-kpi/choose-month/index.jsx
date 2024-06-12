import "./index.css";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";

function ChooseMonth() {
  return (
    <div>
      <div className="choose-month-container">
        <div className="choose-month-wrap">
          <div className="choose-month-heading">
            <h3 className="choose-month-header">Thiết lập KPI</h3>
          </div>
          <p className="choose-month-des">Bạn hãy chọn tháng thiết lập KPI</p>
          <div>
            <Select
              className="choose-month"
              placeholder="Chọn tháng"
              options={[
                {
                  value: "may",
                  label: "Tháng 05/2024",
                },
                {
                  value: "june",
                  label: "Tháng 06/2024",
                },
                {
                  value: "july",
                  label: "Tháng 07/2024",
                },
              ]}
            />
          </div>
          <div className="choose-month-btn">
            <Button type="primary" className="choose-month-button">
              <Link to="/choose-option" className="header-link">
                Quay lại
              </Link>
            </Button>
            <Button type="primary" className="choose-month-button">
              <Link to="/home" className="header-link">
                Lưu và thoát
              </Link>
            </Button>
            <Button type="primary" className="choose-month-button">
              <Link to="/define-target" className="header-link">
                Tiếp tục
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseMonth;
