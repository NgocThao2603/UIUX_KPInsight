import Header from "../header";
import NavbarGoal from "../navbar/navbar-goal";
import "./goal-layout.css";
function GoalLayout(props) {
  return (
    <div>
      <div className="navbar-goal">
        <NavbarGoal />
      </div>
      <div className="goal-content" style={{ marginLeft: "220px" }}>
        {props.component}
      </div>
    </div>
  );
}

export default GoalLayout;
