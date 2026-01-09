import { Router } from 'express';
const router = Router();

// Payment routes
router.post('/create-session', (req, res) => {
  res.json({ message: 'Create payment session endpoint - to be implemented' });
});

router.post('/webhook', (req, res) => {
  res.json({ message: 'Stripe webhook endpoint - to be implemented' });
});

export default router;
