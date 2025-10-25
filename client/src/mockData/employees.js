// Mock data for Employees Management
export const mockEmployees = [
  {
    _id: "emp_001",
    name: "John Smith",
    email: "john@example.com",
    phone: "1111111",
    role: "Senior Sales Manager",
    department: "Sales",
    status: "active",
    hireDate: "2022-03-15T00:00:00Z",
    salary: 85000,
    commission: 0.05,
    address: "123 Main St, New York, NY 10001",
    emergencyContact: "Jane Smith (Wife) - +1-555-1001",
    skills: ["Sales", "Negotiation", "Client Relations", "CRM"],
    performance: {
      rating: 4.8,
      dealsClosed: 45,
      revenue: 2500000,
      lastReview: "2024-01-15T00:00:00Z"
    },
    avatar: "john_smith.jpg",
    createdAt: "2022-03-15T09:00:00Z",
    updatedAt: "2024-01-24T14:30:00Z",
    notes: "Top performer, excellent client relationships"
  },
  {
    _id: "emp_002",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "1111111",
    role: "Sales Representative",
    department: "Sales",
    status: "active",
    hireDate: "2023-01-10T00:00:00Z",
    salary: 65000,
    commission: 0.04,
    address: "456 Oak Ave, San Francisco, CA 94102",
    emergencyContact: "Mike Johnson (Husband) - +1-555-2001",
    skills: ["Sales", "Marketing", "Social Media", "Lead Generation"],
    performance: {
      rating: 4.5,
      dealsClosed: 28,
      revenue: 1800000,
      lastReview: "2024-01-10T00:00:00Z"
    },
    avatar: "sarah_johnson.jpg",
    createdAt: "2023-01-10T10:30:00Z",
    updatedAt: "2024-01-22T11:20:00Z",
    notes: "Strong in digital marketing and lead generation"
  },
  {
    _id: "emp_003",
    name: "Mike Wilson",
    email: "mike@example.com",
    phone: "1111111",
    role: "Sales Representative",
    department: "Sales",
    status: "active",
    hireDate: "2023-06-01T00:00:00Z",
    salary: 62000,
    commission: 0.04,
    address: "789 Pine St, Miami, FL 33101",
    emergencyContact: "Lisa Wilson (Wife) - +1-555-3001",
    skills: ["Sales", "Customer Service", "Property Management", "Negotiation"],
    performance: {
      rating: 4.2,
      dealsClosed: 22,
      revenue: 1400000,
      lastReview: "2024-01-05T00:00:00Z"
    },
    avatar: "mike_wilson.jpg",
    createdAt: "2023-06-01T14:15:00Z",
    updatedAt: "2024-01-19T13:30:00Z",
    notes: "Excellent customer service skills, great with families"
  },
  {
    _id: "emp_004",
    name: "Lisa Brown",
    email: "lisa@example.com",
    phone: "1111111",
    role: "Marketing Manager",
    department: "Marketing",
    status: "active",
    hireDate: "2022-09-20T00:00:00Z",
    salary: 78000,
    commission: 0.02,
    address: "321 Elm St, Chicago, IL 60601",
    emergencyContact: "David Brown (Husband) - +1-555-4001",
    skills: ["Marketing", "Digital Marketing", "Content Creation", "Analytics"],
    performance: {
      rating: 4.6,
      dealsClosed: 0,
      revenue: 0,
      lastReview: "2024-01-20T00:00:00Z"
    },
    avatar: "lisa_brown.jpg",
    createdAt: "2022-09-20T11:45:00Z",
    updatedAt: "2024-01-25T08:45:00Z",
    notes: "Leads marketing campaigns, excellent analytical skills"
  },
  {
    _id: "emp_005",
    name: "Tom Davis",
    email: "tom@example.com",
    phone: "1111111",
    role: "Senior Sales Representative",
    department: "Sales",
    status: "active",
    hireDate: "2021-11-15T00:00:00Z",
    salary: 72000,
    commission: 0.05,
    address: "654 Maple Dr, Boston, MA 02101",
    emergencyContact: "Susan Davis (Wife) - +1-555-5001",
    skills: ["Sales", "Negotiation", "Historic Properties", "Client Relations"],
    performance: {
      rating: 4.7,
      dealsClosed: 38,
      revenue: 2200000,
      lastReview: "2024-01-18T00:00:00Z"
    },
    avatar: "tom_davis.jpg",
    createdAt: "2021-11-15T08:30:00Z",
    updatedAt: "2023-12-15T16:55:00Z",
    notes: "Specializes in historic properties, strong negotiation skills"
  },
  {
    _id: "emp_006",
    name: "Jennifer Lee",
    email: "jennifer@example.com",
    phone: "1111111",
    role: "Sales Representative",
    department: "Sales",
    status: "active",
    hireDate: "2023-08-01T00:00:00Z",
    salary: 60000,
    commission: 0.04,
    address: "987 Cedar Ln, Seattle, WA 98101",
    emergencyContact: "Mark Lee (Husband) - +1-555-6001",
    skills: ["Sales", "Technology", "Modern Properties", "Client Relations"],
    performance: {
      rating: 4.3,
      dealsClosed: 18,
      revenue: 1200000,
      lastReview: "2024-01-12T00:00:00Z"
    },
    avatar: "jennifer_lee.jpg",
    createdAt: "2023-08-01T13:20:00Z",
    updatedAt: "2024-01-24T09:15:00Z",
    notes: "Tech-savvy, great with modern properties and young professionals"
  },
  {
    _id: "emp_007",
    name: "Robert Taylor",
    email: "robert@example.com",
    phone: "1111111",
    role: "Sales Representative",
    department: "Sales",
    status: "active",
    hireDate: "2023-11-01T00:00:00Z",
    salary: 58000,
    commission: 0.04,
    address: "147 Birch St, Austin, TX 78701",
    emergencyContact: "Maria Taylor (Wife) - +1-555-7001",
    skills: ["Sales", "First-Time Buyers", "Customer Service", "Property Tours"],
    performance: {
      rating: 4.1,
      dealsClosed: 15,
      revenue: 950000,
      lastReview: "2024-01-08T00:00:00Z"
    },
    avatar: "robert_taylor.jpg",
    createdAt: "2023-11-01T16:00:00Z",
    updatedAt: "2024-01-24T10:30:00Z",
    notes: "Excellent with first-time buyers, patient and thorough"
  }
];

export const mockEmployeeStats = {
  byDepartment: [
    { name: "Sales", count: 6 },
    { name: "Marketing", count: 1 }
  ],
  byRole: [
    { name: "Senior Sales Manager", count: 1 },
    { name: "Sales Representative", count: 4 },
    { name: "Marketing Manager", count: 1 },
    { name: "Senior Sales Representative", count: 1 }
  ],
  byPerformance: [
    { name: "Excellent (4.5+)", count: 3 },
    { name: "Good (4.0-4.4)", count: 3 },
    { name: "Average (3.5-3.9)", count: 1 }
  ]
};
