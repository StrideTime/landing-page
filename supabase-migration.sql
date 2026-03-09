-- Landing page tables migration
-- Run this in your Supabase SQL Editor

-- Email signups / waitlist
CREATE TABLE landing_waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  tier text,
  created_at timestamptz DEFAULT now()
);

-- Feature & integration requests
CREATE TABLE feature_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text,
  title text NOT NULL,
  description text,
  source text NOT NULL DEFAULT 'landing',
  type text NOT NULL DEFAULT 'feature',
  created_at timestamptz DEFAULT now()
);

-- Bug reports
CREATE TABLE bug_reports (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text,
  title text NOT NULL,
  description text,
  device_info jsonb,
  source text NOT NULL DEFAULT 'landing',
  created_at timestamptz DEFAULT now()
);

-- Permissions: anon can insert only (no select/update/delete)
GRANT INSERT ON landing_waitlist TO anon;
GRANT INSERT ON feature_requests TO anon;
GRANT INSERT ON bug_reports TO anon;

REVOKE SELECT, UPDATE, DELETE ON landing_waitlist FROM anon;
REVOKE SELECT, UPDATE, DELETE ON feature_requests FROM anon;
REVOKE SELECT, UPDATE, DELETE ON bug_reports FROM anon;
