import { Router } from 'express';
import { CARE_GAP_RECORDS, CARE_TYPES } from '../mockData.js';
import dayjs from 'dayjs';

const router = Router();

const careTypeMap = new Map(CARE_TYPES.map((type) => [type.id, type.name]));
const getOverdueDays = (dueDate: string) => {
  const due = dayjs(dueDate);
  const today = dayjs();
  return today.diff(due, 'day');
};

router.get('/types', (_req, res) => {
  res.json(CARE_TYPES);
});

router.get('/gaps', (_req, res) => {
  const { typeid } = _req.query;

  const records = typeid
    ? CARE_GAP_RECORDS.filter((record) => record.careGap.type === typeid)
    : CARE_GAP_RECORDS;
  const gaps = records.map((record) => [
    {
      careGap: {
        ...record.careGap,
        name: careTypeMap.get(record.careGap.type),
      },
      patient: record.patient,
      daysOverdue: getOverdueDays(record.due),
    },
  ]);
  res.json(gaps);
});

export default router;
