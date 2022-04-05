import express from 'express';
import { duties } from './duties';

const router = express.Router();

// Routes
router.use("/duties", duties);

export default router;