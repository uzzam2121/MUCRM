// Mock data for CashBook Management
export const mockCashBook = [
  {
    _id: "cash_001",
    type: "income",
    amount: 25000,
    description: "Commission from Manhattan Heights sale",
    category: "commission",
    date: "2024-01-20T00:00:00Z",
    client: "Sarah Johnson",
    property: "Manhattan Heights",
    agent: "John Smith",
    paymentMethod: "bank_transfer",
    reference: "TXN-001234",
    status: "completed",
    createdAt: "2024-01-20T14:30:00Z",
    updatedAt: "2024-01-20T14:30:00Z",
    notes: "5% commission on $500K sale"
  },
  {
    _id: "cash_002",
    type: "expense",
    amount: 1500,
    description: "Office rent for January",
    category: "rent",
    date: "2024-01-01T00:00:00Z",
    client: null,
    property: null,
    agent: null,
    paymentMethod: "check",
    reference: "EXP-001235",
    status: "completed",
    createdAt: "2024-01-01T09:00:00Z",
    updatedAt: "2024-01-01T09:00:00Z",
    notes: "Monthly office rent payment"
  },
  {
    _id: "cash_003",
    type: "income",
    amount: 18000,
    description: "Commission from Tech Plaza lease",
    category: "commission",
    date: "2024-01-22T00:00:00Z",
    client: "TechCorp Industries",
    property: "Tech Plaza",
    agent: "Sarah Johnson",
    paymentMethod: "bank_transfer",
    reference: "TXN-001236",
    status: "completed",
    createdAt: "2024-01-22T11:20:00Z",
    updatedAt: "2024-01-22T11:20:00Z",
    notes: "3% commission on $600K lease"
  },
  {
    _id: "cash_004",
    type: "expense",
    amount: 500,
    description: "Marketing materials and brochures",
    category: "marketing",
    date: "2024-01-15T00:00:00Z",
    client: null,
    property: null,
    agent: null,
    paymentMethod: "credit_card",
    reference: "EXP-001237",
    status: "completed",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
    notes: "Printing costs for property brochures"
  },
  {
    _id: "cash_005",
    type: "income",
    amount: 12000,
    description: "Commission from Sunset Gardens sale",
    category: "commission",
    date: "2024-01-19T00:00:00Z",
    client: "Emily Rodriguez",
    property: "Sunset Gardens",
    agent: "Mike Wilson",
    paymentMethod: "bank_transfer",
    reference: "TXN-001238",
    status: "completed",
    createdAt: "2024-01-19T13:30:00Z",
    updatedAt: "2024-01-19T13:30:00Z",
    notes: "2% commission on $600K sale"
  },
  {
    _id: "cash_006",
    type: "expense",
    amount: 800,
    description: "Professional development course",
    category: "training",
    date: "2024-01-10T00:00:00Z",
    client: null,
    property: null,
    agent: "John Smith",
    paymentMethod: "credit_card",
    reference: "EXP-001239",
    status: "completed",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
    notes: "Advanced sales techniques course"
  },
  {
    _id: "cash_007",
    type: "income",
    amount: 8500,
    description: "Commission from Heritage District sale",
    category: "commission",
    date: "2023-12-15T00:00:00Z",
    client: "Anna Kowalski",
    property: "Heritage District",
    agent: "Tom Davis",
    paymentMethod: "bank_transfer",
    reference: "TXN-001240",
    status: "completed",
    createdAt: "2023-12-15T16:55:00Z",
    updatedAt: "2023-12-15T16:55:00Z",
    notes: "1.5% commission on $567K sale"
  }
];

export const mockPaymentStats = {
  todayReceived: 25000,
  thisMonthReceived: 73000,
  totalReceived: 73000,
  pendingPayments: 15000,
  averageTransaction: 10428.57
};

export const mockIncomeExpenses = [
  { month: "Jan 2024", income: 73000, expense: 2800 },
  { month: "Dec 2023", income: 85000, expense: 3200 },
  { month: "Nov 2023", income: 68000, expense: 2900 },
  { month: "Oct 2023", income: 72000, expense: 3100 },
  { month: "Sep 2023", income: 65000, expense: 2800 },
  { month: "Aug 2023", income: 78000, expense: 3300 }
];

export const mockCashBookStats = {
  byType: [
    { name: "Income", count: 4, amount: 63500 },
    { name: "Expense", count: 3, amount: 2800 }
  ],
  byCategory: [
    { name: "Commission", count: 4, amount: 63500 },
    { name: "Rent", count: 1, amount: 1500 },
    { name: "Marketing", count: 1, amount: 500 },
    { name: "Training", count: 1, amount: 800 }
  ],
  byMonth: [
    { month: "January 2024", income: 73000, expense: 2800 },
    { month: "December 2023", income: 85000, expense: 3200 }
  ]
};
