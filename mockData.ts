// Mock Data — Patient Care Gap Dashboard
// Use this in your Express backend to simulate a real data source

export interface CareType {
  id: string;
  name: string;
}

export interface Patient {
  id: string;
  name: string;
}

export interface CareGapRecord {
  careGap: {
    id: string;
    type: string;
  };
  patient: {
    id: string;
    name: string;
  };
  daysOverdue: number;
}

// ---------------------------------------------------------------------------
// Care Gap Types
// ---------------------------------------------------------------------------

export const CARE_TYPES: CareType[] = [
  { id: '1', name: 'Annual Wellness Visit' },
  { id: '2', name: 'Flu Shot' },
  { id: '3', name: 'A1C Test' },
  { id: '4', name: 'Blood Pressure Check' },
  { id: '5', name: 'Colorectal Cancer Screening' },
  { id: '6', name: 'Mammogram' },
  { id: '7', name: 'Cholesterol Check' },
  { id: '8', name: 'Diabetic Eye Exam' },
];

// ---------------------------------------------------------------------------
// Patients
// ---------------------------------------------------------------------------

const PATIENTS: Patient[] = [
  { id: 'p001', name: 'Margaret Thompson' },
  { id: 'p002', name: 'James Okafor' },
  { id: 'p003', name: 'Linda Nguyen' },
  { id: 'p004', name: 'Robert Castillo' },
  { id: 'p005', name: 'Patricia Kim' },
  { id: 'p006', name: 'Michael Patel' },
  { id: 'p007', name: 'Barbara Williams' },
  { id: 'p008', name: 'David Chen' },
  { id: 'p009', name: 'Susan Rivera' },
  { id: 'p010', name: 'Richard Osei' },
  { id: 'p011', name: 'Dorothy Martinez' },
  { id: 'p012', name: 'Joseph Robinson' },
  { id: 'p013', name: 'Jessica Anderson' },
  { id: 'p014', name: 'Thomas Jackson' },
  { id: 'p015', name: 'Sarah White' },
  { id: 'p016', name: 'Charles Harris' },
  { id: 'p017', name: 'Karen Lewis' },
  { id: 'p018', name: 'Christopher Clark' },
  { id: 'p019', name: 'Nancy Walker' },
  { id: 'p020', name: 'Daniel Hall' },
  { id: 'p021', name: 'Betty Allen' },
  { id: 'p022', name: 'Matthew Young' },
  { id: 'p023', name: 'Sandra Hernandez' },
  { id: 'p024', name: 'Anthony King' },
  { id: 'p025', name: 'Ashley Wright' },
];

// ---------------------------------------------------------------------------
// Care Gap Records
// 75 records across 25 patients and 8 care gap types
// Some patients have multiple gaps, some have just one
// Days overdue ranges from 1 to 365
// ---------------------------------------------------------------------------

