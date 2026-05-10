# 🚀 Quick Start Guide - User Profile Setup

## 5-Minute Setup

### Step 1: Install Dependencies (30 seconds)
```bash
cd assignment
npm install
```

### Step 2: Configure Environment (1 minute)
```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local and add:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Get Supabase credentials:**
1. Go to https://supabase.com
2. Create/open project
3. Go to Settings → API
4. Copy URL and anon key

### Step 3: Setup Database (2 minutes)
1. Open Supabase dashboard
2. Click **SQL Editor** (left sidebar)
3. Click **New Query**
4. Open `supabase-setup.sql` file
5. Copy ALL content
6. Paste in SQL Editor
7. Click **Run** (or press Ctrl+Enter)
8. Wait for "Success" message

### Step 4: Start Development Server (30 seconds)
```bash
npm run dev
```

### Step 5: Test It! (1 minute)
1. Open http://localhost:3000/login
2. Click "Sign Up"
3. Enter email: `test@example.com`
4. Enter password: `password123`
5. Click "Sign Up"
6. Check your email for confirmation link
7. Go to Supabase → Table Editor → users
8. See your profile! ✅

---

## ✅ Verification

### Check Database Setup
```sql
-- Run in Supabase SQL Editor
SELECT * FROM public.users;
```

### Check Trigger
```sql
SELECT trigger_name FROM information_schema.triggers 
WHERE event_object_table = 'users';
```

Should show: `on_auth_user_created`

---

## 🐛 Troubleshooting

### "Table does not exist"
→ Run `supabase-setup.sql` again

### "Profile not created"
→ Check Supabase logs (Dashboard → Logs)

### "Cannot connect to Supabase"
→ Verify `.env.local` has correct credentials

### "Email not confirmed"
→ Check spam folder or disable email confirmation in Supabase settings

---

## 📚 Full Documentation

- **Setup Guide**: `USER_PROFILE_SETUP.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Project Overview**: `README.md`

---

## 🎯 What You Get

After setup, users automatically get:
- ✅ Unique user ID
- ✅ Email stored
- ✅ Username (from email)
- ✅ Profile in database
- ✅ Secure access (RLS)

---

## 💡 Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

---

**Need help?** Check `USER_PROFILE_SETUP.md` for detailed instructions!
