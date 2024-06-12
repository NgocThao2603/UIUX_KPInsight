import "./index.css";
import React, { useState } from "react";
import { Calendar, theme, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";
import { PieChart } from "@mui/x-charts/PieChart";
import ActivityForm from "./activityForm";

function Homepage() {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  const data = [
    { id: 0, value: 5, label: "Tình nguyện" },
    { id: 1, value: 5, label: "Tài chính" },
    { id: 2, value: 10, label: "Sức khỏe" },
    { id: 3, value: 30, label: "Ngoại ngữ" },
    { id: 4, value: 30, label: "IT" },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activities, setActivities] = useState([
    { id: 1, name: "Học thiết kế Web", tag: "IT" },
    { id: 2, name: "Project ITSS", tag: "IT" },
    { id: 3, name: "Project AI", tag: "IT" },
    { id: 4, name: "Nghiên cứu tốt nghiệp", tag: "IT" },
    { id: 5, name: "Bài tập UIUX", tag: "IT" },
    { id: 6, name: "Học reactJS", tag: "IT" },
    { id: 7, name: "Học từ vựng N3", tag: "Ngoại ngữ" },
    { id: 8, name: "Học ngữ pháp N3", tag: "Ngoại ngữ" },
    { id: 9, name: "Nghe hiểu", tag: "Ngoại ngữ" },
    { id: 10, name: "Đọc hiểu", tag: "Ngoại ngữ" },
    { id: 11, name: "Luyện shadowing", tag: "Khác" },
    // Add more activities as needed
  ]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="homepage-container">
      <div className="flex-container">
        <div className="flex-item chart-container">
          <div className="chart">
            {/* <h3>Tổng quan KPI</h3> */}
            <PieChart
              series={[
                {
                  data,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                  innerRadius: 30,
                  outerRadius: 120,
                  paddingAngle: 3,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                },
              ]}
            />
          </div>
        </div>
        <div className="flex-item calendar-wrap">
          <div className="calendar-container">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>
      </div>
      <div className="add-activity">
        <Button
          className="add-button"
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Thêm hoạt động
        </Button>
        <ActivityForm
          visible={isModalVisible}
          onCancel={handleCancel}
          activities={activities}
        />
      </div>
      <div className="flex-container-card">
        <div className="flex-item card-warning">
          <Card
            title="Nhắc nhở"
            bordered={false}
            style={{ backgroundColor: "#8fbcdd" }}
          >
            <p>Đã 1 tuần không cập nhật hoạt động</p>
          </Card>
        </div>
        <div className="flex-item act-list">
          <div className="act1">
            <div className="act-name">
              Học thiết kế Web
              <Tag className="tag">IT</Tag>
              <span className="time">08:00 - 11:30</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
          <div className="act1">
            <div className="act-name">
              Học từ vựng N3+
              <Tag className="tag">Ngoại ngữ</Tag>
              <span className="time">14:00 - 15:30</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
          <div className="act1">
            <div className="act-name">
              Luyện Shadowing
              <Tag className="tag">Ngoại ngữ</Tag>
              <span className="time">19:00 - 21:00</span>
            </div>
            <Button className="update-button">Cập nhật</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
