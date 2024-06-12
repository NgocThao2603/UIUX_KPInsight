import AllRoutes from "./view/routes";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <AllRoutes />
    </HashRouter>
  );
}

export default App;
