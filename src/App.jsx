import { BrowserRouter as Router } from "react-router-dom";
//import AppRoutes from "./routes/AppRoutes.jsx";
//import AppRoutes from "./routes/AppRoutesV2.jsx";
import AppRoutes from "./routes/AppRoutesBack.jsx";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App