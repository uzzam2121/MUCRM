import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
  CssBaseline,
  Tooltip,
  Collapse,
} from "@mui/material";
import {
  Menu,
  Alarm,
  NotificationsActiveOutlined,
  TimerOutlined,
  QuestionAnswerOutlined,
  SettingsOutlined,
  ControlPointDuplicateRounded,
  Language,
  Mail,
  Inbox,
  Close,
  ChevronLeft,
  ChevronRight,
  DashboardOutlined,
  PersonAddOutlined,
  TaskAltOutlined,
  GroupOutlined,
  SecurityOutlined,
  AccountBalanceWalletOutlined,
  TrendingUpOutlined,
  ReceiptLongOutlined,
  Logout,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Link, Outlet, Routes, Route, Navigate } from "react-router-dom";
import clsx from "clsx";
import HorizontalNavbar from "./HorizontalNavbar";
import {
  DashBoard,
  Leads,
  FollowUps,
  Tasks,
  CashBook,
  Sales,
  Vouchers,
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
  Transcript,
} from "../../Pages";
import LeadRefunds from "../../Pages/Leads/Refund/Refund";
import CreateSale from "../../Pages/Sales/CreateSale";
import Home from "../../ClientPanel/Home";

const Header = () => {
  ////////////////////////////////////// VARIABLES ////////////////////////////////////////
  const drawerWidth = 240;
  const theme = useTheme();
  const linksArray = [
    {
      id: 1,
      title: "DashBoard",
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
      link: "tasks",
    },
    {
      id: 4,
      title: "User",
      link: "user",
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
      title: "Cash Book",
      icon: <AccountBalanceWalletOutlined />,
      link: "cashbook",
    },
    {
      id: 7,
      title: "Sales",
      icon: <TrendingUpOutlined />,
      link: "sales",
    },
    {
      id: 8,
      title: "Vouchers",
      link: "/voucher",
      icon: <ReceiptLongOutlined />,
    },
    {
      id: 9,
      title: "Logout",
      link: "/login",
      icon: <Logout />,
    },
  ];

  ////////////////////////////////////// STATES ///////////////////////////////////////////
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState({ right: false });
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(1);

  ////////////////////////////////////// USE EFFECTS //////////////////////////////////////
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  ////////////////////////////////////// FUNCTIONS ////////////////////////////////////////
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setState({ ...state, [anchor]: open });
  };
  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  ////////////////////////////////////// COMPONENTS ///////////////////////////////////////
  const Notifications = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }} // Drawer Width
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Toolbar className="bg-sky-400 text-white mt-16">
        <NotificationsActiveOutlined sx={{ fontSize: "30px", marginRight: "5px" }} />
        <p className="text-2xl font-Mulish">Notifications</p>
        <Close className="text-white mt-1 cursor-pointer ml-28" />
      </Toolbar>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <React.Fragment key={index}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar>H</Avatar>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  ////////////////////////////////////// STYLESD COMPONENTS ////////////////////////////////
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop != "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop != "open" })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
    })
  );
  const CustomListItem = styled(ListItemButton)(({ theme, selected }) => ({
    color: "#0ea5e9", // default nav text color requested
    "&:hover": {
      "& .MuiListItemIcon-root": {
        color: "rgb(56 189 248)",
      },
    },
    ...(selected && {
      color: "#0369a1", // slightly darker when selected
      fontWeight: "bold",
      backgroundColor: "yellow",
      "& .MuiListItemIcon-root": {
        color: "rgb(2 132 199)",
      },
    }),
  }));

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* Horizontal Navigation */}
      <HorizontalNavbar />

      {/* Main Content */}
      <Box className="bg-gray-50" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<DashBoard />} />
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
          <Route path="/voucher" element={<Vouchers />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/client" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Header;
