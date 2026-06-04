import { Router } from 'express';
import { CARE_TYPES } from '../mockData.js';

const router = Router();

router.get('/types', (_req, res) => {
  res.json(CARE_TYPES);
});

export default router;
