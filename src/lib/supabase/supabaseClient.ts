import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL || '', process.env.REACT_APP_SUPABASE_ANON_KEY || '')

export const getProducts = async() => {
  const { data, error } = await supabase.from<unknown>("products").select("*")
  
  if (error) {
    throw new Error();
  }

  return data;
}
