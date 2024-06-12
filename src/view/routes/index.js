import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import NavbarStatus from "../../components/navbar/navbar-status";
import NavbarOption from "../../components/navbar/navbar-option";
import SpeedChart from "../../components/speed-chart";
import KpiStatus from "../../view/pages/kpi-status";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/setting/reset-passsword";
import DefineGoal from "../pages/set-kpi/define-goal";
// import MainLayout from "../../components/layout-header";
import SetKpiForm from "../pages/set-kpi/set-kpi-form";
import ChooseOption from "../pages/set-kpi/choose-option";
import ChooseMonth from "../pages/set-kpi/choose-month";
import Done from "../pages/set-kpi/done";
import Homepage from "../pages/homepage";
import Target_list from "../pages/target_list";
import Target_detail from "../pages/target_list/target_detail";
import DefineTarget from "../pages/set-kpi/define-target";
import TurnStandard from "../pages/set-kpi/turn-standard";
import ActivityList from "../pages/activity-list";
import ActivityDetail from "../pages/activity-detail";
import GeneralSetting from "../pages/setting/general-setting";
import SettingAccount from "../pages/setting/account";
import Help from "../pages/setting/help";
import ChangePassword from "../pages/setting/change-password";
import Home from "../pages/home v2";
import Welcome from "../pages/welcome";
import GoalLayout from "../../components/goal-layout/goal-layout";
import SettingForm from "../pages/setting/setting-form";
import PieChart from "../../components/piechart";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<MainLayout component={<Register />} />}
      />

      <Route
        path="/navbar-status"
        element={<MainLayout component={<NavbarStatus />} />}
      />
      <Route
        path="/navbar-option"
        element={<MainLayout component={<NavbarOption />} />}
      />
      <Route
        path="/piechart"
        element={<MainLayout component={<PieChart />} />}
      />
      <Route
        path="/speed-chart"
        element={<MainLayout component={<SpeedChart />} />}
      />
      <Route
        path="/kpi-status"
        element={<MainLayout component={<KpiStatus />} name="Trạng thái KPI" />}
      />
      <Route
        path="/setting/account"
        element={
          <MainLayout
            component={<SettingForm component={<SettingAccount />} />}
            name="Cài đặt"
          />
        }
      />
      <Route
        path="/setting/change-password"
        element={
          <MainLayout
            component={<SettingForm component={<ChangePassword />} />}
          />
        }
      />
      <Route
        path="/setting/general-setting"
        element={
          <MainLayout
            component={<SettingForm component={<GeneralSetting />} />}
            name="Cài đặt"
          />
        }
      />
      {/* <Route path="/" element={<MainLayout component={<Homepage />} />} />
       */}
      <Route path="/" element={<MainLayout component={<Welcome />} />} />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
      <Route
        path="/forgot-password"
        element={<MainLayout component={<ForgotPassword />} />}
      />
      <Route
        path="/reset-password"
        element={<MainLayout component={<ResetPassword />} />}
      />
      <Route
        path="/define-goal"
        element={
          <MainLayout
            component={
              <GoalLayout
                component={<SetKpiForm component={<DefineGoal />} />}
              />
            }
            name="Thiết lập KPI"
          />
        }
      />
      <Route
        path="/choose-option"
        element={
          <MainLayout
            component={
              <GoalLayout
                component={<SetKpiForm component={<ChooseOption />} />}
              />
            }
            name="Thiết lập KPI"
          />
        }
      />
      <Route
        path="/choose-month"
        element={
          <MainLayout
            component={
              <GoalLayout
                component={<SetKpiForm component={<ChooseMonth />} />}
              />
            }
            name="Thiết lập KPI"
          />
        }
      />

      <Route
        path="/set-done"
        element={
          <MainLayout
            component={
              <GoalLayout component={<SetKpiForm component={<Done />} />} />
            }
            name="Thiết lập KPI"
          />
        }
      />
      <Route
        path="/define-target"
        element={
          <MainLayout
            component={
              <GoalLayout
                component={<SetKpiForm component={<DefineTarget />} />}
              />
            }
            name="Thiết lập KPI"
          />
        }
      />
      <Route
        path="/turn-standard"
        element={
          <MainLayout
            component={
              <GoalLayout
                component={<SetKpiForm component={<TurnStandard />} />}
              />
            }
            name="Thiết lập KPI"
          />
        }
      />
      <Route
        path="/target_list"
        element={
          <MainLayout
            component={<GoalLayout component={<Target_list />} />}
            name="Mục tiêu KPI"
          />
        }
      />
      <Route
        path="/target_detail"
        element={
          <MainLayout
            component={<GoalLayout component={<Target_detail />} />}
            name="Mục tiêu KPI"
          />
        }
      />
      <Route
        path="/activity-list"
        element={<MainLayout component={<ActivityList />} name="Hoạt động" />}
      />
      <Route
        path="/activity-detail"
        element={
          <MainLayout
            component={<ActivityDetail />}
            name="Chi tiết hoạt động"
          />
        }
      />
      <Route
        path="/setting/help"
        element={
          <MainLayout
            component={<SettingForm component={<Help />} />}
            name="Cài đặt"
          />
        }
      />
      <Route path="/home" element={<MainLayout component={<Home />} />} />
    </Routes>
  );
}

export default AllRoutes;
