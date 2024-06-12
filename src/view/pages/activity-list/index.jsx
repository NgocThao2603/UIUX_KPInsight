import "./index.css";
import React, { useState } from "react";
import { Select, Col, Row, Pagination, Tag } from "antd";
import NavbarStatus from "../../../components/navbar/navbar-status";
import ShowActivitiesComponent from "./show-activities";

function ActivityList() {
  // Data
  const [activities, setActivities] = useState([
    {
      id: 0,
      content: "Học thiết kế Web",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="volcano">
          IT
        </Tag>
      ),
      createdDate: "2024/01/15",
      createTime: "35:00",
      quantity: "3/5",
      star: false,
    },
    {
      id: 1,
      content: "Học từ vựng N3",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2024/02/01",
      createTime: "40:00",
      quantity: "300/880",
      star: false,
    },
    {
      id: 2,
      content: "Project ITSS",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="volcano">
          IT
        </Tag>
      ),
      createdDate: "2024/03/21",
      createTime: "40:00",
      quantity: "15/25",
      star: false,
    },
    {
      id: 3,
      content: "Học ngữ pháp N3",
      tag1: (
        <Tag id="col-tag-done" color="#fff">
          Đã hoàn thành
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2024/04/01",
      createTime: "19:00",
      quantity: "15/15",
      star: false,
    },
    {
      id: 4,
      content: "Luyện Shadowing",
      tag1: (
        <Tag id="col-tag-done" color="#fff">
          Đã hoàn thành
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2024/02/21",
      createTime: "18:00",
      quantity: "10/10",
      star: false,
    },
    {
      id: 5,
      content: "Project OOP",
      tag1: (
        <Tag id="col-tag-done" color="#fff">
          Đã hoàn thành
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="volcano">
          IT
        </Tag>
      ),
      createdDate: "2024/01/05",
      createTime: "50:00",
      quantity: "15/15",
      star: false,
    },
    // Thêm các hoạt động cho trang 2
    {
      id: 6,
      content: "Học tiếng Anh giao tiếp",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2024/05/10",
      createTime: "30:00",
      quantity: "50/100",
      star: false,
    },
    {
      id: 7,
      content: "Đọc sách",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="green">
          Sức khỏe
        </Tag>
      ),
      createdDate: "2024/03/15",
      createTime: "15:00",
      quantity: "2/5",
      star: false,
    },
    {
      id: 8,
      content: "Lập trình Java",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="volcano">
          IT
        </Tag>
      ),
      createdDate: "2024/02/28",
      createTime: "45:00",
      quantity: "20/30",
      star: false,
    },
    {
      id: 9,
      content: "Tham gia CLB",
      tag1: (
        <Tag id="col-tag-1" color="#074979">
          Đang thực hiện
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="purple">
          CLB
        </Tag>
      ),
      createdDate: "2024/05/01",
      createTime: "90:00",
      quantity: "5/7",
      star: false,
    },
    {
      id: 10,
      content: "Tập gym",
      tag1: (
        <Tag id="col-tag-done" color="#fff">
          Đã hoàn thành
        </Tag>
      ),
      tag2: (
        <Tag id="col-tag-2" color="green">
          Sức khỏe
        </Tag>
      ),
      createdDate: "2024/04/10",
      createTime: "60:00",
      quantity: "10/10",
      star: false,
    },
  ]);

  // Choose label - select
  const [selectedTag, setSelectedTag] = useState("Tất cả nhãn");

  const handleLabel = (value) => {
    setSelectedTag(value);
  };

  // Pagination
  const [current, setCurrent] = useState(1);
  const activitiesPerPage = 6; // Số lượng hoạt động hiển thị trên mỗi trang

  const handlePagination = (page) => {
    setCurrent(page);
  };

  // Star
  const handleStarClick = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, star: !activity.star } : activity
      )
    );
  };

  // Filter activities based on selectedTag
  const filteredActivities =
    selectedTag === "Tất cả nhãn"
      ? activities
      : activities.filter(
          (activity) => activity.tag2.props.children === selectedTag
        );

  // Paginate activities
  const indexOfLastActivity = current * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  return (
    <div className="activity-list-container">
      <div className="nav-act-detail">
        <NavbarStatus />
      </div>
      <div className="activity-list-frame">
        <span id="activity-list-select-container">
          <Select
            defaultValue="Tất cả nhãn"
            style={{
              width: 150,
            }}
            onChange={handleLabel}
            options={[
              {
                label: <span>Tất cả nhãn</span>,
                value: "Tất cả nhãn",
              },
              {
                label: <span>Học tập</span>,
                title: "Học tập",
                options: [
                  {
                    label: <span>IT</span>,
                    value: "IT",
                  },
                  {
                    label: <span>Ngoại ngữ</span>,
                    value: "Ngoại ngữ",
                  },
                ],
              },
              {
                label: <span>Xã hội</span>,
                title: "Xã hội",
                options: [
                  {
                    label: <span>CLB</span>,
                    value: "CLB",
                  },
                ],
              },
              {
                label: <span>Cá nhân</span>,
                title: "Cá nhân",
                options: [
                  {
                    label: <span>Sức khỏe</span>,
                    value: "Sức khỏe",
                  },
                  {
                    label: <span>Gia đình</span>,
                    value: "Gia đình",
                  },
                  {
                    label: <span>Tài chính</span>,
                    value: "Tài chính",
                  },
                ],
              },
            ]}
          />
        </span>

        <div className="activity-list-grid-container" style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            {currentActivities.map((activity, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className="act-list-col-wrap"
              >
                <div id="act-list-col">
                  <ShowActivitiesComponent
                    id={activity.id}
                    activities={activities}
                    setActivities={setActivities}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <span className="act-pagi">
          <Pagination
            current={current}
            total={filteredActivities.length}
            pageSize={activitiesPerPage}
            onChange={handlePagination}
          />
        </span>
      </div>
    </div>
  );
}

export default ActivityList;
