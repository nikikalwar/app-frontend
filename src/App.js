import { SignUp } from "./components/SignUp";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ReVerifyUser } from "./components/ReverifyUser";
import { ForgotPassword } from "./components/ForgotPassword";
import { SignIn } from "./components/SignIn";
import { NavBar } from "./components/NavBar";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reverify-user" element={<ReVerifyUser />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
