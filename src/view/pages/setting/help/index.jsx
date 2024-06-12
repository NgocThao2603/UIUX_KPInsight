import "./index.css";
import NavbarOption from "../../../../components/navbar/navbar-option";
import React from "react";
import {
  AudioOutlined,
  CheckOutlined,
  PicLeftOutlined,
  MenuUnfoldOutlined,
  RiseOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Input, Space, Button } from "antd";
const { Search } = Input;
const { TextArea } = Input;

function Help() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="help-container">
      <div className="help-navbar">{/* <NavbarOption /> */}</div>
      <div className="help-content">
        <h3 className="help-header">Trợ giúp</h3>
        <div className="help-search">
          <Search
            placeholder="Bạn muốn tìm gì"
            onSearch={onSearch}
            style={{
              width: "70%",
              border: "2px solid #074979",
              borderRadius: "10px",
              color: "black",
            }}
          />
        </div>
        <div className="help-popular-tag">
          <div className="help-popular-text">Tìm kiếm phổ biến</div>
          <div className="help-popular-mobile">
            <div className="help-popular-item">
              <div className="help-popular-item-wrap">
                <CheckOutlined className="help-popular-item-icon" />
              </div>
              <div className="help-popular-item-text">KPI</div>
            </div>
            <div className="help-popular-item">
              <div className="help-popular-item-wrap">
                <CheckOutlined className="help-popular-item-icon" />
              </div>
              <div className="help-popular-item-text">Liên kết tài khoản</div>
            </div>
            <div className="help-popular-item">
              <div className="help-popular-item-wrap">
                <CheckOutlined className="help-popular-item-icon" />
              </div>
              <div className="help-popular-item-text">Thông báo</div>
            </div>
          </div>
        </div>
        <div className="help-list">
          <div className="help-item">
            <div className="help-icon">
              <MenuUnfoldOutlined
                style={{ fontSize: "35px", color: "#074979" }}
              />
            </div>
            <div className="help-item-header">Bắt đầu</div>
            <div className="help-item-text">
              Đọc tài liệu để bắt đầu thao tác với hệ thống
            </div>
          </div>
          <div className="help-item">
            <div className="help-icon">
              <PicLeftOutlined style={{ fontSize: "35px", color: "#074979" }} />
            </div>
            <div className="help-item-header">Lập mục tiêu KPI</div>
            <div className="help-item-text">
              Làm sao để lập được mục tiêu KPI hợp lý
            </div>
          </div>
          <div className="help-item">
            <div className="help-icon">
              <RiseOutlined style={{ fontSize: "35px", color: "#074979" }} />
            </div>
            <div className="help-item-header">Theo dõi hoạt động</div>
            <div className="help-item-text">
              Theo dõi hoạt động cá nhân, nhận thông báo như thế nào
            </div>
          </div>
          <div className="help-item">
            <div className="help-icon">
              <PieChartOutlined
                style={{ fontSize: "35px", color: "#074979" }}
              />
            </div>
            <div className="help-item-header">Trạng thái KPI</div>
            <div className="help-item-text">
              Trạng thái KPI được đánh giá như thế nào
            </div>
          </div>
        </div>
        <div className="help-send-fb">
          <div className="help-send-fb-header">Gửi góp ý</div>
          <div className="help-send-fb-inp">
            <TextArea
              showCount
              maxLength={200}
              placeholder="Nhập góp ý"
              style={{ margin: "16px 0" }}
            />
          </div>
          <div className="help-send-fb-btn">
            <Button
              type="primary"
              style={{
                float: "right",
                margin: "16px 0",
                backgroundColor: "#074979",
                minWidth: "100px",
              }}
            >
              Gửi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
