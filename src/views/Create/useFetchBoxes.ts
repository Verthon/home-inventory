import { useQuery } from "react-query"
import { getBoxes } from "src/lib/supabase/supabaseClient";

export const useFetchBoxes = () => {
  const {data, status} = useQuery('getBoxes', getBoxes);

  const boxesList = Array.isArray(data) ? data.map((box) => {
    return {
      label: box.box_name,
      value: String(box.id)
    }
  }) : []

  return { boxesList, status }
}