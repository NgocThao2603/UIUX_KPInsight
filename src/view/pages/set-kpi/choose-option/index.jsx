import "./index.css";
import { Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ChooseOption() {
  return (
    <div className="choose-container">
      <div className="choose-wrap">
        <div className="choose-heading">
          <h3 className="choose-header">Chọn cách thiết lập KPI</h3>
        </div>
        <p className="choose-des">
          Bạn hãy chọn một trong những cách thiết lập sau:
        </p>
        <div className="choose-list">
          <div>
            <Button className="choose-self">Tự thiết lập</Button>
          </div>
          <div>
            <Select
              className="choose-old"
              placeholder="Thiết lập từ mẫu giai đoạn cũ"
              options={[
                {
                  value: "march",
                  label: "Tháng 03/2024",
                },
                {
                  value: "february",
                  label: "Tháng 02/2024",
                },
                {
                  value: "january",
                  label: "Tháng 01/2024",
                },
              ]}
            />
          </div>
          <div>
            <Select
              className="choose-system"
              placeholder="Thiết lập từ mẫu hệ thống"
              options={[
                {
                  value: "student",
                  label: "Mẫu sinh viên",
                },
                {
                  value: "teacher",
                  label: "Mẫu giảng viên",
                },
                {
                  value: "manager",
                  label: "Mẫu quản lý",
                },
              ]}
            />
          </div>
          <div>
            {/* <Button className="choose-import">Import file</Button> */}
            <Upload
              // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="file"
            >
              <Button className="choose-import" icon={<UploadOutlined />}>
                Tải tệp lên
              </Button>
            </Upload>
          </div>
        </div>
        <div className="choose-note">
          <strong className="choose-node-header">
            Lưu ý: <span></span>
          </strong>
          Hệ thống chỉ nhận file có định dạng của hệ thống (được tải từ hệ
          thống)
        </div>
        <div className="choose-btn">
          <Button type="primary" className="choose-button">
            <Link to="/choose-month" className="header-link">
              Tiếp tục
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseOption;
