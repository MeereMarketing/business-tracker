import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://akmasoidqlnlpyhoquuo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbWFzb2lkcWxubHB5aG9xdXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTcwNDEsImV4cCI6MjA2MTkzMzA0MX0.wOSG1LdtMKiO3qTq6X48ESzq5246AjDVUWrMfeaftso';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);