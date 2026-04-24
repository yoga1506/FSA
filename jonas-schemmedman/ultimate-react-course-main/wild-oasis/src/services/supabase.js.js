import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ksqpupzmiscbqlesrtfw.supabase.co";
const supabaseKey = "sb_publishable_OaByoKzUNO4Vf8NmqC2DgQ_Q8X1KnKJ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
