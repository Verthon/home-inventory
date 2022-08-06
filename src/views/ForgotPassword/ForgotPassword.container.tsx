import { Button } from "src/core/Button/Button"
import { InputField } from "src/core/InputField/InputField"

import { useForgotPassword } from './useForgotPassword'
import { useForgotPasswordForm } from './useForgotPasswordForm'

export const ForgotPasswordContainer = () => {
  const { status, forgotPasswordAction } = useForgotPassword()
  const { form, isSubmitDisabled, handleSubmit, handleInputValidation } = useForgotPasswordForm({ forgotPasswordAction })

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
      <InputField name='email' type='email' placeholder='Type your email' disabled={isLoading} {...form.getInputProps('email')} onBlur={handleInputValidation} />
      <Button type="submit" disabled={isSubmitDisabled} loading={isLoading}>Reset Password</Button>
    </form>
  </div>
}