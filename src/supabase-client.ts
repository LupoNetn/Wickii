import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('import.meta.env.SUPABASE_WICKII_URL','import.meta.env.SUPABASE_WICKII_API_KEY')