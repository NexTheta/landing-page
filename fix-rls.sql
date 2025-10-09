-- QUICK FIX: Disable RLS to allow public signups
-- Run this in Supabase SQL Editor RIGHT NOW

-- Disable Row Level Security
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;

-- Verify it worked
SELECT 
  schemaname,
  tablename,
  rowsecurity as "RLS Enabled"
FROM pg_tables 
WHERE tablename = 'waitlist';

-- You should see: RLS Enabled = false
-- Now try your waitlist form again!
