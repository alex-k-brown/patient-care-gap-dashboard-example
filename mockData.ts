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
  due: string;
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
    due: '2026-04-20T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg002', type: '1' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    due: '2026-02-04T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg003', type: '1' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    due: '2026-05-27T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg004', type: '1' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    due: '2025-11-06T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg005', type: '1' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    due: '2025-06-04T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg006', type: '1' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    due: '2026-03-24T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg007', type: '1' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    due: '2026-05-20T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg008', type: '1' },
    patient: { id: 'p015', name: 'Sarah White' },
    due: '2025-12-06T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg009', type: '1' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    due: '2026-06-01T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg010', type: '1' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    due: '2025-08-18T00:00:00.000Z',
  },

  // Flu Shot gaps
  {
    careGap: { id: 'cg011', type: '2' },
    patient: { id: 'p002', name: 'James Okafor' },
    due: '2026-05-05T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg012', type: '2' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    due: '2026-04-05T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg013', type: '2' },
    patient: { id: 'p006', name: 'Michael Patel' },
    due: '2026-05-30T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg014', type: '2' },
    patient: { id: 'p008', name: 'David Chen' },
    due: '2026-01-10T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg015', type: '2' },
    patient: { id: 'p010', name: 'Richard Osei' },
    due: '2026-05-13T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg016', type: '2' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    due: '2026-03-08T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg017', type: '2' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    due: '2025-11-16T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg018', type: '2' },
    patient: { id: 'p016', name: 'Charles Harris' },
    due: '2026-05-24T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg019', type: '2' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    due: '2026-04-10T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg020', type: '2' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    due: '2025-07-19T00:00:00.000Z',
  },

  // A1C Test gaps
  {
    careGap: { id: 'cg021', type: '3' },
    patient: { id: 'p001', name: 'Margaret Thompson' },
    due: '2026-03-06T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg022', type: '3' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    due: '2026-05-17T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg023', type: '3' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    due: '2026-01-20T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg024', type: '3' },
    patient: { id: 'p010', name: 'Richard Osei' },
    due: '2026-05-28T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg025', type: '3' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    due: '2025-10-02T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg026', type: '3' },
    patient: { id: 'p016', name: 'Charles Harris' },
    due: '2026-04-25T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg027', type: '3' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    due: '2025-12-26T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg028', type: '3' },
    patient: { id: 'p022', name: 'Matthew Young' },
    due: '2026-05-23T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg029', type: '3' },
    patient: { id: 'p024', name: 'Anthony King' },
    due: '2025-08-08T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg030', type: '3' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    due: '2026-03-30T00:00:00.000Z',
  },

  // Blood Pressure Check gaps
  {
    careGap: { id: 'cg031', type: '4' },
    patient: { id: 'p002', name: 'James Okafor' },
    due: '2026-05-21T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg032', type: '4' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    due: '2026-03-21T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg033', type: '4' },
    patient: { id: 'p008', name: 'David Chen' },
    due: '2025-11-26T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg034', type: '4' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    due: '2026-05-02T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg035', type: '4' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    due: '2026-02-14T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg036', type: '4' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    due: '2025-09-27T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg037', type: '4' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    due: '2026-05-29T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg038', type: '4' },
    patient: { id: 'p021', name: 'Betty Allen' },
    due: '2026-03-01T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg039', type: '4' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    due: '2025-12-16T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg040', type: '4' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    due: '2026-05-07T00:00:00.000Z',
  },

  // Colorectal Cancer Screening gaps
  {
    careGap: { id: 'cg041', type: '5' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    due: '2025-06-29T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg042', type: '5' },
    patient: { id: 'p006', name: 'Michael Patel' },
    due: '2026-03-11T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg043', type: '5' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    due: '2025-10-27T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg044', type: '5' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    due: '2026-04-23T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg045', type: '5' },
    patient: { id: 'p015', name: 'Sarah White' },
    due: '2025-12-31T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg046', type: '5' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    due: '2026-05-26T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg047', type: '5' },
    patient: { id: 'p021', name: 'Betty Allen' },
    due: '2025-09-02T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg048', type: '5' },
    patient: { id: 'p024', name: 'Anthony King' },
    due: '2026-04-15T00:00:00.000Z',
  },

  // Mammogram gaps
  {
    careGap: { id: 'cg049', type: '6' },
    patient: { id: 'p001', name: 'Margaret Thompson' },
    due: '2026-01-25T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg050', type: '6' },
    patient: { id: 'p005', name: 'Patricia Kim' },
    due: '2026-05-15T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg051', type: '6' },
    patient: { id: 'p007', name: 'Barbara Williams' },
    due: '2025-07-29T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg052', type: '6' },
    patient: { id: 'p011', name: 'Dorothy Martinez' },
    due: '2026-03-31T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg053', type: '6' },
    patient: { id: 'p013', name: 'Jessica Anderson' },
    due: '2025-12-11T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg054', type: '6' },
    patient: { id: 'p017', name: 'Karen Lewis' },
    due: '2026-04-27T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg055', type: '6' },
    patient: { id: 'p019', name: 'Nancy Walker' },
    due: '2025-10-17T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg056', type: '6' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    due: '2026-05-31T00:00:00.000Z',
  },

  // Cholesterol Check gaps
  {
    careGap: { id: 'cg057', type: '7' },
    patient: { id: 'p002', name: 'James Okafor' },
    due: '2026-02-24T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg058', type: '7' },
    patient: { id: 'p004', name: 'Robert Castillo' },
    due: '2026-05-10T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg059', type: '7' },
    patient: { id: 'p006', name: 'Michael Patel' },
    due: '2025-11-21T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg060', type: '7' },
    patient: { id: 'p008', name: 'David Chen' },
    due: '2026-03-26T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg061', type: '7' },
    patient: { id: 'p010', name: 'Richard Osei' },
    due: '2025-08-23T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg062', type: '7' },
    patient: { id: 'p012', name: 'Joseph Robinson' },
    due: '2026-05-19T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg063', type: '7' },
    patient: { id: 'p014', name: 'Thomas Jackson' },
    due: '2026-01-15T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg064', type: '7' },
    patient: { id: 'p016', name: 'Charles Harris' },
    due: '2025-06-14T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg065', type: '7' },
    patient: { id: 'p020', name: 'Daniel Hall' },
    due: '2026-04-13T00:00:00.000Z',
  },

  // Diabetic Eye Exam gaps
  {
    careGap: { id: 'cg066', type: '8' },
    patient: { id: 'p003', name: 'Linda Nguyen' },
    due: '2025-12-01T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg067', type: '8' },
    patient: { id: 'p009', name: 'Susan Rivera' },
    due: '2026-04-18T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg068', type: '8' },
    patient: { id: 'p015', name: 'Sarah White' },
    due: '2025-09-17T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg069', type: '8' },
    patient: { id: 'p018', name: 'Christopher Clark' },
    due: '2026-05-03T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg070', type: '8' },
    patient: { id: 'p021', name: 'Betty Allen' },
    due: '2026-02-09T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg071', type: '8' },
    patient: { id: 'p022', name: 'Matthew Young' },
    due: '2026-03-18T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg072', type: '8' },
    patient: { id: 'p023', name: 'Sandra Hernandez' },
    due: '2025-07-09T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg073', type: '8' },
    patient: { id: 'p024', name: 'Anthony King' },
    due: '2026-05-16T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg074', type: '8' },
    patient: { id: 'p025', name: 'Ashley Wright' },
    due: '2026-01-07T00:00:00.000Z',
  },
  {
    careGap: { id: 'cg075', type: '8' },
    patient: { id: 'p022', name: 'Matthew Young' },
    due: '2025-10-12T00:00:00.000Z',
  },
];
