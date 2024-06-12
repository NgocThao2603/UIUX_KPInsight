import React, { useState } from "react";
import { Button, Checkbox, Form, Modal, Select } from "antd";
import "./index.css";
const { Option } = Select;

const ActivityForm = ({ visible, onCancel, activities }) => {
  {
    /* Receive activities as a prop */
  }
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleTagChange = (value) => {
    setSelectedTag(value);
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

  const handleSubmit = () => {
    if (selectedActivities.length === 0) {
      alert("Vui lòng chọn ít nhất một hoạt động.");
    } else {
      // Handle submit logic here
      console.log("Selected activities:", selectedActivities);
      onCancel();
    }
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
        <Form.Item label="Chọn tag">
          <Select value={selectedTag} onChange={handleTagChange}>
            <Option value="IT">IT</Option>
            <Option value="Ngoại ngữ">Ngoại ngữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Chọn hoạt động">
          {selectedTag &&
            activities
              .filter((activity) => activity.tag === selectedTag)
              .map((activity) => (
                <div className="actForm">
                  <Checkbox
                    key={activity.id}
                    checked={selectedActivities.includes(activity.id)}
                    onChange={() => handleActivityChange(activity.id)}
                  >
                    {activity.name}
                  </Checkbox>
                </div>
              ))}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ActivityForm;
