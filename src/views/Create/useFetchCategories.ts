import { useQuery } from 'react-query'
import { getProductCategories } from 'src/lib/supabase/supabaseClient'

export const useFetchCategories = () => {
  const { data, status } = useQuery(
    'getProductCategories',
    getProductCategories,
    { refetchOnWindowFocus: false }
  )

  const categoriesList = Array.isArray(data)
    ? data.map((category) => {
        return {
          label: category.name,
          value: String(category.id),
        }
      })
    : []

  return { categoriesList, status }
}
