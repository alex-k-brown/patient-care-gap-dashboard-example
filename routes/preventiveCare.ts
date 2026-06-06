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

router.get('/gaps', (req, res) => {
  const { typeid, overduemin, overduemax, page, limit } = req.query;

  const filteredById = typeid
    ? CARE_GAP_RECORDS.filter((record) => record.careGap.type === typeid)
    : CARE_GAP_RECORDS;

  const reqPage = Math.max(1, parseInt(page as string) || 1);
  const reqLimit = Math.min(100, parseInt(limit as string) || 25);
  const offset = (reqPage - 1) * reqLimit;

  const gaps = filteredById
    .map((record) => ({
      careGap: {
        ...record.careGap,
        name: careTypeMap.get(record.careGap.type),
      },
      patient: record.patient,
      daysOverdue: getOverdueDays(record.due),
    }))
    .filter(
      (record) =>
        (overduemin === undefined ||
          record.daysOverdue >= Number(overduemin)) &&
        (overduemax === undefined || record.daysOverdue <= Number(overduemax)),
    );

  const paginatedGaps = gaps.slice(offset, offset + reqLimit);

  const response = {
    total: gaps.length,
    totalPages: Math.ceil(gaps.length / reqLimit),
    pageSize: reqLimit,
    page: reqPage,
    data: paginatedGaps,
  };

  res.json(response);
});

export default router;
