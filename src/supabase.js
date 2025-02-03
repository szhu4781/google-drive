// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eyouhoonazdawfcvrupy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5b3Vob29uYXpkYXdmY3ZydXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NzMzNjQsImV4cCI6MjA1NDA0OTM2NH0.fjua4I8ZiUAPlP6KJ975whNOhJ3xgc0DeroRgZqbJbo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
