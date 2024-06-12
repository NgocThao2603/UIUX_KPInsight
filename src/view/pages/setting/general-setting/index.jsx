import "./index.css";
import React from "react";
import { Switch, Select } from "antd";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
function GeneralSetting() {
  return (
    <div className="general-container">
      <div className="general-navbar">{/* <NavbarOption /> */}</div>
      <div className="general-content">
        <h3 className="general-header">Cài đặt chung</h3>
        <div className="general-body">
          <div className="general-secret">
            <div className="general-line"></div>
            <div className="general-secret-bound">
              <div className="general-name">Bảo mật</div>
              <div className="general-secret-content">
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Thông báo hoạt động bất thường
                  </div>
                  <div className="general-switch">
                    <Switch
                      defaultChecked
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Thông báo khi đăng nhập trên thiết bị khác
                  </div>
                  <div className="general-switch">
                    <Switch
                      defaultChecked
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Thông báo bảo mật đối với các tài khoản liên kết
                    (google,facebook)
                  </div>
                  <div className="general-switch">
                    <Switch
                      defaultChecked
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="general-system">
            <div className="general-line"></div>
            <div className="general-secret-bound">
              <div className="general-name">Hệ thống</div>
              <div className="general-secret-content">
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Thông báo trạng thái KPI
                  </div>
                  <div className="general-switch">
                    <Select
                      defaultValue="day"
                      className="general-setting-select-mobile"
                      style={{
                        width: 120,
                        border: "2px solid #074979",
                        borderRadius: "10px",
                      }}
                      //   onChange={handleChange}
                      options={[
                        {
                          value: "day",
                          label: "Ngày",
                        },
                        {
                          value: "week",
                          label: "Tuần",
                        },
                        {
                          value: "ten",
                          label: "10 ngày",
                        },
                        {
                          value: "twenty",
                          label: "20 ngày",
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Thông báo, cảnh báo về những hoạt động có ảnh hưởng đến KPI
                  </div>
                  <div className="general-switch">
                    <Switch
                      unCheckedChildren
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
                <div className="general-secret-wrap">
                  <div className="general-act-name">
                    Nhắc nhở cập nhập hoạt động, mục tiêu KPI
                  </div>
                  <div className="general-switch">
                    <Switch
                      unCheckedChildren
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="general-mode">
            <div className="general-line"></div>
            <div className="general-secret-bound">
              <div className="general-name">Hiển thị</div>
              <div className="general-secret-content">
                <div className="general-secret-wrap">
                  <div className="general-act-name">Chế độ tối</div>
                  <div className="general-switch">
                    <Switch
                      unCheckedChildren
                      onChange={onChange}
                      className="general-switch"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralSetting;
