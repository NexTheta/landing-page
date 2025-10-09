# Supabase Waitlist Setup Guide

## 🚀 Quick Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose your organization and region
5. Set a database password (save it securely!)
6. Wait for your project to be created (~2 minutes)

### 2. Create the Waitlist Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on email for faster lookups
CREATE INDEX waitlist_email_idx ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (for public signup)
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only allow authenticated users to view waitlist entries
CREATE POLICY "Only authenticated users can view waitlist" ON waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

4. Click "Run" to execute the query
5. Go to **Table Editor** to verify the `waitlist` table was created

### 3. Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings > API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

### 4. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. Restart your development server:
   ```bash
   pnpm dev
   ```

### 5. Test the Waitlist

1. Open your app at `http://localhost:3000`
2. Click "Join Waitlist"
3. Fill in name and email
4. Click "Join Waitlist"
5. Check your Supabase dashboard → Table Editor → `waitlist` to see the entry!

## 📊 View Waitlist Entries

### Using Supabase Dashboard

1. Go to **Table Editor**
2. Select the `waitlist` table
3. View all entries with timestamps

### Export to CSV

1. Go to **Table Editor** → `waitlist`
2. Click the three dots menu (⋮)
3. Select "Download as CSV"

### Using SQL

```sql
-- View all waitlist entries
SELECT * FROM waitlist ORDER BY created_at DESC;

-- Count total entries
SELECT COUNT(*) FROM waitlist;

-- Recent signups (last 7 days)
SELECT * FROM waitlist 
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

## 🔐 Security Features

✅ **Row Level Security (RLS)** - Enabled to protect data
✅ **Unique Email Constraint** - Prevents duplicate signups
✅ **Email Validation** - Client-side validation before submission
✅ **Rate Limiting** - Built-in Supabase protection
✅ **Public Insert Only** - Users can only add their own data

## 📧 Email Notifications (Optional)

### Setup Email Alerts for New Signups

1. Go to **Database > Functions**
2. Create a new function to trigger on insert
3. Use Supabase Edge Functions or webhooks to send notifications

Example Edge Function:
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { record } = await req.json()
  
  // Send email notification
  // Use SendGrid, Resend, or your email service
  
  return new Response('OK', { status: 200 })
})
```

## 🎯 Features Implemented

### Waitlist Dialog Component
- ✅ Name and email fields
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success notifications
- ✅ Duplicate email detection
- ✅ Responsive design

### Database
- ✅ UUID primary keys
- ✅ Unique email constraint
- ✅ Timestamps (created_at, updated_at)
- ✅ Indexed email field for performance
- ✅ Row-level security

### User Experience
- ✅ Real-time feedback
- ✅ Toast notifications
- ✅ Disabled state during submission
- ✅ Auto-close on success
- ✅ Clear error messages

## 🐛 Troubleshooting

### "Cannot find module '@supabase/supabase-js'"
```bash
pnpm install @supabase/supabase-js
```

### "Network Error" when submitting
- Check that your `.env.local` file exists and has correct values
- Verify your Supabase project is active (not paused)
- Check browser console for detailed error messages

### "23505: duplicate key value violates unique constraint"
- This means the email is already in the waitlist
- The app handles this gracefully with a friendly message

### Environment Variables Not Working
- Make sure your `.env.local` file is in the project root
- Restart the development server after creating/editing `.env.local`
- Use `NEXT_PUBLIC_` prefix for client-side variables

## 📈 Next Steps

### Analytics Integration
- Track signup conversion rates
- Monitor popular signup times
- A/B test different CTAs

### Email Campaigns
- Export waitlist to your email service
- Send updates and launch announcements
- Segment users by signup date

### Admin Dashboard
- Build a protected admin page
- View/export waitlist entries
- Send manual invitations

## 🔗 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 📝 Database Schema

```sql
Table: waitlist
+------------+-------------------------+
| Column     | Type                    |
+------------+-------------------------+
| id         | UUID (PRIMARY KEY)      |
| email      | VARCHAR(255) (UNIQUE)   |
| name       | VARCHAR(255)            |
| created_at | TIMESTAMP WITH TIMEZONE |
| updated_at | TIMESTAMP WITH TIMEZONE |
+------------+-------------------------+
```

## ✅ Checklist

- [ ] Created Supabase project
- [ ] Created `waitlist` table with SQL
- [ ] Copied credentials to `.env.local`
- [ ] Tested signup form
- [ ] Verified entry in Supabase dashboard
- [ ] Set up email notifications (optional)
- [ ] Added `.env.local` to `.gitignore`

---

**Need Help?** Check the [Supabase Discord](https://discord.supabase.com) or [GitHub Issues](https://github.com/supabase/supabase/issues)
