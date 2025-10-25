import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Divider, IconButton, Tooltip } from "@mui/material";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { MenuButton } from "@mui/base/MenuButton";
import { logout } from "../../redux/action/user";
import {
  PiAlarm,
  PiBell,
  PiGear,
  PiKeyLight,
  PiList,
  PiListChecks,
  PiSignOutLight,
  PiUserPlus,
} from "react-icons/pi";
import { getNotifications } from "../../redux/action/notification";
import { getTasks } from "../../redux/action/task";
import ChangePassword from "../../Pages/Auth/ChangePassword";
import {
  DashboardOutlined,
  PersonAddOutlined,
  TaskAltOutlined,
  GroupOutlined,
  SecurityOutlined,
  InventoryOutlined,
  RecordVoiceOverOutlined,
  AccountBalanceWalletOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  Logout,
  BusinessOutlined,
  AnalyticsOutlined,
  HeadsetMicOutlined,
  AssessmentOutlined,
  ContactSupportOutlined,
  CampaignOutlined,
  InsightsOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
    font-family: 'Montserrat', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    transition:all;
    margin: 12px 0;
    min-width: 200px;
    max-width: 400px;
    border-radius: 12px;
    overflow: auto;
    position: relative;
    outline: 0px;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]};
    z-index: 1;
    `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    color: #0ea5e9 !important;
    &:last-of-type {
      border-bottom: none;
    }
    
    &.${menuItemClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
      color: #0ea5e9 !important;
    }
  
    &.${menuItemClasses.disabled} {
      color: #0284c7 !important;
    }
  
    &:hover:not(.${menuItemClasses.disabled}) {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
      color: #0ea5e9 !important;
    }
    
    & * {
      color: #0ea5e9 !important;
    }
    `
);

