import { showNotification } from '@mantine/notifications'
import { useMutation } from 'react-query'
import { resetPassword } from 'src/lib/supabase/supabaseClient'

export const useForgotPassword = () => {
  const { data, status, mutate } = useMutation('forgot-password', resetPassword, {
    onError() {
      showNotification({
        id: 'login-failed',
        title: 'Something went wrong',
        message: 'Please try to submit again',
        color: 'red',
      })
    }
  })

  return { data, status, forgotPasswordAction: mutate }
}
