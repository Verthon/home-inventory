import * as React from 'react'
import { useForm } from '@mantine/form'

import { Button } from 'src/core/Button/Button'
import { InputField } from 'src/core/InputField/InputField'

import type { LoginFormValues } from './Login.types'

export const LoginContainer = () => {
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = (_values: LoginFormValues) => {};

  const isSubmitDisabled = !form.values.email && !form.values.password;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <p>This app is internal use only for verified users, there is no option to register.</p>
      <InputField label="Email" placeholder="your email" type="email" {...form.getInputProps("email")} />
      <InputField label="Password" placeholder="your password" type="password" {...form.getInputProps("password")} />
      <Button type="submit" disabled={isSubmitDisabled}>
        Login
      </Button>
    </form>
  )
}
