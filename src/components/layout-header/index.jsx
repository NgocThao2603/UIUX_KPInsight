import Header from "../header";

function HeaderLayout(props) {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="body" style={{ marginTop: "110px" }}>
        {props.component}
      </div>
    </div>
  );
}

export default HeaderLayout;
