import { useQuery } from "react-query"
import { getProducts } from "src/lib/supabase/supabaseClient";
import { formatEmptyValue } from "src/utils/filters";

export const useFetchProducts = () => {
  const {data, status} = useQuery('getProducts', getProducts);

  const productsList = Array.isArray(data) ? data.map((product) => {
    return {
      boxId: formatEmptyValue(product.box_id),
      productName: formatEmptyValue(product.name),
      quantity: formatEmptyValue(product.quantity),
    }
  }) : []

  return { productsList, status }
}

// boxId: data.
//   productName: string
//   quantity: number
//   quantityStatus?: string