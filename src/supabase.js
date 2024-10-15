import { createClient } from "@supabase/supabase-js";

export const supabase = createClient('https://pildhzxxciaiubihlmpb.supabase.co', process.env.REACT_APP_SUPABASE_KEY);