// Main mock data export file
export { mockLeads, mockLeadStats } from './leads';
export { mockTasks, mockTaskStats } from './tasks';
export { mockProjects, mockProjectStats } from './projects';
export { mockInventory, mockInventoryStats } from './inventory';
export { mockSocieties, mockSocietyStats } from './societies';
export { mockEmployees, mockEmployeeStats } from './employees';
export { mockClients, mockClientStats } from './clients';
export { mockCashBook, mockPaymentStats, mockIncomeExpenses, mockCashBookStats } from './cashbook';
export { mockNotifications, mockNotificationStats } from './notifications';
export { mockEvents, mockEventStats } from './events';

// Demo user for portfolio showcase
export const mockDemoUser = {
  _id: "demo_user_001",
  name: "Demo User",
  email: "demo@example.com",
  role: "admin",
  avatar: "demo_avatar.jpg",
  permissions: ["all"],
  lastLogin: "2024-01-24T14:30:00Z",
  isDemo: true,
  token: "demo_token_12345",
  username: "demo_user",
  department: "Administration",
  status: "active",
  hireDate: "2024-01-01T00:00:00Z",
  phone: "1111111",
  address: "Demo Address, Demo City, DC 12345"
};

// Dashboard summary data
export const mockDashboardSummary = {
  totalLeads: 7,
  activeLeads: 5,
  closedLeads: 1,
  totalRevenue: 73000,
  monthlyRevenue: 73000,
  totalTasks: 7,
  completedTasks: 2,
  pendingTasks: 5,
  totalProjects: 7,
  activeProjects: 3,
  completedProjects: 1,
  totalClients: 7,
  activeClients: 5,
  totalEmployees: 7,
  activeEmployees: 7
};
