import * as React from 'react'

import { Button } from 'src/core/Button/Button'
import { InputField } from 'src/core/InputField/InputField'

import { useLogin } from './useLogin'
import { useLoginForm } from './useLoginForm'

export const LoginContainer = () => {
  const { loginAction: login, status } = useLogin()
  const { form, isSubmitDisabled, handleInputValidation, handleSubmit } = useLoginForm({ login })

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
      <InputField
        name="password"
        label="Password"
        placeholder="your password"
        type="password"
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
