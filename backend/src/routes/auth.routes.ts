import { Router } from 'express';
// TODO: Import controllers when created
// import { register, login, logout, refreshToken } from '../controllers/auth.controller';

const router = Router();

// Auth routes
// router.post('/register', register);
// router.post('/login', login);
// router.post('/logout', logout);
// router.post('/refresh', refreshToken);

// Placeholder
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

export default router;
