# API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication

### Register
```
POST /api/auth/register
```

### Login
```
POST /api/auth/login
```

### Logout
```
POST /api/auth/logout
```

## Videos

### Get All Videos
```
GET /api/videos
Query params: ?category=id&accessType=FREE&page=1&limit=10
```

### Get Video by ID
```
GET /api/videos/:id
```

### Search Videos
```
GET /api/videos/search?q=query
```

## Subscriptions

### Get User Subscriptions
```
GET /api/subscriptions
```

### Create Subscription
```
POST /api/subscriptions
```

### Cancel Subscription
```
DELETE /api/subscriptions/:id
```

## Payments

### Create Payment Session
```
POST /api/payments/create-session
```

### Stripe Webhook
```
POST /api/payments/webhook
```

## Webinars

### Get All Webinars
```
GET /api/webinars
```

### Register for Webinar
```
POST /api/webinars/:id/register
```

## Admin

### Admin Dashboard Stats
```
GET /api/admin/dashboard
```

### Create Video
```
POST /api/admin/videos
```

### Update Video
```
PUT /api/admin/videos/:id
```

### Delete Video
```
DELETE /api/admin/videos/:id
```

## Users

### Get User Profile
```
GET /api/users/profile
```

### Get Viewing History
```
GET /api/users/history
```
