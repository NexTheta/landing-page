-- Theta Sound Waitlist Table
-- Copy and paste this entire script into Supabase SQL Editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at DESC);

-- Row Level Security: visitors may INSERT themselves, nothing else.
-- The anon key ships to every browser, so without RLS anyone could read,
-- edit, or delete every signup. Never disable RLS on this table and never
-- add a SELECT policy for anon. Read signups from the Supabase dashboard.
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;
DROP POLICY IF EXISTS "Anyone can view waitlist" ON waitlist;
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Verify the table was created
SELECT 
  'Waitlist table created successfully!' as message,
  COUNT(*) as total_entries 
FROM waitlist;
