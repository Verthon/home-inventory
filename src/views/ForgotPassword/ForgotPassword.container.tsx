import { useForm,  } from '@mantine/form'

import { Button } from "src/core/Button/Button"
import { InputField } from "src/core/InputField/InputField"
import { isEmptyObject } from 'src/utils/collections'

import { useForgotPassword } from './useForgotPassword'

export const ForgotPasswordContainer = () => {
  const { status, forgotPasswordAction } = useForgotPassword()
  const form = useForm({
    initialValues: {
      email: '',
    },
  })

  const handleSubmit = () => {
    forgotPasswordAction(form.values.email);
  }

  const isSubmitDisabled = !form.values.email || !isEmptyObject(form.errors)
  const isLoading = status === 'loading'

  if (status === 'success') {
    return <div>
      <h1>Check your email</h1>
      <p>We have send password recovery instruction to your email</p>
    </div>
  }

  return <div>
    <h1>Forgot password</h1>
    <p>Enter your email account to reset  your password</p>
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <InputField name='email' type='email' disabled={isLoading} {...form.getInputProps('email')} />
      <Button disabled={isSubmitDisabled} loading={isLoading}>Reset Password</Button>
    </form>
  </div>
}