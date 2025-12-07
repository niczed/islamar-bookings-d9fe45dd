#!/usr/bin/env node
// create-admin.mjs
// Usage (PowerShell):
//  $env:SUPABASE_URL="https://xyz.supabase.co"; $env:SUPABASE_SERVICE_ROLE_KEY="<service_role_key>"; node .\scripts\create-admin.mjs

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing environment variables. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const email = 'Hello@islamare.com';
const password = 'islamare1234';

(async () => {
  try {
    console.log(`Creating user ${email}...`);

    // Try to create the user (admin API)
    let userId = null;

    try {
      const res = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: 'Admin' },
      });

      if (res.error) {
        // If user already exists, we'll handle below
        console.warn('Create user returned error:', res.error.message || res.error);
      } else if (res.data && (res.data.user || res.data)) {
        // supabase-js may return { data: { user } } or { data: user }
        const created = res.data.user ?? res.data;
        userId = created.id;
        console.log('User created with id:', userId);
      }
    } catch (err) {
      console.warn('Error creating user (may already exist):', err.message || err);
    }

    if (!userId) {
      // Try to find existing user by email
      console.log('Looking up existing user by email...');
      const { data: users, error: usersErr } = await supabase.rpc('supabase_internal_get_users_by_email', { _email: email }).catch(() => ({ data: null, error: null }));

      // Fallback: try selecting from auth.users directly
      if (!users) {
        const { data: found, error: qErr } = await supabase
          .from('auth.users')
          .select('id, email')
          .eq('email', email)
          .limit(1)
          .maybeSingle();

        if (qErr) {
          // some projects may not allow selecting auth.users via from; try REST admin endpoint not covered here
          console.error('Unable to query existing user id. Please confirm the user exists in Supabase auth. Query error:', qErr.message || qErr);
        } else if (found) {
          userId = found.id;
          console.log('Found existing user id:', userId);
        }
      } else if (users && users.length > 0) {
        userId = users[0].id;
        console.log('Found user via RPC:', userId);
      }
    }

    if (!userId) {
      console.error('Could not determine user id. Please create the user with this email first in the Supabase dashboard or run the script again.');
      process.exit(1);
    }

    // Insert admin role into public.user_roles (ignore if already exists)
    console.log('Assigning admin role to user...');
    const { error: insertErr } = await supabase
      .from('user_roles')
      .upsert({ user_id: userId, role: 'admin' }, { onConflict: ['user_id', 'role'] });

    if (insertErr) {
      console.error('Failed to insert user_roles row:', insertErr.message || insertErr);
      process.exit(1);
    }

    console.log('Admin role assigned to', email);
    console.log('Done. You can now sign in with', email, 'and the provided password.');
  } catch (err) {
    console.error('Unexpected error:', err.message || err);
    process.exit(1);
  }
})();
