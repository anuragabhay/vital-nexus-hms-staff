
import { createClient } from '@supabase/supabase-js';

// These values are automatically injected by the Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure we have values before creating the client
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please ensure you have connected your Supabase project.');
}

export const supabase = createClient(
  supabaseUrl || 'https://example.supabase.co', // Fallback URL to prevent runtime errors
  supabaseAnonKey || 'example-anon-key' // Fallback key to prevent runtime errors
);

