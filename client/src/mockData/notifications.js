// Mock data for Notifications Management
export const mockNotifications = [
  {
    _id: "notif_001",
    title: "New Lead Assignment",
    message: "You have been assigned a new lead: Sarah Johnson",
    type: "assignment",
    priority: "high",
    status: "unread",
    userId: "emp_001",
    relatedId: "lead_001",
    relatedType: "lead",
    createdAt: "2024-01-24T14:30:00Z",
    readAt: null,
    expiresAt: "2024-01-31T14:30:00Z",
    actionUrl: "/leads/lead_001",
    icon: "assignment",
    color: "blue"
  },
  {
    _id: "notif_002",
    title: "Task Due Tomorrow",
    message: "Follow up with Sarah Johnson is due tomorrow",
    type: "reminder",
    priority: "medium",
    status: "unread",
    userId: "emp_001",
    relatedId: "task_001",
    relatedType: "task",
    createdAt: "2024-01-24T09:00:00Z",
    readAt: null,
    expiresAt: "2024-01-26T09:00:00Z",
    actionUrl: "/tasks/task_001",
    icon: "schedule",
    color: "orange"
  },
  {
    _id: "notif_003",
    title: "Payment Received",
    message: "Commission payment of $25,000 received from Manhattan Heights sale",
    type: "payment",
    priority: "low",
    status: "read",
    userId: "emp_001",
    relatedId: "cash_001",
    relatedType: "cashbook",
    createdAt: "2024-01-20T14:30:00Z",
    readAt: "2024-01-20T15:00:00Z",
    expiresAt: "2024-01-27T14:30:00Z",
    actionUrl: "/cashbook",
    icon: "payment",
    color: "green"
  },
  {
    _id: "notif_004",
    title: "Meeting Scheduled",
    message: "Property viewing scheduled with Michael Chen for Tech Plaza",
    type: "meeting",
    priority: "medium",
    status: "unread",
    userId: "emp_002",
    relatedId: "lead_002",
    relatedType: "lead",
    createdAt: "2024-01-22T11:20:00Z",
    readAt: null,
    expiresAt: "2024-01-29T11:20:00Z",
    actionUrl: "/leads/lead_002",
    icon: "event",
    color: "purple"
  },
  {
    _id: "notif_005",
    title: "Lead Status Updated",
    message: "Emily Rodriguez's lead status changed to 'Meeting Done'",
    type: "status_change",
    priority: "low",
    status: "read",
    userId: "emp_003",
    relatedId: "lead_003",
    relatedType: "lead",
    createdAt: "2024-01-19T13:30:00Z",
    readAt: "2024-01-19T14:00:00Z",
    expiresAt: "2024-01-26T13:30:00Z",
    actionUrl: "/leads/lead_003",
    icon: "update",
    color: "blue"
  },
  {
    _id: "notif_006",
    title: "Project Milestone",
    message: "Manhattan Heights Development - Phase 1 foundation work completed",
    type: "project_update",
    priority: "medium",
    status: "unread",
    userId: "emp_001",
    relatedId: "project_001",
    relatedType: "project",
    createdAt: "2024-01-24T10:00:00Z",
    readAt: null,
    expiresAt: "2024-01-31T10:00:00Z",
    actionUrl: "/projects/project_001",
    icon: "construction",
    color: "orange"
  },
  {
    _id: "notif_007",
    title: "System Maintenance",
    message: "Scheduled system maintenance will occur tonight from 2 AM to 4 AM",
    type: "system",
    priority: "low",
    status: "read",
    userId: "all",
    relatedId: null,
    relatedType: "system",
    createdAt: "2024-01-24T08:00:00Z",
    readAt: "2024-01-24T08:30:00Z",
    expiresAt: "2024-01-25T08:00:00Z",
    actionUrl: null,
    icon: "maintenance",
    color: "gray"
  }
];

export const mockNotificationStats = {
  byType: [
    { name: "Assignment", count: 1 },
    { name: "Reminder", count: 1 },
    { name: "Payment", count: 1 },
    { name: "Meeting", count: 1 },
    { name: "Status Change", count: 1 },
    { name: "Project Update", count: 1 },
    { name: "System", count: 1 }
  ],
  byPriority: [
    { name: "High", count: 1 },
    { name: "Medium", count: 3 },
    { name: "Low", count: 3 }
  ],
  byStatus: [
    { name: "Unread", count: 4 },
    { name: "Read", count: 3 }
  ]
};
