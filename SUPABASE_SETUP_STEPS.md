# 🚀 Supabase Setup - Step by Step

## Step 1: Create Profile for Your Existing User (2 minutes)

1. **Open Supabase Dashboard**
   - Go to https://supabase.com
   - Open your project

2. **Open SQL Editor**
   - Click **SQL Editor** in left sidebar
   - Click **New Query**

3. **Run This Query**
   - Open file: `create-existing-user-profile.sql`
   - Copy ALL content
   - Paste in SQL Editor
   - Click **Run** (or press Ctrl+Enter)

4. **Verify Success**
   - You should see your profile data in the results
   - Email: `sufyanalijut2@gmail.com`
   - Username: `sufyanalijut2`

✅ **Your profile is now created!**

---

## Step 2: Setup Auto Profile Creation for Future Users (3 minutes)

1. **Open SQL Editor Again**
   - Click **New Query** (or use same tab)

2. **Run Trigger Setup**
   - Open file: `auto-profile-trigger.sql`
   - Copy ALL content (entire file)
   - Paste in SQL Editor
   - Click **Run**

3. **Check Verification Results**
   - Scroll down in results
   - You should see:
     - ✅ Trigger: `on_auth_user_created`
     - ✅ Functions: `handle_new_user`, `extract_username_from_email`
     - ✅ Policies: 3 RLS policies

✅ **Auto profile creation is now active!**

---

## Step 3: Test It! (2 minutes)

### Option A: Test with Profile Page

```bash
npm run dev
```

Visit: http://localhost:3000/profile

You should see:
- ✅ Your auth user info
- ✅ Your profile with username `sufyanalijut2`

### Option B: Test with New Signup

1. Go to http://localhost:3000/login
2. Click "Sign Up"
3. Use a different email (e.g., `test@example.com`)
4. Create account
5. Check Supabase → Table Editor → users
6. New profile should be there automatically! ✅

---

## Quick Reference

### Files to Run in Supabase:

1. **`create-existing-user-profile.sql`** ← Run this FIRST
   - Creates profile for your current user
   - One-time setup

2. **`auto-profile-trigger.sql`** ← Run this SECOND
   - Sets up automatic profile creation
   - Works for all future signups

---

## What Each Query Does

### Query 1: Create Your Profile
```sql
INSERT INTO public.users (id, email, username, full_name)
VALUES (
  '78213ec8-6b45-4f98-af37-82b8d50a23d0',
  'sufyanalijut2@gmail.com',
  'sufyanalijut2',
  'Sufyan Ali'
);
```

### Query 2: Setup Trigger
```sql
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

---

## Verification Commands

### Check if your profile exists:
```sql
SELECT * FROM public.users 
WHERE email = 'sufyanalijut2@gmail.com';
```

### Check if trigger is active:
```sql
SELECT trigger_name FROM information_schema.triggers 
WHERE trigger_name = 'on_auth_user_created';
```

### Check all users:
```sql
SELECT id, email, username, created_at 
FROM public.users 
ORDER BY created_at DESC;
```

---

## Expected Results

### After Step 1:
```
id: 78213ec8-6b45-4f98-af37-82b8d50a23d0
email: sufyanalijut2@gmail.com
username: sufyanalijut2
full_name: Sufyan Ali
created_at: 2026-05-10 ...
```

### After Step 2:
```
Trigger: on_auth_user_created ✅
Functions: handle_new_user, extract_username_from_email ✅
Policies: 3 policies ✅
```

---

## Troubleshooting

### Error: "duplicate key value violates unique constraint"
→ Profile already exists! Skip to Step 2

### Error: "permission denied for table users"
→ Check if you're logged in to Supabase dashboard

### Error: "relation public.users does not exist"
→ Table not created. Run your original CREATE TABLE query first

### Trigger not firing
→ Re-run `auto-profile-trigger.sql`

---

## Summary

✅ **Step 1**: Create your profile (run `create-existing-user-profile.sql`)  
✅ **Step 2**: Setup auto creation (run `auto-profile-trigger.sql`)  
✅ **Step 3**: Test it (visit `/profile` page)

**Total Time**: ~5 minutes

---

## Next Steps After Setup

1. ✅ Visit `/profile` to see your profile
2. ✅ Test signup with new email
3. ✅ Verify new profiles are auto-created
4. 🎉 Start building features!

---

**Need Help?**
- Check `USER_PROFILE_SETUP.md` for detailed guide
- Check `CHECK_PROFILE.md` for verification steps
