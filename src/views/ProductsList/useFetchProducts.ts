import { useQuery } from "react-query"
import { getProducts } from "src/lib/supabase/supabaseClient";

export const useFetchProducts = () => {
  const {data, status} = useQuery('getProducts', getProducts);

  return { data, status }
}