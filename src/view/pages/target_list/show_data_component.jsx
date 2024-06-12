import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import {
  EllipsisOutlined,
  CloseCircleOutlined,
  EditOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import ShowDetailComponent from "./show_detail_component";

const ShowDataComponent = ({ data, setDatas }) => {
  //Group by area
  const groupedData = data.reduce((acc, item) => {
    (acc[item.area] = acc[item.area] || []).push(item);
    return acc;
  }, {});

  //Star
  const handleStarClick = (id) => {
    setDatas(
      data.map((item) =>
        item.id === id ? { ...item, star: !item.star } : item
      )
    );
  };

  //Delete confirm - modal
  const LocalizedModal = ({ Area }) => {
    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
      setOpenModal(true);
    };
    const handleModalCancel = () => {
      setOpenModal(false);
      message.error("Hủy xóa mục tiêu!");
    };
    const handleModalOk = () => {
      setOpenModal(false);
      setDatas(data.filter((item) => item.area !== Area));
      message.success("Đã xóa mục tiêu!");
    };
    return (
      <>
        <span
          onClick={showModal}
          className="target-list-icon"
          id="goal-list-title-icon"
        >
          <CloseCircleOutlined />
        </span>
        <Modal
          title="Xóa mục tiêu"
          open={openModal}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="Xác nhận"
          cancelText="Hủy"
        >
          <p>Xác nhận xóa mục tiêu</p>
        </Modal>
      </>
    );
  };

  //Show detail
  const [selectedArea, setSelectedArea] = useState(null);
  const showDetail = (area) => {
    setSelectedArea(area);
  };

  return (
    <div>
      {Object.keys(groupedData).map((area) => (
        <div key={area} className="target-list-wrap">
          <div className="target-list-title">
            <div id="goal-list-title">{area}</div>
            <Link
              to={{ pathname: "/target_detail", state: { area } }}
              className="target-list-icon"
              id="goal-list-title-icon"
            >
              <EditOutlined />
            </Link>
            {/* <EditOutlined
              className="target-list-icon"
              id="goal-list-title-icon"
              onClick={() => showDetail(area)}
            /> */}
            <LocalizedModal className="target-list-icon" Area={area} />
          </div>

          <div className="target-list-item">
            {groupedData[area].map((item) => (
              <div key={item.id} id="target-goalList-item">
                <div className="target-list-content">{item.content}</div>
                <div className="target-list-content-detail">
                  <div className="target-list-tag">{item.tag}</div>
                  <div className="target-list-date">{item.createdDate}</div>
                  <div
                    className="target-list-icon"
                    onClick={() => handleStarClick(item.id)}
                  >
                    {item.star ? (
                      <StarFilled style={{ color: "gold" }} />
                    ) : (
                      <StarOutlined />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* <Link
              to={{ pathname: "/target_detail", state: { area } }}
              className="target-list-icon"
              id="target-list-see-more"
            >
              <EllipsisOutlined />
            </Link> */}
            {/* <EllipsisOutlined
              className="target-list-icon"
              id="goal-list-see-more"
              onClick={() => showDetail(area)}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDataComponent;
