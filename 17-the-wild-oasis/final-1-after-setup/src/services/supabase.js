import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mtwrmcrlfaadzahjbfpm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10d3JtY3JsZmFhZHphaGpiZnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NzEwNDIsImV4cCI6MjA3MDA0NzA0Mn0.D7O_-8XDr4G8s3rQ-X2MjGCjROyvXwj7v7d6EhCk41s'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase