import { Router } from 'express';
const router = Router();

// Webinar routes
router.get('/', (req, res) => {
  res.json({ message: 'Get webinars endpoint - to be implemented' });
});

router.post('/:id/register', (req, res) => {
  res.json({ message: 'Register for webinar endpoint - to be implemented' });
});

export default router;
