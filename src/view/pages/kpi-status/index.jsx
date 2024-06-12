import React, { useEffect, useRef, useState } from "react";
import { Select, Tag, Collapse } from "antd";
import Chart from "chart.js/auto";
import "./index.css"; // Import tệp CSS tùy chỉnh
import NavbarStatus from "../../../components/navbar/navbar-status";
import SpeedChart from "../../../components/speed-chart";
import ConfettiEffect from "../../../components/fileworks";
import PieChart from "../../../components/piechart";
import Grid from "@mui/material/Unstable_Grid2";
import AppCurrentKPI from "../home v2/app-current-kpi";
import kpiData from "../../../data/kpi-data";

const { Panel } = Collapse;
const KpiStatus = () => {
  const [selectedMonth, setSelectedMonth] = useState(4);
  const [monthData, setMonthData] = useState(
    kpiData.filter((item) => item.month === selectedMonth)
  );
  const [realData, setRealData] = useState(monthData);
  const [realLevelData, setRealLevelData] = useState(realData);
  const [selectedTag, setSelectedTag] = useState("Tất cả");
  const [selectedTagLevel, setSelectedTagLevel] = useState("Tất cả");
  const [hover, setHover] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);

  //Select chọn nhãn:
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  //Tính phần trăm trung bình theo từng tag
  const calculateAveragePercent = (data) => {
    const totalPercent = data.reduce((sum, item) => sum + item.percent, 0);
    return data.length > 0 ? (totalPercent / data.length).toFixed(1) : 0;
  };

  const averagePercent = calculateAveragePercent(realData);
  const filteredActivities = realData.filter((item) => {
    return item.percent < 0;
  });

  //lọc theo month, tag, level
  // const handleMonthChange = (month) => {
  //   setSelectedMonth(month);
  //   const filteredMonthData = kpiData.filter((item) => item.month === month);
  //   setMonthData(filteredMonthData);
  //   setRealData(filteredMonthData);
  //   setRealLevelData(filteredMonthData);
  // };

  // const handleTagChange = (value) => {
  //   setSelectedTag(value);
  //   if (value === "Tất cả") {
  //     setRealData(monthData);
  //     setRealLevelData(monthData);
  //     return;
  //   }
  //   const filteredTagData = monthData.filter((item) => item.tag === value);
  //   setRealData(filteredTagData);
  //   setRealLevelData(filteredTagData);
  // };

  // const handleTagLevelChange = (value) => {
  //   setSelectedTagLevel(value);
  //   if (value === "Tất cả") {
  //     setRealLevelData(realData);
  //     return;
  //   }
  //   setRealLevelData(
  //     realData.filter(
  //       (item) =>
  //         item.percent >= valueRanges[value].min &&
  //         item.percent < valueRanges[value].max
  //     )
  //   );
  // };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setSelectedTag("Tất cả");
    setSelectedTagLevel("Tất cả");
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
    setSelectedTagLevel("Tất cả");
  };

  const handleTagLevelChange = (value) => {
    setSelectedTagLevel(value);
  };

  const valueRanges = {
    "Xuất sắc": { min: 100, max: Infinity },
    Tốt: { min: 50, max: 100 },
    Khá: { min: 0, max: 50 },
    "Trung bình": { min: -50, max: 0 },
    Yếu: { min: -Infinity, max: -50 },
  };

  useEffect(() => {
    const filteredMonthData = kpiData.filter(
      (item) => item.month === selectedMonth
    );
    const filteredTagData =
      selectedTag === "Tất cả"
        ? filteredMonthData
        : filteredMonthData.filter((item) => item.tag === selectedTag);
    const filteredLevelData =
      selectedTagLevel === "Tất cả"
        ? filteredTagData
        : filteredTagData.filter(
            (item) =>
              item.percent >= valueRanges[selectedTagLevel].min &&
              item.percent < valueRanges[selectedTagLevel].max
          );

    setMonthData(filteredMonthData);
    setRealData(filteredTagData);
    setRealLevelData(filteredLevelData);
  }, [selectedMonth, selectedTag]);

  useEffect(() => {
    const filteredMonthData = kpiData.filter(
      (item) => item.month === selectedMonth
    );
    const filteredTagData =
      selectedTag === "Tất cả"
        ? filteredMonthData
        : filteredMonthData.filter((item) => item.tag === selectedTag);
    const filteredLevelData =
      selectedTagLevel === "Tất cả"
        ? filteredTagData
        : filteredTagData.filter(
            (item) =>
              item.percent >= valueRanges[selectedTagLevel].min &&
              item.percent < valueRanges[selectedTagLevel].max
          );

    setRealLevelData(filteredLevelData);
  }, [selectedTagLevel]);

  // const handleTagLevelChange = (value) => {
  //   setSelectedTagLevel(value);
  //   if (value === "Tất cả") {
  //     setRealLevelData(realData); // Gán lại realData khi chọn "Tất cả"
  //   } else {
  //     // Lọc dữ liệu từ realData dựa trên selectedTagLevel và gán vào realLevelData
  //     const filteredData = realData.filter((item) => item.tag === value);
  //     setRealLevelData(filteredData);
  //   }
  // };

  const [activeKey, setActiveKey] = useState([]);

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  // useEffect(() => {
  //   console.log("Active key changed:", activeKey);
  //   // Perform any actions based on the change in activeKey
  // }, [activeKey, realLevelData]);

  //Tạo biểu đồ cột:
  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: realData.map((item) => item.label),
        datasets: [
          {
            label: "Đã thực hiện",
            data: realData.map((item) => item.percent),
            backgroundColor: "#074979",
            borderWidth: 0,
            borderSkipped: false,
          },
          {
            label: "Mục tiêu",
            data: Array.from({ length: realData.length }, () => 100),
            backgroundColor: "#B8D3E7",
            borderWidth: 0,
            borderSkipped: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              display: false, // Ẩn các nhãn của trục x
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          scrollbar: {
            display: true,
            axis: "x",
            maxVisible: 5, // Chỉ hiển thị 5 cột ghép trên biểu đồ
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            maxBarThickness: 100,
          },
        },
        layout: {
          padding: {
            right: 20,
          },
        },
        interaction: {
          mode: "index",
          intersect: true,
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [realData]);
  //Firework
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFireWorks = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    setHover(true);
    setTimeout(() => {
      setHover(false);
    }, 5000);
  };
  return (
    <div>
      <div>
        <NavbarStatus onMonthChange={handleMonthChange} />
        <h1 className="namepage">Trạng thái KPI</h1>
        <div className="select-tag">
          <Select
            defaultValue="Tất cả"
            style={{
              width: 150,
            }}
            value={selectedTag}
            onChange={handleTagChange}
            options={[
              {
                label: <span>Tất cả</span>,
                value: "Tất cả",
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
                title: "Học tập",
                options: [
                  {
                    label: <span>CLB</span>,
                    value: "CLB",
                  },
                  {
                    label: <span>Tình nguyện</span>,
                    value: "Tình nguyện",
                  },
                ],
              },
              {
                label: <span>Cá nhân</span>,
                title: "Cá nhân",
                options: [
                  {
                    label: <span>Gia đình</span>,
                    value: "Gia đình",
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="general-kpi">
          <h1 className="name2">Tổng quan</h1>
          <div className="two-chart">
            <div className="sum-rate-wrap">
              {/* <div className="sum-rate">
              <div className="sum-rate-text">{percentage}%</div>
            </div> */}

              <PieChart className="piechart" percentage={averagePercent} />
            </div>

            <div className="columnchart-container">
              {/* Áp dụng class vào container của biểu đồ */}
              <canvas ref={chartRef}></canvas>
            </div>
            {/* <Grid xs={12} md={6} lg={4} className="kpi-status-current">
            <AppCurrentKPI
              className="kpi-status-current-chart"
              chart={{
                series: [
                  { label: "Học thiết kế giao diện", value: 66.7 },
                  { label: "Làm Project GR1", value: -50 },
                  { label: "Học ReactJS", value: 207.7 },
                  { label: "Làm BT ITSS", value: 250 },
                  { label: "Code màn Figma", value: -150 },
                  { label: "Học Git", value: 28.6 },
                ],
              }}
            />
          </Grid> */}
          </div>{" "}
        </div>

        <div className="detailKPI">
          <div className="detail-tittle">Chi tiết KPI</div>
          <div className="select-level">
            <Select
              defaultValue="Tất cả"
              style={{
                width: 150,
              }}
              value={selectedTagLevel}
              // activeKey={activeKey}
              onChange={handleTagLevelChange}
              options={[
                {
                  label: <span>Tất cả</span>,
                  value: "Tất cả",
                },
                {
                  label: <span>Xuất sắc</span>,
                  value: "Xuất sắc",
                },
                {
                  label: <span>Tốt</span>,
                  value: "Tốt",
                },
                {
                  label: <span>Khá</span>,
                  value: "Khá",
                },
                {
                  label: <span>Trung bình</span>,
                  value: "Trung bình",
                },
                {
                  label: <span>Yếu</span>,
                  value: "Yếu",
                },
              ]}
            />
          </div>
          <div className="suggest">
            <h1 className="suggest-name">
              Đề xuất hoạt động nên ưu tiên hoàn thành
            </h1>
            <h1 className="suggest-notice">
              (Dành cho những hoạt động chưa đạt mức giá trị tối thiểu khi đã
              qua 3/4 giai đoạn)
            </h1>
            <div className="suggest-data">
              {filteredActivities.map((item, index) => (
                <div key={index} className="activity-name">
                  <div className="activity-name-sub">{item.label}</div>
                  <div className="activity-name-tag">
                    <Tag
                      color={
                        item.percent >= 100
                          ? "geekblue"
                          : item.percent >= 50
                          ? "green"
                          : item.percent >= 0
                          ? "gold"
                          : item.percent >= -50
                          ? "volcano"
                          : "red"
                      }
                      style={{
                        fontSize: "15px",
                      }}
                    >
                      {item.percent >= 100
                        ? "Xuất sắc"
                        : item.percent >= 50
                        ? "Tốt"
                        : item.percent >= 0
                        ? "Khá"
                        : item.percent >= -50
                        ? "Trung bình"
                        : "Yếu"}
                    </Tag>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Collapse
            accordion
            activeKey={activeKey}
            onChange={handlePanelChange}
            className="collapse-activity"
          >
            {realLevelData.map((item, index) => (
              <Panel
                header={item.label}
                extra={
                  <Tag
                    color={
                      item.percent >= 100
                        ? "geekblue"
                        : item.percent >= 50
                        ? "green"
                        : item.percent >= 0
                        ? "gold"
                        : item.percent >= -50
                        ? "volcano"
                        : "red"
                    }
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {item.percent >= 100
                      ? "Xuất sắc"
                      : item.percent >= 50
                      ? "Tốt"
                      : item.percent >= 0
                      ? "Khá"
                      : item.percent >= -50
                      ? "Trung bình"
                      : "Yếu"}
                  </Tag>
                }
                key={index}
              >
                <div className={`activityKPI${index + 1}`}>
                  <div className="activity-content">
                    <h1 className="complete-rate">
                      Đã hoàn thành {item.score}/{item.max}{" "}
                      {item.unit && item.unit}
                    </h1>
                    <h1 className="each-time">
                      Trung bình thực hiện mỗi {item.unit} hết{" "}
                      {item.averageTime} giờ
                    </h1>
                    {item.percent < 100 ? (
                      <h1 className="need-time">
                        Cần thêm {item.remainingTime} giờ nữa để hoàn thành hoạt
                        động này!
                      </h1>
                    ) : (
                      <h1 className="need-time">
                        {item.percent === 100
                          ? "Bạn đã hoàn thành chỉ tiêu!"
                          : "Bạn đã hoàn thành vượt chỉ tiêu!"}
                      </h1>
                    )}
                    <h1 className="request-view-activity">
                      Xem chi tiết hoạt động
                    </h1>
                  </div>
                  <div
                    className="activity-chart"
                    onMouseEnter={handleFireWorks}
                  >
                    <div className="activity-chart-wrap">
                      <SpeedChart
                        min={item.min}
                        max={item.max}
                        score={item.score}
                      />
                      {/* <ConfettiEffect
                        width={dimensions.width}
                        height={dimensions.height}
                        x={position.x}
                        y={position.y}
                        run={hover}
                      /> */}
                    </div>
                    {/* <ConfettiEffect
                      width={dimensions.width}
                      height={dimensions.height}
                      x={position.x}
                      y={position.y - 250}
                      run={hover}
                    /> */}
                  </div>
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default KpiStatus;
