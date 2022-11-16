import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ergxssgandfohxtpybri.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyZ3hzc2dhbmRmb2h4dHB5YnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1NDUwNjIsImV4cCI6MTk4NDEyMTA2Mn0.60YGkWY1uUX1lQrMMjMDE_j2gp5bCFcVh42anB0epHA"

// Better put your these secret keys in .env file
export const supabase = createClient(supabaseUrl, supabaseKey, {
    localStorage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
});
