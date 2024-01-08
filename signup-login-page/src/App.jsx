import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./Appbar";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";


function App() {
  return (
    <>
      <div
        style={{ width: "100vm", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Router>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
