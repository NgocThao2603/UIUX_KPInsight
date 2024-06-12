import React from "react";
import {
  StarOutlined,
  StarFilled,
  CalendarOutlined,
  FieldTimeOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ShowActivityComponent = ({ id, activities, setActivities }) => {
  //Star
  const handleStarClick = (id) => {
    setActivities(
      activities.map((item) =>
        item.id === id ? { ...item, star: !item.star } : item
      )
    );
  };

  // Tìm hoạt động có id truyền vào
  const activity = activities.find((activity) => activity.id === id);

  if (!activity) {
    return <div>Không tìm thấy hoạt động</div>;
  }

  return (
    <div id="act-list-item">
      <div className="act-list-content-detail">
        <div className="act-list-header">
          <span className="act-list-tag">{activity.tag1}</span>
          <span className="act-list-tag">{activity.tag2}</span>
          <span
            className="act-list-star"
            style={{ cursor: "pointer" }}
            onClick={() => handleStarClick(activity.id)}
          >
            {activity.star ? (
              <StarFilled style={{ color: "gold" }} />
            ) : (
              <StarOutlined />
            )}
          </span>
        </div>
        <div className="act-list-content">
          <Link className="act-col-link" to="/activity-detail">
            <h3>{activity.content}</h3>
          </Link>
        </div>
        <div className="act-list-col-main-contain">
          <div className="act-list-date">
            <span className="act-list-icon-small">
              <CalendarOutlined />
            </span>
            <span>{activity.createdDate}</span>
          </div>
          <div className="act-list-time">
            <span className="act-list-icon-small">
              <FieldTimeOutlined />
            </span>
            <span>{activity.createTime}</span>
          </div>
          <div className="act-list-quantity">
            <span className="act-list-icon-small">
              <FileDoneOutlined />
            </span>
            <span>{activity.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowActivityComponent;
