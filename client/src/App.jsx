import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  DashBoard,
  Leads,
  FollowUps,
  Tasks,
  CashBook,
  Sales,
  Vouchers,
  Login,
  Register,
  CreateSale,
  User,
  Request,
  Refunds,
  Employees,
  Clients,
  Inventories,
  Societies,
  Projects,
  CreateCashBook,
  ViewCashBook,
  Lead,
  Notifications,
  Ledger,
  AllFollowUps,
  ForgotPassword,
  InputCode,
  ResetPassword,
  Transcript,
} from "./Pages";
import { Navbar } from "./Components";
import CombinedNavbar from "./Components/Navbar/CombinedNavbar";
import { useSelector, useDispatch } from "react-redux";
import { loginReducer } from "./redux/reducer/user";
import LeadRefunds from "./Pages/Leads/Refund/Refund";
import VoucherPage from "./Pages/Vouchers/VoucherPage";
import Home from "./ClientPanel/Home";
import TranscriptPage from "./Pages/Transcript/TranscriptPage";
import { mockDemoUser } from "./mockData";
import DemoBanner from "./Components/DemoBanner";
import { loadMockData } from "./utils/mockDataLoader";

const App = () => {
  ///////////////////////////////////// VARIABLES ////////////////////////////////////////
  const { loggedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pathArr = pathname.split("/").filter((item) => item != "");
  const showSidebarForSettings = !pathArr.includes("/settings");

  ///////////////////////////////////// STATES ////////////////////////////////////////
  const [showSidebar, setShowSidebar] = useState(true);

  ///////////////////////////////////// USE EFFECTS ////////////////////////////////////////
  useEffect(() => {
    if (window.innerWidth < 768) setShowSidebar(false);
    else setShowSidebar(true);
  }, [window.innerWidth]);

  // Auto-login demo user for portfolio showcase
  useEffect(() => {
    console.log('🚀 App initializing...');
    
    // Always set demo user for portfolio showcase
    dispatch(loginReducer(mockDemoUser));
    console.log('👤 Demo user logged in');
    
    // Load mock data after a short delay to ensure Redux is ready
    setTimeout(() => {
      console.log('📊 Loading mock data...');
      loadMockData();
    }, 100);
  }, [dispatch]);

  ///////////////////////////////////// Functions ////////////////////////////////////////

  console.log('🔍 Current loggedUser:', loggedUser);

  return (
    <div>
      <DemoBanner />
      <div className="flex flex-col w-full h-screen bg-[#1a1f2c]">
        {!loggedUser ? (
          <div className="flex justify-center items-center w-full h-screen">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
              <p>Loading Portfolio Demo...</p>
            </div>
          </div>
        ) : loggedUser.role != "client" ? (
          <div
            className={`flex flex-col h-screen font-primary ${`${pathname.includes("/client/") || pathname.includes("download") ? "hidden" : "visible"}`}`}>
            <CombinedNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className="flex flex-col flex-1 overflow-y-scroll">
              <div className="flex p-[1rem] w-full">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/auth/register" element={<Navigate to="/" />} />
                  <Route path="/auth/login" element={<Navigate to="/" />} />
                  <Route path="/myLeads" element={<Leads />} />
                  <Route path="/leads" exact element={<Leads />} />
                  <Route path="/leads/call-reminders" element={<AllFollowUps />} />
                  <Route path="/leads/ledger" element={<Navigate to="/leads" />} />
                  <Route path="/leads/ledger/:leadId" element={<Ledger />} />
                  <Route path="/leads/:leadId" element={<Lead />} />
                  <Route path="/leads/followUps" element={<Navigate to="/leads" />} />
                  <Route path="/leads/followUps/:leadId" element={<FollowUps />} />
                  <Route path="/leads/refund" element={<Navigate to="/leads" />} />
                  <Route path="/leads/refund/:leadId" element={<LeadRefunds />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/inventories" element={<Inventories />} />
                  <Route path="/inventory" element={<Inventories />} />
                  <Route path="/societies" element={<Societies />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/users/:userId" element={<User />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/authorization/request" element={<Request />} />
                  <Route path="/authorization/refund" element={<Refunds />} />
                  <Route path="/cashbook" element={<CashBook />} />
                  <Route path="/cashbook/create" element={<CreateCashBook />} />
                  <Route path="/view/cashbook" element={<ViewCashBook />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/sales/create" element={<CreateSale />} />
                  <Route path="/transcript" element={<Transcript />} />
                  <Route path="/voucher" element={<Vouchers showSidebar={showSidebar} />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/client" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}

        <Routes>
          <Route path="/download/transcript" element={<TranscriptPage />} />
          <Route path="/download/voucher" element={<VoucherPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
