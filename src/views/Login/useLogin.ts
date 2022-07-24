import { showNotification } from '@mantine/notifications'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { login } from 'src/lib/supabase/supabaseClient'
import { routes } from 'src/router/Router'

export const useLogin = () => {
  const navigate = useNavigate()
  const { data, status, mutate } = useMutation('login', login, {
    onSuccess: () => {
      navigate(routes.home)
    },
    onError() {
      showNotification({
        id: 'login-failed',
        title: 'Something went wrong',
        message: 'Please try to submit again',
        color: 'red',
      })
    }
  })

  return { session: data, status, loginAction: mutate }
}
