import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

import { isEmptyObject } from 'src/utils/collections'

import type { LoginFormValues, useLoginFormProps } from './Login.types'

export const useLoginForm = ({ login }: useLoginFormProps) => {
  const schema = z.object({
    email: z
      .string()
      .email({ message: 'Please add correct email format (email@test.pl)' }),
    password: z
      .string()
      .min(8, { message: 'Please enter valid password (minimum 8 chars)' }),
  })
  const form = useForm<LoginFormValues>({
    validate: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = (credentials: LoginFormValues) => {
    login(credentials)
  }

  const handleInputValidation = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const inputName = e.target.name
    form.validateField(inputName)
  }

  const isSubmitDisabled =
    !form.values.email || !form.values.password || !isEmptyObject(form.errors)

  return {
    form,
    isSubmitDisabled,
    handleInputValidation,
    handleSubmit
  }
}
