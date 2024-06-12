import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Modal,
  Select,
  Input,
  TimePicker,
  message,
} from "antd";
import "./index.css";

const { Option } = Select;
const { TextArea } = Input;

const ActivityForm = ({ visible, onCancel, activities }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [notes, setNotes] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedTag("");
    setSelectedActivity("");
    setSelectedActivities([]);
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
    setSelectedActivity("");
    setSelectedActivities([]);
  };

  const handleActivitySelect = (value) => {
    setSelectedActivity(value);
    setSelectedActivities([]);
  };

  const handleActivityChange = (activityId) => {
    const index = selectedActivities.indexOf(activityId);
    if (index === -1) {
      setSelectedActivities([...selectedActivities, activityId]);
    } else {
      setSelectedActivities(
        selectedActivities.filter((id) => id !== activityId)
      );
    }
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleSubmit = () => {
    if (selectedActivities.length === 0) {
      message.error("Vui lòng chọn ít nhất một hoạt động.");
    } else {
      console.log(selectedTag);
      console.log("Selected activities:", selectedActivities[0]);
      console.log(activities[selectedActivities[0] - 1].name);
      console.log("Notes:", notes);
      console.log("Start time:", startTime ? startTime.format("HH:mm") : "");
      console.log("End time:", endTime ? endTime.format("HH:mm") : "");
      const activityInfo = {
        name: activities[selectedActivities[0] - 1].name,
        startTime: startTime,
        endTime: endTime,
        tag: selectedTag,
      };
      sessionStorage.setItem("activities", JSON.stringify(activityInfo));
      onCancel();
    }
  };

  const categories = {
    "Học tập": ["IT", "Ngoại ngữ"],
    "Xã hội": ["Tình nguyện"],
    "Cá nhân": ["Tài chính", "Sức khỏe", "Gia đình"],
  };

  return (
    <Modal
      title="Thêm hoạt động"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Thêm
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Chọn chủ đề" className="form-item">
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ minWidth: "300px" }}
          >
            {Object.keys(categories).map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {selectedCategory && (
          <Form.Item label="Chọn tag" className="form-item">
            <Select
              value={selectedTag}
              onChange={handleTagChange}
              style={{ minWidth: "300px" }}
            >
              {categories[selectedCategory].map((tag) => (
                <Option key={tag} value={tag}>
                  {tag}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        {selectedTag && (
          <Form.Item label="Chọn hoạt động" className="form-item">
            <Select
              value={selectedActivity}
              onChange={handleActivitySelect}
              style={{ minWidth: "300px" }}
            >
              {activities
                .filter((activity) => activity.tag === selectedTag)
                .map((activity) => (
                  <Option key={activity.id} value={activity.id}>
                    {activity.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        )}

        {selectedActivity && (
          <Form.Item label="Danh sách task" className="form-item">
            {activities
              .filter((activity) => activity.id === selectedActivity)
              .map((activity) => (
                <div key={activity.id} className="actForm">
                  <Checkbox
                    checked={selectedActivities.includes(activity.id)}
                    onChange={() => handleActivityChange(activity.id)}
                  >
                    {activity.task}
                  </Checkbox>
                </div>
              ))}
          </Form.Item>
        )}

        <Form.Item label="Chọn thời gian" className="form-item">
          <TimePicker
            value={startTime}
            onChange={handleStartTimeChange}
            format="HH:mm"
            placeholder="Thời gian bắt đầu"
            style={{ marginRight: 10 }}
          />
          <TimePicker
            value={endTime}
            onChange={handleEndTimeChange}
            format="HH:mm"
            placeholder="Thời gian kết thúc"
          />
        </Form.Item>

        <Form.Item label="Ghi chú" className="form-item">
          <TextArea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ActivityForm;
