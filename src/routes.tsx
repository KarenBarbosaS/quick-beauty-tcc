import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/home";
import LoginPage from "./pages/LoginPage/login";
import RegisterPage from "./pages/RegisterPage/register";
import PaymentPage from "./pages/PaymentPage/payment-page";
import ServicesPage from "./pages/ServicesPage/services";
import SchedulingPage from "./pages/SchedulingPage/scheduling";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/scheduling" element={<SchedulingPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
