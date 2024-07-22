import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vrygvkmqyyinwyrbsbwd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyeWd2a21xeXlpbnd5cmJzYndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2ODE3NzgsImV4cCI6MjAzNzI1Nzc3OH0.wctPOjIwZ-TCGxXg-knwTncMCYHcCWuy6Y_QuXnSpyQ';

export const supabase = createClient(supabaseUrl, supabaseKey);