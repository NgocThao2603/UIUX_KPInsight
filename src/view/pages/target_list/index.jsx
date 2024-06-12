import "./index.css";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Select, Tag, Pagination, message, Modal } from "antd";
import {
  StarOutlined,
  StarFilled,
  CloseCircleOutlined,
} from "@ant-design/icons";
import ShowDataComponent from "./show_data_component";
const { Option } = Select;

function Target_list() {
  //Data
  const [datas, setDatas] = useState([
    {
      id: 0,
      area: "Học tập",
      checked: false,
      content: "Đạt 3.0/4.0 kì 2023.2",
      // tag: (
      //     <Tag id=""color="#074979"></Tag>
      // ),
      createdDate: "2023/08/01",
      star: true,
    },
    {
      id: 1,
      area: "Học tập",
      checked: false,
      content: "Đạt chứng chỉ TOEIC 500+",
      tag: (
        <Tag id="tag-nn" color="magenta">
          Ngoại ngữ
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 2,
      area: "Học tập",
      checked: false,
      content: "Đạt giải cuộc thi She Codes 2023",
      tag: (
        <Tag id="tag-it" color="red">
          IT
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 3,
      area: "Xã hội",
      checked: false,
      content: "Tích cực hoạt động CLB Sách",
      tag: (
        <Tag id="tag-clb" color="magenta">
          CLB
        </Tag>
      ),
      createdDate: "2023/08/01",
      star: false,
    },
    // {
    //   id: 4,
    //   area: "Xã hội",
    //   checked: false,
    //   content: "Tham gia tình nguyện 'Mùa hè xanh'",
    //   // tag: (
    //   //     <Tag color="#074979">Ngoại ngữ</Tag>
    //   // ),
    //   createdDate: "2023/07/30",
    //   star: true,
    // },
    {
      id: 5,
      area: "Xã hội",
      checked: false,
      content: "Tham gia trải nghiệm làm gốm",
      // tag: (
      //     <Tag color="#074979">IT</Tag>
      // ),
      createdDate: "2023/07/30",
      star: false,
    },
    {
      id: 6,
      area: "Cá nhân",
      checked: false,
      content: "Chăm sóc sức khỏe",
      tag: (
        <Tag id="tag-sk" color="green">
          Sức khỏe
        </Tag>
      ),
      createdDate: "2023/08/01",
      star: false,
    },
    {
      id: 7,
      area: "Cá nhân",
      checked: false,
      content: "Dành thời gian cho gia đình",
      tag: (
        <Tag id="tag-gd" color="red">
          Gia đình
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: true,
    },
    {
      id: 8,
      area: "Cá nhân",
      checked: false,
      content: "Quản lý chi tiêu hiệu quả",
      tag: (
        <Tag id="tag-tc" color="orange">
          Tài chính
        </Tag>
      ),
      createdDate: "2023/07/30",
      star: false,
    },
    // {
    //   id: 9,
    //   area: "Học tập",
    //   checked: true,
    //   content: "Đạt KPA 3.0/4.0 kì 2022.2",
    //   // tag: (
    //   //   <Tag id="tag-it" color="red">
    //   //     IT
    //   //   </Tag>
    //   // ),
    //   createdDate: "2023/02/15",
    //   star: true,
    // },
    // {
    //   id: 10,
    //   area: "Học tập",
    //   checked: true,
    //   content: "Đạt chứng chỉ JLPT N3",
    //   tag: (
    //     <Tag id="tag-nn" color="magenta">
    //       Ngoại ngữ
    //     </Tag>
    //   ),
    //   createdDate: "2023/02/15",
    //   star: false,
    // },
    // {
    //   id: 11,
    //   area: "Học tập",
    //   checked: true,
    //   content: "Hoàn thành khóa học ReactJS",
    //   tag: (
    //     <Tag id="tag-it" color="red">
    //       IT
    //     </Tag>
    //   ),
    //   createdDate: "2023/02/15",
    //   star: false,
    // },

    {
      id: 12,
      area: "Cá nhân",
      checked: false,
      content: "Thiền định",
      tag: (
        <Tag id="tag-sk" color="green">
          Sức khỏe
        </Tag>
      ),
      createdDate: "2023/05/10",
      star: true,
    },
    {
      id: 13,
      area: "Cá nhân",
      checked: false,
      content: "Đọc sách mỗi ngày",
      // tag: (
      //   <Tag id="tag-ss" color="blue">
      //     Sách
      //   </Tag>
      // ),
      createdDate: "2023/05/11",
      star: true,
    },
    {
      id: 14,
      area: "Học tập",
      checked: false,
      content: "Tham gia khóa học Machine Learning",
      tag: (
        <Tag id="tag-it" color="red">
          IT
        </Tag>
      ),
      createdDate: "2023/04/20",
      star: false,
    },
    {
      id: 15,
      area: "Học tập",
      checked: false,
      content: "Viết bài nghiên cứu khoa học",
      // tag: (
      //   <Tag id="tag-nckh" color="brown">
      //     NCKH
      //   </Tag>
      // ),
      createdDate: "2023/03/15",
      star: true,
    },
    // {
    //   id: 16,
    //   area: "Kỹ năng",
    //   checked: true,
    //   content: "Tham gia khóa học nấu ăn",
    //   // tag: (
    //   //   <Tag id="tag-cc" color="yellow">
    //   //     Ẩm thực
    //   //   </Tag>
    //   // ),
    //   createdDate: "2023/06/01",
    //   star: false,
    // },
    {
      id: 17,
      area: "Kỹ năng",
      checked: false,
      content: "Tham gia khóa học giao tiếp",
      // tag: (
      //   <Tag id="tag-gt" color="orange">
      //     Giao tiếp
      //   </Tag>
      // ),
      createdDate: "2023/06/10",
      star: false,
    },
    {
      id: 18,
      area: "Kỹ năng",
      checked: false,
      content: "Học kỹ năng quản lý thời gian",
      tag: (
        <Tag id="tag-qt" color="blue">
          Quản lý thời gian
        </Tag>
      ),
      createdDate: "2023/07/01",
      star: true,
    },
    {
      id: 19,
      area: "Kỹ năng",
      checked: false,
      content: "Học kỹ năng làm việc nhóm",
      // tag: (
      //   <Tag id="tag-lamviecnhom" color="lime">
      //     Làm việc nhóm
      //   </Tag>
      // ),
      createdDate: "2023/08/20",
      star: false,
    },
    // {
    //   id: 20,
    //   area: "Kỹ năng",
    //   checked: true,
    //   content: "Tham gia buổi hòa nhạc",
    //   // tag: (
    //   //   <Tag id="tag-hn" color="purple">
    //   //     Âm nhạc
    //   //   </Tag>
    //   // ),
    //   createdDate: "2023/07/20",
    //   star: false,
    // },
    // {
    //   id: 21,
    //   area: "Kỹ năng",
    //   checked: true,
    //   content: "Chơi cờ vua với bạn bè",
    //   // tag: (
    //   //   <Tag id="tag-cv" color="black">
    //   //     Cờ vua
    //   //   </Tag>
    //   // ),
    //   createdDate: "2023/07/25",
    //   star: false,
    // },
    {
      id: 22,
      area: "Kỹ năng",
      checked: false,
      content: "Học kỹ năng thuyết trình",
      // tag: (
      //   <Tag id="tag-thuyettrinh" color="cyan">
      //     Thuyết trình
      //   </Tag>
      // ),
      createdDate: "2023/08/10",
      star: true,
    },
    {
      id: 23,
      area: "Xã hội",
      checked: false,
      content: "Tham gia chiến dịch bảo vệ môi trường",
      // tag: (
      //   <Tag id="tag-mt" color="brown">
      //     Môi trường
      //   </Tag>
      // ),
      createdDate: "2023/08/15",
      star: false,
    },
    // {
    //   id: 24,
    //   area: "Xã hội",
    //   checked: true,
    //   content: "Tham gia hội thảo phát triển bền vững",
    //   // tag: (
    //   //   <Tag id="tag-ptbv" color="purple">
    //   //     Phát triển bền vững
    //   //   </Tag>
    //   // ),
    //   createdDate: "2023/08/20",
    //   star: true,
    // },
  ]);

  //Star
  const handleStarClick = (id) => {
    setDatas(
      datas.map((item) =>
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
      setDatas(datas.filter((item) => item.area !== Area));
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

  //Choose label - select
  const [selectedTag, setSelectedTag] = useState("Tất cả nhãn");
  const handleTagChange = (value) => {
    setSelectedTag(value);
  };

  //Pagigation
  const [current, setCurrent] = useState(1);
  const indexPerPage = 10;
  const handlePagination = (page) => {
    setCurrent(page);
  };

  // Filtered data based on selected tag
  const filteredData = datas.filter(
    (data) =>
      selectedTag === "Tất cả nhãn" ||
      (data.tag && data.tag.props.children === selectedTag)
  );

  // Paginate data
  const indexOfLastData = current * indexPerPage;
  const indexOfFirstData = indexOfLastData - indexPerPage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  // Render filtered data
  const getFilteredData = () => {
    if (selectedTag === "Tất cả nhãn") {
      return (
        <div>
          <ShowDataComponent data={datas} setDatas={setDatas} />
          <Pagination
            className="target-list-pagination-container"
            current={current}
            total={datas.length}
            pageSize={indexPerPage}
            onChange={handlePagination}
          />
        </div>
      );
    } else {
      return (
        <div className="target-list-wrap">
          {filteredData.map((item) => (
            <div>
              {/* <div className="target-list-title">
                <div id="goal-list-title">{item.area}</div>
                <Link
                  to="/target_detail"
                  className="target-list-icon"
                  id="goal-list-title-icon"
                >
                  <EditOutlined />
                </Link>
                <LocalizedModal className="target-list-icon" Area={item.area} />
              </div> */}
              <div id="target-goalList-item" key={item.id}>
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
            </div>
          ))}
          <Pagination
            className="target-list-pagination-container"
            current={current}
            total={filteredData.length}
            pageSize={indexPerPage}
            onChange={handlePagination}
          />
        </div>
      );
    }
  };

  // Effect to set default selected tag and trigger filter on initial load
  useEffect(() => {
    handleTagChange("Tất cả nhãn");
  }, []);

  return (
    <div className="target-list-frame">
      <div className="target-list-title">
        <div id="kpi-target-title">Mục tiêu KPI</div>
        <div id="kpi-target-select-container">
          <Select
            defaultValue="Tất cả nhãn"
            style={{
              width: 150,
            }}
            value={selectedTag}
            onChange={handleTagChange}
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
              {
                label: <span>Kỹ năng</span>,
                title: "Kỹ năng",
                options: [
                  {
                    label: <span>Quản lý thời gian</span>,
                    value: "Quản lý thời gian",
                  },
                ],
              },
            ]}
          />
        </div>
      </div>

      {getFilteredData()}
    </div>
  );
}
export default Target_list;
