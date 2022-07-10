import { createClient } from "@supabase/supabase-js"
import { definitions } from "src/api/api.types";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL || '', process.env.REACT_APP_SUPABASE_ANON_KEY || '')

export const getProducts = async() => {
  const { data, error } = await supabase.from<definitions['products']>("products").select("*")
  
  if (error) {
    throw new Error();
  }

  return data;
}

export const getProductCategories = async() => {
  const { data, error } = await supabase.from<definitions['categories']>("categories").select("*")

  if (error) {
    throw new Error();
  }

  return data;
}

export const getBoxes = async() => {
  const { data, error } = await supabase.from<definitions['boxes']>("boxes").select("*")

  if (error) {
    throw new Error();
  }

  return data;
}
