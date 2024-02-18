import { useQuery } from 'react-query'
import { getProducts } from 'src/lib/supabase/supabaseClient'
import { formatEmptyValue } from 'src/utils/filters'

export const useFetchProducts = () => {
  const { data, status, refetch } = useQuery('getProducts', getProducts)

  const productsList = Array.isArray(data)
    ? data.map((product) => {
        return {
          id: product.id,
          //@ts-expect-error merging db doesnt work need to upgrade supabase sdk to v2
          boxName: formatEmptyValue(product.boxes.box_name),
          productName: formatEmptyValue(product.name),
          quantity: formatEmptyValue(product.quantity),
        }
      })
    : []

  return { productsList, status, refetch }
}
