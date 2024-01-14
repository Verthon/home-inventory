import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'src/auth/AuthProvider'
import { Button } from 'src/core/Button/Button'
import { InputField } from 'src/core/InputField/InputField'
import { PasswordInputField } from 'src/core/PasswordInputField/PasswordInputField'
import { routes } from 'src/router/Router'

import { useLogin } from './useLogin'
import { useLoginForm } from './useLoginForm'

export const LoginContainer = () => {
  const navigate = useNavigate()
  const { loginAction: login, status } = useLogin()
  const { user } = useAuth();
  const { form, isSubmitDisabled, handleInputValidation, handleSubmit } = useLoginForm({ login })

  React.useEffect(() => {
    if(user) {
      navigate(routes.home)
    }
  }, [navigate, user])

  


  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <p>
        This app is internal use only for verified users, there is no option to
        register.
      </p>
      <InputField
        name="email"
        label="Email"
        placeholder="your email"
        type="email"
        disabled={status === 'loading'}
        required
        {...form.getInputProps('email')}
        onBlur={handleInputValidation}
      />
      <PasswordInputField
        name="password"
        label="Password"
        placeholder="your password"
        required
        disabled={status === 'loading'}
        {...form.getInputProps('password')}
        onBlur={handleInputValidation}
      />
      <Button
        type="submit"
        disabled={isSubmitDisabled}
        loading={status === 'loading'}
      >
        Login
      </Button>
    </form>
  )
}
