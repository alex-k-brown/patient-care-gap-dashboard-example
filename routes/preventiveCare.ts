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
  const { typeid, overduemin, overduemax } = _req.query;

  const filteredById = typeid
    ? CARE_GAP_RECORDS.filter((record) => record.careGap.type === typeid)
    : CARE_GAP_RECORDS;

  const filteredByMinMax = filteredById.filter((record) => {
    const overdueDays = getOverdueDays(record.due);
    return (
      (overduemin === undefined || overdueDays >= Number(overduemin)) &&
      (overduemax === undefined || overdueDays <= Number(overduemax))
    );
  });

  const gaps = filteredByMinMax.map((record) => [
    {
      careGap: {
        ...record.careGap,
        name: careTypeMap.get(record.careGap.type),
      },
      patient: record.patient,
      daysOverdue: getOverdueDays(record.due),
    },
  ]);

  const response = {
    total: gaps.length,
    data: gaps,
  };

  res.json(response);
});

export default router;
