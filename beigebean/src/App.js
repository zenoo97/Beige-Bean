import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";

import SignIn from "./Routes/SignIn.js";
import SignUp from "./Routes/SignUp.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