export const CARE_GAP_RECORDS: CareGapRecord[] = [
  // Annual Wellness Visit gaps
  {
    careGap: { id: 'cg001', type: '1' },
    patient: { id: 'p001', name: 'Margaret Thompson' },
    daysOverdue: 45,
  },
  {
    careGap: { id: 'cg002', type: '1' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    daysOverdue: 120,
  },
  {
    careGap: { id: 'cg003', type: '1' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    daysOverdue: 8,
  },
  {
    careGap: { id: 'cg004', type: '1' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    daysOverdue: 210,
  },
  {
    careGap: { id: 'cg005', type: '1' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    daysOverdue: 365,
  },
  {
    careGap: { id: 'cg006', type: '1' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    daysOverdue: 72,
  },
  {
    careGap: { id: 'cg007', type: '1' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    daysOverdue: 15,
  },
  {
    careGap: { id: 'cg008', type: '1' },
    patient: { id: 'p015', name: 'Sarah White' },
    daysOverdue: 180,
  },
  {
    careGap: { id: 'cg009', type: '1' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    daysOverdue: 3,
  },
  {
    careGap: { id: 'cg010', type: '1' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    daysOverdue: 290,
  },

  // Flu Shot gaps
  {
    careGap: { id: 'cg011', type: '2' },
    patient: { id: 'p002', name: 'James Okafor' },
    daysOverdue: 30,
  },
  {
    careGap: { id: 'cg012', type: '2' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    daysOverdue: 60,
  },
  {
    careGap: { id: 'cg013', type: '2' },
    patient: { id: 'p006', name: 'Michael Patel' },
    daysOverdue: 5,
  },
  {
    careGap: { id: 'cg014', type: '2' },
    patient: { id: 'p008', name: 'David Chen' },
    daysOverdue: 145,
  },
  {
    careGap: { id: 'cg015', type: '2' },
    patient: { id: 'p010', name: 'Richard Osei' },
    daysOverdue: 22,
  },
  {
    careGap: { id: 'cg016', type: '2' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    daysOverdue: 88,
  },
  {
    careGap: { id: 'cg017', type: '2' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    daysOverdue: 200,
  },
  {
    careGap: { id: 'cg018', type: '2' },
    patient: { id: 'p016', name: 'Charles Harris' },
    daysOverdue: 11,
  },
  {
    careGap: { id: 'cg019', type: '2' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    daysOverdue: 55,
  },
  {
    careGap: { id: 'cg020', type: '2' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    daysOverdue: 320,
  },

  // A1C Test gaps
  {
    careGap: { id: 'cg021', type: '3' },
    patient: { id: 'p001', name: 'Margaret Thompson' },
    daysOverdue: 90,
  },
  {
    careGap: { id: 'cg022', type: '3' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    daysOverdue: 18,
  },
  {
    careGap: { id: 'cg023', type: '3' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    daysOverdue: 135,
  },
  {
    careGap: { id: 'cg024', type: '3' },
    patient: { id: 'p010', name: 'Richard Osei' },
    daysOverdue: 7,
  },
  {
    careGap: { id: 'cg025', type: '3' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    daysOverdue: 245,
  },
  {
    careGap: { id: 'cg026', type: '3' },
    patient: { id: 'p016', name: 'Charles Harris' },
    daysOverdue: 40,
  },
  {
    careGap: { id: 'cg027', type: '3' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    daysOverdue: 160,
  },
  {
    careGap: { id: 'cg028', type: '3' },
    patient: { id: 'p022', name: 'Matthew Young' },
    daysOverdue: 12,
  },
  {
    careGap: { id: 'cg029', type: '3' },
    patient: { id: 'p024', name: 'Anthony King' },
    daysOverdue: 300,
  },
  {
    careGap: { id: 'cg030', type: '3' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    daysOverdue: 66,
  },

  // Blood Pressure Check gaps
  {
    careGap: { id: 'cg031', type: '4' },
    patient: { id: 'p002', name: 'James Okafor' },
    daysOverdue: 14,
  },
  {
    careGap: { id: 'cg032', type: '4' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    daysOverdue: 75,
  },
  {
    careGap: { id: 'cg033', type: '4' },
    patient: { id: 'p008', name: 'David Chen' },
    daysOverdue: 190,
  },
  {
    careGap: { id: 'cg034', type: '4' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    daysOverdue: 33,
  },
  {
    careGap: { id: 'cg035', type: '4' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    daysOverdue: 110,
  },
  {
    careGap: { id: 'cg036', type: '4' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    daysOverdue: 250,
  },
  {
    careGap: { id: 'cg037', type: '4' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    daysOverdue: 6,
  },
  {
    careGap: { id: 'cg038', type: '4' },
    patient: { id: 'p021', name: 'Betty Allen' },
    daysOverdue: 95,
  },
  {
    careGap: { id: 'cg039', type: '4' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    daysOverdue: 170,
  },
  {
    careGap: { id: 'cg040', type: '4' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    daysOverdue: 28,
  },

  // Colorectal Cancer Screening gaps
  {
    careGap: { id: 'cg041', type: '5' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    daysOverdue: 340,
  },
  {
    careGap: { id: 'cg042', type: '5' },
    patient: { id: 'p006', name: 'Michael Patel' },
    daysOverdue: 85,
  },
  {
    careGap: { id: 'cg043', type: '5' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    daysOverdue: 220,
  },
  {
    careGap: { id: 'cg044', type: '5' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    daysOverdue: 42,
  },
  {
    careGap: { id: 'cg045', type: '5' },
    patient: { id: 'p015', name: 'Sarah White' },
    daysOverdue: 155,
  },
  {
    careGap: { id: 'cg046', type: '5' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    daysOverdue: 9,
  },
  {
    careGap: { id: 'cg047', type: '5' },
    patient: { id: 'p021', name: 'Betty Allen' },
    daysOverdue: 275,
  },
  {
    careGap: { id: 'cg048', type: '5' },
    patient: { id: 'p024', name: 'Anthony King' },
    daysOverdue: 50,
  },

  // Mammogram gaps
  {
    careGap: { id: 'cg049', type: '6' },
    patient: { id: 'p001', name: 'Margaret Thompson' },
    daysOverdue: 130,
  },
  {
    careGap: { id: 'cg050', type: '6' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    daysOverdue: 20,
  },
  {
    careGap: { id: 'cg051', type: '6' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    daysOverdue: 310,
  },
  {
    careGap: { id: 'cg052', type: '6' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    daysOverdue: 65,
  },
  {
    careGap: { id: 'cg053', type: '6' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    daysOverdue: 175,
  },
  {
    careGap: { id: 'cg054', type: '6' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    daysOverdue: 38,
  },
  {
    careGap: { id: 'cg055', type: '6' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    daysOverdue: 230,
  },
  {
    careGap: { id: 'cg056', type: '6' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    daysOverdue: 4,
  },

  // Cholesterol Check gaps
  {
    careGap: { id: 'cg057', type: '7' },
    patient: { id: 'p002', name: 'James Okafor' },
    daysOverdue: 100,
  },
  {
    careGap: { id: 'cg058', type: '7' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    daysOverdue: 25,
  },
  {
    careGap: { id: 'cg059', type: '7' },
    patient: { id: 'p006', name: 'Michael Patel' },
    daysOverdue: 195,
  },
  {
    careGap: { id: 'cg060', type: '7' },
    patient: { id: 'p008', name: 'David Chen' },
    daysOverdue: 70,
  },
  {
    careGap: { id: 'cg061', type: '7' },
    patient: { id: 'p010', name: 'Richard Osei' },
    daysOverdue: 285,
  },
  {
    careGap: { id: 'cg062', type: '7' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    daysOverdue: 16,
  },
  {
    careGap: { id: 'cg063', type: '7' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    daysOverdue: 140,
  },
  {
    careGap: { id: 'cg064', type: '7' },
    patient: { id: 'p016', name: 'Charles Harris' },
    daysOverdue: 355,
  },
  {
    careGap: { id: 'cg065', type: '7' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    daysOverdue: 52,
  },

  // Diabetic Eye Exam gaps
  {
    careGap: { id: 'cg066', type: '8' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    daysOverdue: 185,
  },
  {
    careGap: { id: 'cg067', type: '8' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    daysOverdue: 47,
  },
  {
    careGap: { id: 'cg068', type: '8' },
    patient: { id: 'p015', name: 'Sarah White' },
    daysOverdue: 260,
  },
  {
    careGap: { id: 'cg069', type: '8' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    daysOverdue: 32,
  },
  {
    careGap: { id: 'cg070', type: '8' },
    patient: { id: 'p021', name: 'Betty Allen' },
    daysOverdue: 115,
  },
  {
    careGap: { id: 'cg071', type: '8' },
    patient: { id: 'p022', name: 'Matthew Young' },
    daysOverdue: 78,
  },
  {
    careGap: { id: 'cg072', type: '8' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    daysOverdue: 330,
  },
  {
    careGap: { id: 'cg073', type: '8' },
    patient: { id: 'p024', name: 'Anthony King' },
    daysOverdue: 19,
  },
  {
    careGap: { id: 'cg074', type: '8' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    daysOverdue: 148,
  },
  {
    careGap: { id: 'cg075', type: '8' },
    patient: { id: 'p022', name: 'Matthew Young' },
    daysOverdue: 235,
  },
];
