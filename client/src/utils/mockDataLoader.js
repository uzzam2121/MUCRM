// Mock Data Loader for Portfolio Demo
import { store } from '../redux/store';
import {
  mockLeads,
  mockTasks,
  mockProjects,
  mockInventory,
  mockSocieties,
  mockEmployees,
  mockClients,
  mockCashBook,
  mockNotifications,
  mockEvents,
  mockDashboardSummary
} from '../mockData';

// Import all reducer actions
import { getLeadsReducer, getLeadsStatReducer } from '../redux/reducer/lead';
import { getTasksReducer } from '../redux/reducer/task';
import { getProjectsReducer } from '../redux/reducer/project';
import { getInventoriesReducer } from '../redux/reducer/inventory';
import { getSocietiesReducer } from '../redux/reducer/society';
import { getEmployeesReducer, getClientsReducer } from '../redux/reducer/user';
import { getCashbooksReducer } from '../redux/reducer/cashbook';
import { getNotificationsReducer } from '../redux/reducer/notification';
import { getEventsReducer } from '../redux/reducer/event';

// Load all mock data into Redux store
export const loadMockData = () => {
  const dispatch = store.dispatch;

  // Load Leads
  dispatch(getLeadsReducer(mockLeads));
  dispatch(getLeadsStatReducer(mockDashboardSummary));

  // Load Tasks
  dispatch(getTasksReducer(mockTasks));

  // Load Projects
  dispatch(getProjectsReducer(mockProjects));

  // Load Inventory
  dispatch(getInventoriesReducer(mockInventory));

  // Load Societies
  dispatch(getSocietiesReducer(mockSocieties));

  // Load Users
  dispatch(getEmployeesReducer(mockEmployees));
  dispatch(getClientsReducer(mockClients));

  // Load Cashbook
  dispatch(getCashbooksReducer(mockCashBook));

  // Load Notifications
  dispatch(getNotificationsReducer(mockNotifications));

  // Load Events
  dispatch(getEventsReducer(mockEvents));

  console.log('✅ Mock data loaded successfully for portfolio demo');
};
