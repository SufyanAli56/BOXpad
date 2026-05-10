# User Profile Auto-Creation Setup Guide

## REQ-USER-01: Auto Profile Creation

This guide explains how to set up automatic user profile creation when users sign up.

## 🎯 Feature Overview

When a user signs up:
1. User account is created in `auth.users` table
2. Database trigger automatically creates a profile in `public.users` table
3. Profile includes:
   - `id` (UUID from auth.users)
   - `email` (from signup)
   - `username` (extracted from email prefix)
   - `full_name` (optional)
   - `avatar_url` (optional)
   - `bio` (optional)
   - Timestamps

## 📋 Setup Steps

### Step 1: Run SQL Setup

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Open the file `supabase-setup.sql`
4. Copy and paste the entire SQL script
5. Click **Run** to execute

This will:
- ✅ Create `users` table
- ✅ Enable Row Level Security (RLS)
- ✅ Create RLS policies
- ✅ Create username extraction function
- ✅ Create auto-profile creation trigger
- ✅ Set up automatic timestamp updates

### Step 2: Verify Database Setup

Run these queries in SQL Editor to verify:

```sql
-- Check if users table exists
SELECT * FROM public.users;

-- Check RLS policies
SELECT tablename, policyname FROM pg_policies WHERE tablename = 'users';

-- Check triggers
SELECT trigger_name, event_manipulation, event_object_table 
FROM information_schema.triggers 
WHERE event_object_table = 'users';
```

### Step 3: Configure Environment Variables

Make sure your `.env.local` has:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Test the Feature

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/login`

3. Click "Sign Up" and create a new account

4. Check your Supabase dashboard:
   - Go to **Authentication** → **Users** (should see new user)
   - Go to **Table Editor** → **users** (should see new profile)

## 🔍 How It Works

### Username Generation

The system extracts username from email:

```
john.doe@example.com → john_doe
jane-smith@example.com → jane_smith
user123@example.com → user123
```

If username exists, it appends a number:
```
john_doe → john_doe1 → john_doe2 → etc.
```

### Database Trigger Flow

```
1. User signs up
   ↓
2. auth.users row inserted
   ↓
3. Trigger fires: on_auth_user_created
   ↓
4. Function executes: handle_new_user()
   ↓
5. Username extracted from email
   ↓
6. Check for duplicates (add number if needed)
   ↓
7. Insert into public.users table
   ↓
8. Profile created ✅
```

### Fallback Mechanism

If the trigger fails, the client-side code has a fallback:

```typescript
// In login/page.tsx
if (data.user && data.user.id) {
  const profileExists = await checkUserProfileExists(data.user.id);
  if (!profileExists) {
    await createUserProfile(data.user.id, email);
  }
}
```

## 🔐 Security (RLS Policies)

### Read Policy
- **Who**: Everyone (authenticated users)
- **What**: Can view all user profiles
- **Why**: For displaying user info in posts, comments, etc.

### Update Policy
- **Who**: Authenticated users
- **What**: Can only update their own profile
- **Why**: Users should only edit their own data

### Insert Policy
- **Who**: Authenticated users
- **What**: Can only insert their own profile
- **Why**: Prevents creating profiles for other users

## 📁 Files Created

```
assignment/
├── supabase-setup.sql              # Database setup script
├── app/
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts            # Auth callback handler
│   ├── lib/
│   │   └── userProfile.ts          # User profile utilities
│   ├── types/
│   │   └── index.ts                # Updated with UserProfile type
│   └── login/
│       └── page.tsx                # Updated with profile creation
└── USER_PROFILE_SETUP.md           # This file
```

## 🧪 Testing Checklist

- [ ] SQL script runs without errors
- [ ] Users table created with correct schema
- [ ] RLS policies are active
- [ ] Trigger is created and enabled
- [ ] New signup creates auth user
- [ ] Profile automatically created in users table
- [ ] Username extracted correctly from email
- [ ] Duplicate usernames handled (numbered suffix)
- [ ] User can view their profile
- [ ] User can update their own profile
- [ ] User cannot update other profiles

## 🐛 Troubleshooting

### Profile not created after signup

1. Check if trigger exists:
   ```sql
   SELECT * FROM information_schema.triggers 
   WHERE event_object_table = 'users';
   ```

2. Check trigger function:
   ```sql
   SELECT * FROM pg_proc WHERE proname = 'handle_new_user';
   ```

3. Check Supabase logs for errors

### Username conflicts

The system automatically handles duplicates by appending numbers. If issues persist:

```sql
-- Check for duplicate usernames
SELECT username, COUNT(*) 
FROM public.users 
GROUP BY username 
HAVING COUNT(*) > 1;
```

### RLS blocking operations

Temporarily disable RLS for testing (NOT in production):

```sql
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;
```

Re-enable after testing:

```sql
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
```

## 🚀 Next Steps

After setup, you can:

1. **Add profile page** - Display user profile info
2. **Add edit profile** - Let users update their info
3. **Add avatar upload** - Integrate with Supabase Storage
4. **Add user search** - Search users by username
5. **Add follow system** - Let users follow each other

## 📚 API Reference

### `createUserProfile(userId, email)`
Manually create a user profile (fallback).

### `getUserProfile(userId)`
Fetch user profile by ID.

### `updateUserProfile(userId, updates)`
Update user profile fields.

### `checkUserProfileExists(userId)`
Check if profile exists for user.

### `extractUsernameFromEmail(email)`
Extract username from email address.

## 🎉 Success!

If you've completed all steps, your auto profile creation is now working! Users will automatically get a profile when they sign up.
