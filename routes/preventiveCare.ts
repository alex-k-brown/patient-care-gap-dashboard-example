import { Router } from 'express';
import { CARE_GAP_RECORDS, CARE_TYPES } from '../mockData.js';
import dayjs from 'dayjs';

const router = Router();

const careTypeMap = new Map(CARE_TYPES.map((type) => [type.id, type.name]));
const getOverdueDays = (dueDate: string, today: dayjs.Dayjs) => {
  const due = dayjs(dueDate);
  return today.diff(due, 'day');
};
const parseQueryNumber = (value: string | undefined) => {
  if (value === undefined) return undefined;
  const num = Number(value);
  return isNaN(num) ? undefined : num;
};

router.get('/types', (_req, res) => {
  res.json(CARE_TYPES);
});

router.get('/gaps', (req, res) => {
  const today = dayjs();
  const { page, limit } = req.query;
  const typeId = req.query.typeid as string | undefined;
  const overdueMin = parseQueryNumber(
    req.query.overduemin as string | undefined,
  );
  const overdueMax = parseQueryNumber(
    req.query.overduemax as string | undefined,
  );

  const filteredById = typeId
    ? CARE_GAP_RECORDS.filter((record) => record.careGap.type === typeId)
    : CARE_GAP_RECORDS;

  const reqPage = Math.max(1, parseInt(page as string) || 1);
  const reqLimit = Math.min(100, parseInt(limit as string) || 25);
  const offset = (reqPage - 1) * reqLimit;

  const gaps = filteredById
    .map((record) => ({
      careGap: {
        ...record.careGap,
        name: careTypeMap.get(record.careGap.type) || 'Unknown',
      },
      patient: record.patient,
      daysOverdue: getOverdueDays(record.due, today),
    }))
    .filter(
      (record) =>
        (overdueMin === undefined || record.daysOverdue >= overdueMin) &&
        (overdueMax === undefined || record.daysOverdue <= overdueMax),
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
