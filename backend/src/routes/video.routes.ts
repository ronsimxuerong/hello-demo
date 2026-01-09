import { Router } from 'express';
const router = Router();

// Video routes
router.get('/', (req, res) => {
  res.json({ message: 'Get videos endpoint - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get video by ID endpoint - to be implemented' });
});

export default router;
