import type { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = req.body as {
      email?: string
      password?: string
      firstName?: string
      lastName?: string
    }

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return res.status(409).json({ error: 'An account with this email already exists' })
    }

    const hashed = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        firstName,
        lastName,
      },
    })

    const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    })

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    })
  } catch (err) {
    console.error('Register error', err)
    return res.status(500).json({ error: 'Failed to register user' })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string }

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    })

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    })
  } catch (err) {
    console.error('Login error', err)
    return res.status(500).json({ error: 'Failed to log in' })
  }
}

