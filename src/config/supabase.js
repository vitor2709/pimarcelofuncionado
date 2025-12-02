import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://igtxexrtsysixclqjbfp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlndHhleHJ0c3lzaXhjbHFqYmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NDczODUsImV4cCI6MjA3ODMyMzM4NX0.dkl98Z1pV55h7ZF4e_acBRJjX2OrS1xRlF-5I_ETDEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
