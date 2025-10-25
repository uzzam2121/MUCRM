// Mock data for Tasks Management
export const mockTasks = [
  {
    _id: "task_001",
    title: "Follow up with Sarah Johnson",
    description: "Call Sarah to discuss apartment viewing schedule",
    priority: "high",
    status: "inProgress",
    assignedTo: "John Smith",
    createdBy: "Manager",
    dueDate: "2024-01-26T10:00:00Z",
    createdAt: "2024-01-20T09:00:00Z",
    updatedAt: "2024-01-24T14:30:00Z",
    leadId: "lead_001",
    category: "followUp",
    estimatedHours: 2,
    completedAt: null,
    notes: "Client prefers morning calls"
  },
  {
    _id: "task_002",
    title: "Prepare property documents",
    description: "Gather all legal documents for Tech Plaza listing",
    priority: "medium",
    status: "completed",
    assignedTo: "Sarah Johnson",
    createdBy: "Manager",
    dueDate: "2024-01-25T17:00:00Z",
    createdAt: "2024-01-18T11:15:00Z",
    updatedAt: "2024-01-25T16:45:00Z",
    leadId: "lead_002",
    category: "documentation",
    estimatedHours: 4,
    completedAt: "2024-01-25T16:45:00Z",
    notes: "All documents ready for client review"
  },
  {
    _id: "task_003",
    title: "Schedule property viewing",
    description: "Arrange viewing for Sunset Gardens property",
    priority: "high",
    status: "pending",
    assignedTo: "Mike Wilson",
    createdBy: "Mike Wilson",
    dueDate: "2024-01-27T14:00:00Z",
    createdAt: "2024-01-19T13:20:00Z",
    updatedAt: "2024-01-24T10:15:00Z",
    leadId: "lead_003",
    category: "scheduling",
    estimatedHours: 1,
    completedAt: null,
    notes: "Client available weekends only"
  },
  {
    _id: "task_004",
    title: "Market analysis report",
    description: "Prepare market analysis for Downtown Plaza area",
    priority: "low",
    status: "inProgress",
    assignedTo: "Lisa Brown",
    createdBy: "Manager",
    dueDate: "2024-01-30T12:00:00Z",
    createdAt: "2024-01-22T08:30:00Z",
    updatedAt: "2024-01-24T15:20:00Z",
    leadId: "lead_004",
    category: "research",
    estimatedHours: 6,
    completedAt: null,
    notes: "Include recent sales data"
  },
  {
    _id: "task_005",
    title: "Client feedback collection",
    description: "Gather feedback from Anna Kowalski about lost deal",
    priority: "medium",
    status: "completed",
    assignedTo: "Tom Davis",
    createdBy: "Tom Davis",
    dueDate: "2024-01-24T16:00:00Z",
    createdAt: "2024-01-23T10:00:00Z",
    updatedAt: "2024-01-24T15:30:00Z",
    leadId: "lead_005",
    category: "feedback",
    estimatedHours: 1,
    completedAt: "2024-01-24T15:30:00Z",
    notes: "Budget was main concern, will follow up in 6 months"
  },
  {
    _id: "task_006",
    title: "Reschedule meeting with James",
    description: "Find new time slot for James Wilson meeting",
    priority: "high",
    status: "pending",
    assignedTo: "Jennifer Lee",
    createdBy: "Jennifer Lee",
    dueDate: "2024-01-26T09:00:00Z",
    createdAt: "2024-01-24T11:45:00Z",
    updatedAt: "2024-01-24T11:45:00Z",
    leadId: "lead_006",
    category: "scheduling",
    estimatedHours: 0.5,
    completedAt: null,
    notes: "Client has very limited availability"
  },
  {
    _id: "task_007",
    title: "First-time buyer consultation",
    description: "Provide guidance to Maria Garcia on home buying process",
    priority: "medium",
    status: "inProgress",
    assignedTo: "Robert Taylor",
    createdBy: "Robert Taylor",
    dueDate: "2024-01-28T15:00:00Z",
    createdAt: "2024-01-22T16:00:00Z",
    updatedAt: "2024-01-24T12:10:00Z",
    leadId: "lead_007",
    category: "consultation",
    estimatedHours: 3,
    completedAt: null,
    notes: "Prepare first-time buyer checklist"
  }
];

export const mockTaskStats = {
  byStatus: [
    { name: "Pending", count: 2 },
    { name: "In Progress", count: 3 },
    { name: "Completed", count: 2 }
  ],
  byPriority: [
    { name: "High", count: 3 },
    { name: "Medium", count: 3 },
    { name: "Low", count: 1 }
  ],
  byCategory: [
    { name: "Follow-up", count: 1 },
    { name: "Documentation", count: 1 },
    { name: "Scheduling", count: 2 },
    { name: "Research", count: 1 },
    { name: "Feedback", count: 1 },
    { name: "Consultation", count: 1 }
  ]
};
