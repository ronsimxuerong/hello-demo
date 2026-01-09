import { Router } from 'express';
const router = Router();

// Admin routes - protected by admin middleware
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard endpoint - to be implemented' });
});

router.post('/videos', (req, res) => {
  res.json({ message: 'Create video endpoint - to be implemented' });
});

export default router;