const CombinedNavbar = ({ setShowSidebar, showSidebar, open, setOpen }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const { notifications } = useSelector((state) => state.notification);
  const { pathname } = useLocation();
  const { tasks } = useSelector((state) => state.task);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [openPasswordChange, setOpenPasswordChange] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // State for notification dropdown

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    dispatch(getNotifications());
    dispatch(getTasks());
  }, []);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleChangePasswordOpen = () => {
    setOpenPasswordChange(true);
  };

  const isActive = (link) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  const sidebarItems = [
    { id: 1, title: "Dashboard", link: "/", icon: <DashboardOutlined /> },
    { id: 2, title: "Leads", link: "/leads", icon: <PersonAddOutlined /> },
    { id: 3, title: "To Do Tasks", link: "/tasks", icon: <TaskAltOutlined /> },
    { id: 4, title: "User", link: "/user", icon: <GroupOutlined /> },
    { id: 5, title: "Authorization", link: "/authorization/request", icon: <SecurityOutlined /> },
    { id: 6, title: "Inventory", link: "/inventory", icon: <InventoryOutlined /> },
    { id: 7, title: "Sales", link: "/sales", icon: <TrendingUpOutlined /> },
    { id: 8, title: "Transcript", link: "/transcript", icon: <RecordVoiceOverOutlined /> },
    { id: 9, title: "Cash Book", link: "/cashbook", icon: <AccountBalanceWalletOutlined /> },
    { id: 10, title: "Vouchers", link: "/voucher", icon: <ReceiptLongOutlined /> },
    { id: 12, title: "Logout", link: "/login", icon: <Logout /> },
  ];

  return (
    <div className={`${pathname.includes('/client/') || pathname.includes('download') ? 'invisible' : 'visible'}`}>
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BusinessOutlined className="text-2xl" />
              <span className="text-xl font-bold">MU CRM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <AnalyticsOutlined className="text-lg" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <HeadsetMicOutlined className="text-lg" />
              <span>Support</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <AssessmentOutlined className="text-lg" />
              <span>Reports</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <ContactSupportOutlined className="text-lg" />
              <span>Help</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <CampaignOutlined className="text-lg" />
              <span>Campaigns</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <InsightsOutlined className="text-lg" />
              <span>Insights</span>
            </div>
            <div className="flex items-center space-x-1 text-sm hover:text-blue-200 cursor-pointer transition-colors">
              <TrendingUpOutlined className="text-lg" />
              <span>Growth</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col z-10 sticky top-0 w-full sm:h-[4rem] h-[4rem] bg-[#1a1f2c] border-b-[1px] border-b-[#242d3d] font-primary">
        <div className="sm:h-full h-[4rem] md:pl-[20px] sm:pl-[1rem] pl-[8px] flex items-center justify-between sm:border-none border-b-[1px] border-[#eeeff0] sm:shadow-none">
          <div className="flex justify-start gap-[10px] items-center">
            <IconButton
              onClick={() => setShowSidebar((pre) => !pre)}
              className="md:hidden flex cursor-pointer text-[#f5f5f5] hover:text-sky-400">
              <PiList className="text-[25px] text-[#f5f5f5]" />
            </IconButton>
            <div>
              <p className="text-white text-xl gap-1 flex items-center">
                {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
              </p>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div className="sm:flex items-center hidden gap-[10px]">
              {loggedUser.role != 'employee' && (
                <Dropdown
                  onOpenChange={(_event, open) => setIsNotificationsOpen(open)}
                >
                  <MenuButton>
                    <Tooltip title="Notifications" arrow placement="bottom">
                      <IconButton 
                        // Apply purple ring on hover, focus, and open
                        className={`h-fit text-[#f5f5f5] hover:text-sky-400 inline-block relative rounded-full 
                          ${isNotificationsOpen ? 'ring-2 ring-purple-500 bg-gray-800' : 'hover:ring-2 hover:ring-purple-500 focus:ring-2 focus:ring-purple-500'}`}
                        size="small" 
                        aria-label="menu">
                        <PiBell className={`text-[25px] text-[#f5f5f5] animate-none ${notifications.length > 0 ? "text-sky-400" : ""}`} />
                        {notifications.length > 0 && (
                          <span className="animate-ping absolute top-1.5 right-2 block h-1 w-1 rounded-full ring-2 ring-sky-400 bg-sky-600"></span>
                        )}
                      </IconButton>
                    </Tooltip>
                  </MenuButton>
                  <Menu slots={{ listbox: StyledListbox }}>
                    {notifications.slice(0, 5).map((notification, index) => (
                      <React.Fragment key={index}>
                        <StyledMenuItem className="text-sky-600 flex">
                          <div>
                            <span className="text-lg font-light text-sky-600">{notification.title}</span>
                            <br />
                            <span className="text-sky-500">{notification.description}</span>
                            <br />
                          </div>
                        </StyledMenuItem>
                      </React.Fragment>
                    ))}
                    {notifications.length > 5 && (
                      <Link to="/notifications" className="hover:underline text-blue-500">
                        More
                      </Link>
                    )}
                  </Menu>
                </Dropdown>
              )}

              <Dropdown>
                <Menu slots={{ listbox: StyledListbox }}>
                  {tasks.slice(0, 5).map((task, index) => (
                    <React.Fragment key={index}>
                      <StyledMenuItem className="text-sky-600 flex">
                        <div>
                          <span className="text-lg font-light text-sky-600">{task.title}</span>
                          <br />
                          <span className="text-sky-500">{task.description}</span>
                          <br />
                        </div>
                      </StyledMenuItem>
                    </React.Fragment>
                  ))}
                  {tasks.length > 5 && (
                    <Link to="/tasks" className="hover:underline text-blue-500">
                      More
                    </Link>
                  )}
                </Menu>
              </Dropdown>

              <Link to="/tasks">
                <Tooltip title="All Tasks" arrow placement="bottom">
                  <IconButton className="h-fit text-[#f5f5f5] hover:text-sky-400" size="small" aria-label="menu">
                    <PiListChecks className="text-[25px] text-[#f5f5f5]" />
                  </IconButton>
                </Tooltip>
              </Link>

              <Link to="/employees">
                <Tooltip title="Add Employee" arrow placement="bottom">
                  <IconButton className="h-fit text-[#f5f5f5] hover:text-sky-400" size="small" aria-label="menu">
                    <PiUserPlus className="text-[25px] text-[#f5f5f5]" />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
            <div className="flex items-center border-l-[1px] border-l-[#242d3d]">
              <Dropdown>
                <MenuButton>
                  <Tooltip className="flex items-center" title="Profile" arrow placement="bottom">
                    <Avatar className="m-3 cursor-pointer capitalize bg-sky-400">
                      {loggedUser?.username[0]}
                    </Avatar>
                    <span className="capitalize pr-3 text-sky-400">{loggedUser?.username}</span>
                  </Tooltip>
                </MenuButton>
                <Menu slots={{ listbox: StyledListbox }}>
                  <div className="p-2 flex justify-center items-center">
                    <div className="font-primary text-lg font-light">
                      {loggedUser?.username}
                    </div>
                  </div>
                  <Divider />
                  <StyledMenuItem onClick={handleChangePasswordOpen}>
                    <PiKeyLight className="mr-2" />
                    Change Password
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleLogout}>
                    <PiSignOutLight className="mr-2" />
                    Logout
                  </StyledMenuItem>
                </Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1f2c] shadow-lg border-b border-gray-200">
        <div className="w-full px-4 py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {sidebarItems.map((item) => {
              const active = isActive(item.link);
              
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-sky-50 border-b-2 border-sky-600 text-sky-600"
                      : "text-white hover:text-sky-600 hover:bg-sky-50 focus:text-sky-600 focus:bg-sky-50" // Added focus styles
                  }`}
                >
                  <span
                    className="mr-2 flex items-center"
                    // Icon color is set to inherit from the Link's Tailwind text color
                  >
                    {React.isValidElement(item.icon)
                      ? React.cloneElement(item.icon, {
                          style: { color: "inherit" }, // Ensures icon color changes with text color
                        })
                      : item.icon}
                  </span>
                  <span className="truncate" style={{ color: "inherit" }}>
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <ChangePassword open={openPasswordChange} setOpen={setOpenPasswordChange} />
    </div>
  );
};

export default CombinedNavbar;