// Mock data for Clients Management
export const mockClients = [
  {
    _id: "client_001",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "1111111",
    address: "123 Park Ave, New York, NY 10001",
    type: "individual",
    status: "active",
    source: "instagram",
    budget: 850000,
    preferences: {
      propertyType: "apartment",
      location: "Manhattan",
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Pool", "Gym", "Parking"]
    },
    assignedAgent: "John Smith",
    lastContact: "2024-01-20T14:45:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "Very interested in luxury apartments, prefers morning calls",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-24T14:30:00Z",
    tags: ["luxury", "manhattan", "high-budget"]
  },
  {
    _id: "client_002",
    name: "TechCorp Industries",
    email: "contact@example.com",
    phone: "1111111",
    address: "456 Tech Street, San Francisco, CA 94102",
    type: "corporate",
    status: "active",
    source: "google",
    budget: 1200000,
    preferences: {
      propertyType: "office",
      location: "San Francisco",
      size: "5000+ sq ft",
      amenities: ["High-Speed Internet", "Parking", "Conference Rooms"]
    },
    assignedAgent: "Sarah Johnson",
    lastContact: "2024-01-22T11:20:00Z",
    totalDeals: 1,
    totalValue: 1200000,
    notes: "Tech company looking for modern office space, very responsive",
    createdAt: "2024-01-18T09:15:00Z",
    updatedAt: "2024-01-22T11:20:00Z",
    tags: ["corporate", "tech", "office-space"]
  },
  {
    _id: "client_003",
    name: "Emily Rodriguez",
    email: "emily@example.com",
    phone: "1111111",
    address: "789 Family Lane, Miami, FL 33101",
    type: "individual",
    status: "active",
    source: "facebook",
    budget: 650000,
    preferences: {
      propertyType: "house",
      location: "Miami",
      bedrooms: 4,
      bathrooms: 3,
      amenities: ["Pool", "Garden", "Garage"]
    },
    assignedAgent: "Mike Wilson",
    lastContact: "2024-01-19T13:30:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "Family with children, needs space and safety features",
    createdAt: "2024-01-12T16:20:00Z",
    updatedAt: "2024-01-19T13:30:00Z",
    tags: ["family", "miami", "house", "pool"]
  },
  {
    _id: "client_004",
    name: "David Thompson",
    email: "david@example.com",
    phone: "1111111",
    address: "321 Business Blvd, Chicago, IL 60601",
    type: "business",
    status: "prospect",
    source: "referral",
    budget: 950000,
    preferences: {
      propertyType: "retail",
      location: "Chicago",
      size: "2000+ sq ft",
      amenities: ["High Foot Traffic", "Parking", "Storage"]
    },
    assignedAgent: "Lisa Brown",
    lastContact: "2024-01-25T08:45:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "Referred by existing client, needs retail space for business",
    createdAt: "2024-01-25T08:45:00Z",
    updatedAt: "2024-01-25T08:45:00Z",
    tags: ["business", "retail", "chicago", "referral"]
  },
  {
    _id: "client_005",
    name: "Anna Kowalski",
    email: "anna@example.com",
    phone: "1111111",
    address: "654 Heritage St, Boston, MA 02101",
    type: "individual",
    status: "inactive",
    source: "directCall",
    budget: 750000,
    preferences: {
      propertyType: "townhouse",
      location: "Boston",
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Historic Features", "Garden", "Parking"]
    },
    assignedAgent: "Tom Davis",
    lastContact: "2024-01-23T16:55:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "Budget constraints, decided to wait 6 months",
    createdAt: "2024-01-08T14:10:00Z",
    updatedAt: "2024-01-23T16:55:00Z",
    tags: ["historic", "boston", "budget-constrained"]
  },
  {
    _id: "client_006",
    name: "James Wilson",
    email: "james@example.com",
    phone: "1111111",
    address: "987 Corporate Plaza, Seattle, WA 98101",
    type: "individual",
    status: "active",
    source: "facebookComment",
    budget: 1100000,
    preferences: {
      propertyType: "condo",
      location: "Seattle",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["City Views", "Gym", "Concierge"]
    },
    assignedAgent: "Jennifer Lee",
    lastContact: "2024-01-24T09:15:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "Professional, very busy schedule, hard to schedule meetings",
    createdAt: "2024-01-20T11:30:00Z",
    updatedAt: "2024-01-24T09:15:00Z",
    tags: ["professional", "seattle", "condo", "busy-schedule"]
  },
  {
    _id: "client_007",
    name: "Maria Garcia",
    email: "maria@example.com",
    phone: "1111111",
    address: "147 Family Circle, Austin, TX 78701",
    type: "individual",
    status: "active",
    source: "friendAndFamily",
    budget: 450000,
    preferences: {
      propertyType: "house",
      location: "Austin",
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Good Schools", "Quiet Neighborhood", "Garage"]
    },
    assignedAgent: "Robert Taylor",
    lastContact: "2024-01-24T10:30:00Z",
    totalDeals: 0,
    totalValue: 0,
    notes: "First-time buyers, need guidance through the process",
    createdAt: "2024-01-22T15:45:00Z",
    updatedAt: "2024-01-24T10:30:00Z",
    tags: ["first-time-buyers", "austin", "family", "guidance-needed"]
  }
];

export const mockClientStats = {
  byType: [
    { name: "Individual", count: 5 },
    { name: "Corporate", count: 1 },
    { name: "Business", count: 1 }
  ],
  byStatus: [
    { name: "Active", count: 5 },
    { name: "Prospect", count: 1 },
    { name: "Inactive", count: 1 }
  ],
  bySource: [
    { name: "Instagram", count: 1 },
    { name: "Google", count: 1 },
    { name: "Facebook", count: 1 },
    { name: "Referral", count: 1 },
    { name: "Direct Call", count: 1 },
    { name: "Family", count: 1 },
    { name: "Facebook Comment", count: 1 }
  ]
};
