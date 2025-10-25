import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  PersonAddOutlined,
  TaskAltOutlined,
  GroupOutlined,
  SecurityOutlined,
  InventoryOutlined,
  TrendingUpOutlined,
  RecordVoiceOverOutlined,
  AccountBalanceWalletOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  Logout,
} from "@mui/icons-material";

const HorizontalNavbar = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(1);

  const linksArray = [
    {
      id: 1,
      title: "Dashboard",
      link: "/",
      icon: <DashboardOutlined />,
    },
    {
      id: 2,
      title: "Leads",
      link: "/leads",
      icon: <PersonAddOutlined />,
    },
    {
      id: 3,
      title: "To Do Tasks",
      icon: <TaskAltOutlined />,
      link: "/tasks",
    },
    {
      id: 4,
      title: "User",
      link: "/user",
      icon: <GroupOutlined />,
    },
    {
      id: 5,
      title: "Authorization",
      icon: <SecurityOutlined />,
      link: "/authorization/request",
    },
    {
      id: 6,
      title: "Inventory",
      icon: <InventoryOutlined />,
      link: "/inventory",
    },
    {
      id: 7,
      title: "Sales",
      icon: <TrendingUpOutlined />,
      link: "/sales",
    },
    {
      id: 8,
      title: "Transcript",
      link: "/transcript",
      icon: <RecordVoiceOverOutlined />,
    },
    {
      id: 9,
      title: "Cash Book",
      icon: <AccountBalanceWalletOutlined />,
      link: "/cashbook",
    },
    {
      id: 10,
      title: "Vouchers",
      link: "/voucher",
      icon: <ReceiptLongOutlined />,
    },
    {
      id: 11,
      title: "Settings",
      link: "/setting",
      icon: <SettingsOutlined />,
    },
    {
      id: 12,
      title: "Logout",
      link: "/login",
      icon: <Logout />,
    },
  ];

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src="/favicon/GrowLOGO.png" alt="GHI Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Links - Horizontal Scroll on smaller screens */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden lg:flex items-center space-x-1">
              {linksArray.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center px-2 py-2 rounded-md text-xs font-medium transition-colors duration-200 whitespace-nowrap ${
                    selectedItem === item.id
                      ? "text-sky-600 bg-sky-50 border-b-2 border-sky-600"
                      : "text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.title}
                </Link>
              ))}
            </div>
            
            {/* Scrollable navigation for medium screens */}
            <div className="hidden md:flex lg:hidden items-center overflow-x-auto space-x-1 max-w-md">
              {linksArray.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center px-2 py-2 rounded-md text-xs font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                    selectedItem === item.id
                      ? "text-sky-600 bg-sky-50 border-b-2 border-sky-600"
                      : "text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-sky-600 focus:outline-none focus:text-sky-600"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {linksArray.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => handleItemClick(item.id)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  selectedItem === item.id
                    ? "text-sky-600 bg-sky-100"
                    : "text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
