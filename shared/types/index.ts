// Shared TypeScript types for frontend and backend

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  PENDING = 'PENDING',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export enum VideoAccessType {
  FREE = 'FREE',
  SUBSCRIPTION = 'SUBSCRIPTION',
  PAY_PER_VIEW = 'PAY_PER_VIEW',
  WEBINAR = 'WEBINAR',
}

export enum WebinarStatus {
  SCHEDULED = 'SCHEDULED',
  LIVE = 'LIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  role: UserRole;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  videoUrl: string;
  duration?: number;
  accessType: VideoAccessType;
  price?: number;
  isPublished: boolean;
  views: number;
  categoryId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: SubscriptionStatus;
  startDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Webinar {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  videoUrl?: string;
  scheduledAt: string;
  duration?: number;
  status: WebinarStatus;
  maxAttendees?: number;
  createdAt: string;
  updatedAt: string;
}
