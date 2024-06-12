import "./index.css";
import NavbarStatus from "../../../components/navbar/navbar-status";
import React, { useState } from "react";
import { Flex, Select, Tag, Input, Button } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

function ActivityDetail() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // States for editing
  const [isEditing, setIsEditing] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEditClick = (index, study) => {
    setIsEditing(index);
    setEditValues(study);
  };

  const handleSaveClick = (index) => {
    const updateStudies = (studies) =>
      studies.map((study, idx) =>
        idx === index ? { ...study, ...editValues } : study
      );

    if (index < studies_html.length) {
      setStudiesHtml(updateStudies);
    } else if (index < studies_html.length + studies_js.length) {
      setStudiesJs(updateStudies);
    } else {
      setStudiesFigma(updateStudies);
    }

    setIsEditing(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const [studies_html, setStudiesHtml] = useState([
    {
      content: "F8 HTML, CSS cơ bản",
      createdDate: "2024/03/01",
      createdTime: "09:00-10:00",
      star: true,
    },
    {
      content: "HTML, CSS nâng cao",
      createdDate: "2024/03/30",
      createdTime: "20:00-24:00",
      star: false,
    },
  ]);

  const [studies_js, setStudiesJs] = useState([
    {
      content: "F8 ReactJS cơ bản",
      createdDate: "2024/04/01",
      createdTime: "15:00-17:00",
      star: true,
    },
    {
      content: "F8 ReactJS nâng cao",
      createdDate: "2024/04/05",
      createdTime: "16:00-18:00",
    },
    {
      content: "Lập trình với ReactJS",
      createdDate: "2024/04/10",
      createdTime: "09:00-10:00",
    },
  ]);

  const [studies_figma, setStudiesFigma] = useState([
    {
      content: "Làm quen với Figma",
      createdDate: "2024/04/01",
      createdTime: "11:00-15:00",
    },
    {
      content: "Figma nâng cao",
      createdDate: "2024/04/04",
      createdTime: "19:00-21:00",
    },
  ]);

  const renderStudies = (studies, baseIndex) => {
    return (
      <ul id="task-list">
        {studies.map((study, index) => (
          <li key={index}>
            <span className="activity-detail-content">{study.content}</span>
            {isEditing === baseIndex + index ? (
              <div className="activity-detail-content-detail">
                <Input
                  name="createdTime"
                  value={editValues.createdTime}
                  onChange={handleInputChange}
                  style={{ width: 100 }}
                />
                <Input
                  name="createdDate"
                  value={editValues.createdDate}
                  onChange={handleInputChange}
                  style={{ width: 100 }}
                />
                <Button onClick={() => handleSaveClick(baseIndex + index)}>
                  Lưu
                </Button>
              </div>
            ) : (
              <span className="activity-detail-content-detail">
                <span className="activity-detail-date">
                  {study.createdTime}
                </span>
                <span className="activity-detail-date">
                  {study.createdDate}
                </span>
                <EditOutlined
                  onClick={() => handleEditClick(baseIndex + index, study)}
                  style={{ marginLeft: 8, cursor: "pointer" }}
                />
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="activity-detail-container">
        <div className="nav-act-detail">
          <NavbarStatus />
        </div>

        <div className="activity-detail-frame">
          <div className="activity-detail-wrap">
            <div className="activity-detail-doctor">
              <div className="activity-detail-tag">
                <Tag id="act-tag" color="volcano">
                  IT
                </Tag>
              </div>
              <div className="activity-detail-name">
                <span id="act-title">Học thiết kế Web</span>
              </div>
              <div className="activity-detail-icon">
                {/* <span className="act-icon" id="act-title-icon">
                  <EditOutlined />
                </span> */}
                <Link className="header-link" to="/activity-list">
                  <span className="act-icon" id="act-title-icon">
                    <CloseCircleOutlined />
                  </span>
                </Link>
              </div>
            </div>

            <div className="activity-detail-item">
              <div className="activity-detail-item-header">
                <h4>Học HTML, CSS</h4>
                <span id="checkbox-act">
                  <Checkbox {...label} defaultChecked />
                </span>
              </div>
              <div className="activity-detail-tasks">
                {renderStudies(studies_html, 0)}
              </div>
            </div>

            <div className="activity-detail-item">
              <div className="activity-detail-item-header">
                <h4>Học ReactJS</h4>
                <span id="checkbox-act">
                  <Checkbox {...label} defaultChecked />
                </span>
              </div>
              <div className="activity-detail-tasks">
                {renderStudies(studies_js, studies_html.length)}
              </div>
            </div>

            <div className="activity-detail-item">
              <div className="activity-detail-item-header">
                <h4>Học thiết kế Figma</h4>
                <span id="checkbox-act">
                  <Checkbox {...label} />
                </span>
              </div>
              <div className="activity-detail-tasks">
                {renderStudies(
                  studies_figma,
                  studies_html.length + studies_js.length
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetail;
