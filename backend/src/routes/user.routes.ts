import { Router } from 'express';
const router = Router();

// User routes
router.get('/profile', (req, res) => {
  res.json({ message: 'Get user profile endpoint - to be implemented' });
});

router.get('/history', (req, res) => {
  res.json({ message: 'Get viewing history endpoint - to be implemented' });
});

export default router;
