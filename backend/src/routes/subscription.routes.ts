import { Router } from 'express';
const router = Router();

// Subscription routes
router.get('/', (req, res) => {
  res.json({ message: 'Get subscriptions endpoint - to be implemented' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create subscription endpoint - to be implemented' });
});

export default router;
