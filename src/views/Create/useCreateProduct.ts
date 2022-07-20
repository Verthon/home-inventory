import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import { showNotification } from '@mantine/notifications';

import { addProduct } from "src/lib/supabase/supabaseClient"
import { routes } from "src/router/Router";

export const useCreateProduct = () => {
  const navigate = useNavigate();
  const redirectToListPage = () => navigate(routes.list)
  const { mutate, status } = useMutation(addProduct, {
    mutationKey: 'addProduct',
    onSuccess() {
      redirectToListPage();
    },
    onError() {
      showNotification({
        id: 'crate-product-error',
        title: 'Something went wrong',
        message: 'Please try to submit again',
        color: 'red',
      })
    }
  })

  return { mutate, status }
}