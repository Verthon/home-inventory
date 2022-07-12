import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";

import { addProduct } from "src/lib/supabase/supabaseClient"

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const redirectToListPage = () => navigate('/list')
  const { mutate, status } = useMutation(addProduct, {
    mutationKey: 'addProduct',
    onSuccess() {
      redirectToListPage();
    }
  })

  return { mutate, status }
}