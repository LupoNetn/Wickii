import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://zopncibcsvqhpgrgvxcu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvcG5jaWJjc3ZxaHBncmd2eGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTgwNzgsImV4cCI6MjA2MTY3NDA3OH0.ehGonrCj_9edmOMX2xZPeWVIDpPO0q1jXOSMg2_dX-0')