# Talenture AI Hub - Setup Guide

## Overview
Talenture AI Hub is a full-stack application for managing AI writing and voice tools with role-based access control and admin capabilities.

## Tech Stack
- **Frontend**: Next.js 15 with React 19
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS with shadcn/ui components

## Prerequisites
1. Node.js 18+ and pnpm
2. A Supabase project (free tier available at https://supabase.com)
3. Environment variables configured in `.env.local`

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These are available in your Supabase project settings under API keys.

## Database Setup

The database migrations have already been applied:
1. **profiles** table - Stores user profile data with roles (user, staff, admin)
2. **handle_new_user** trigger - Automatically creates profile when user signs up

### RLS Policies
Row-Level Security is enabled with the following policies:
- Users can view their own profile
- Staff and admins can view all profiles
- Users can update their own profile only
- Admins can delete profiles

## Features

### Authentication
- Email/password sign up with email confirmation
- Login with existing account
- Secure session management
- Automatic logout functionality

### Dashboard
- User-friendly interface for accessing Talenture AI
- Writing Assistant tool (placeholder)
- Voice AI tool with ElevenLabs integration (placeholder)
- Responsive design for mobile and desktop

### Admin Section
- Access restricted to admin and staff roles
- View all users in the system
- Manage user roles (user, staff, admin)
- Activate/deactivate user accounts
- User creation date tracking

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Configure environment**:
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase credentials

3. **Run development server**:
   ```bash
   pnpm dev
   ```

4. **Access the application**:
   - Navigate to http://localhost:3000
   - Sign up for a new account (requires email verification)
   - Once verified, access the dashboard

## Default Roles

When a user signs up, they are assigned the `user` role by default. Admins can change roles to:
- **user**: Standard user access
- **staff**: Can access admin panel
- **admin**: Full administrative access

## Key Files

### Authentication
- `/lib/supabase/client.ts` - Browser client setup
- `/lib/supabase/server.ts` - Server client setup
- `/lib/auth-context.tsx` - Auth state management
- `/lib/auth-utils.ts` - Auth helper functions
- `/lib/admin-actions.ts` - Admin server actions

### Pages
- `/app/auth/login/page.tsx` - Login page
- `/app/auth/sign-up/page.tsx` - Sign up page
- `/app/auth/sign-up-success/page.tsx` - Post-signup confirmation
- `/app/auth/callback/route.ts` - Email confirmation callback
- `/app/dashboard/page.tsx` - Main dashboard
- `/app/admin/page.tsx` - Admin users management
- `/app/tools/writing-assistant/page.tsx` - Writing tool
- `/app/tools/voice-ai/page.tsx` - Voice tool

### Components
- `/components/dashboard-header.tsx` - Navigation header with user menu

## Deployment

### To Vercel
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel project settings
4. Vercel will automatically deploy on push

### To Other Platforms
The application is a standard Next.js 15 app and can be deployed to any platform that supports Node.js (AWS, DigitalOcean, etc.).

## Troubleshooting

### Email Confirmation Not Received
- Check spam folder
- Ensure `NEXT_PUBLIC_SUPABASE_URL` is correctly configured
- Verify email is properly formatted

### Login Fails After Sign Up
- Confirm email address is verified
- Check that profile was created (check Supabase dashboard)
- Clear browser cookies and try again

### Admin Panel Not Showing
- Ensure user role is set to `staff` or `admin` in Supabase dashboard
- Refresh the page after role change
- Check auth context is loaded properly

## Security Considerations

- All database access is protected by Row-Level Security (RLS)
- Passwords are hashed by Supabase Auth
- Session tokens are stored securely in HTTP-only cookies
- API routes use server-side validation
- Admin operations verify user role before executing

## Support

For Supabase help: https://supabase.com/docs
For Next.js help: https://nextjs.org/docs
