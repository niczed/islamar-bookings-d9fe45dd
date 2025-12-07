-- Assign admin role to Hello@islamare.com
-- This migration assumes the user with email 'Hello@islamare.com' already exists in auth.users
-- If the user doesn't exist yet, create it via the Supabase Dashboard (Auth → Users → Add User)
-- or run the scripts/create-admin.mjs script with your service role key.

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE LOWER(email) = 'hello@islamare.com'
LIMIT 1
ON CONFLICT (user_id, role) DO NOTHING;
