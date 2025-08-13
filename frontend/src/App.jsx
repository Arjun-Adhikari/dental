import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Termspage from "./Pages/Termspage";
import Homepage from "./Pages/Homepage";
import Error from "./components/Error/Error";
import Signup from "./admin/Signup";
import Login from "./admin/Login";
import Member from "./Member/Member";
import Appointment from "./appointment/Appointment";
import Gallery from "./components/realworks/Gallery";
import Dashboard from "./Dashboard/Dashboard";
import Ourservices from "./components/ourservices/Ourservices";
import Contactus from "./Contactus/Contactus";
import Forget_password from "./admin/Forget_password";
import Otp_form from "./admin/Otp_form";
import ProtectedRoute from "./components/protectedroute/Protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/terms" element={<Termspage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Correctly implement the protectedRoute without an isAuthenticated prop */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/services" element={<Ourservices />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/forget_password" element={<Forget_password />} />
        <Route path="/otp_check" element={<Otp_form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
