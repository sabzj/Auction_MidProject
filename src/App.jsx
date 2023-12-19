import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Sell from "./components/Sell";
import About from "./components/About";
import Buy from "./components/Buy";
import AllAuctions from "./components/AllAuctions";
import Services from "./components/Services";
import Login from "./components/Login";
import Home from "./components/Home";
import Agriculture from "./components/Agriculture";
import AddAuctionForm from "./establishYourAuction/CreateAuction";

import GroupRecommendAuctions from "./AllAuctions/MainPageRecomenAuctions";
import LogInMainPage from "./login/LogInMainPage";
import RegistrationForm from "./authentication/RegistrationForm";

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <NavbarComponent />

      {/* <GroupRecommendAuctions /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/allAuctions" element={<AllAuctions />} />
        <Route path="/create" element={<AddAuctionForm />} />
        <Route path="/login" element={<LogInMainPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/category/Agriculture" element={<Agriculture />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default App;
