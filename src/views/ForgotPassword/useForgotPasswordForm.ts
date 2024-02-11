import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'

import { isEmptyObject } from 'src/utils/collections'

import type { useForgotPasswordFormProps } from './ForgotPassword.types'

export const useForgotPasswordForm = ({
  forgotPasswordAction,
}: useForgotPasswordFormProps) => {
  const schema = z.object({
    email: z
      .string()
      .email({ message: 'Please add correct email format (email@test.pl)' }),
  })
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      email: '',
    },
  })

  const handleSubmit = () => {
    form.validateField('email')
    if (isEmptyObject(form.errors) && form.values.email) {
      forgotPasswordAction(form.values.email)
    }
  }

  const handleInputValidation = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const inputName = e.target.name
    form.validateField(inputName)
  }

  const isSubmitDisabled = !form.values.email || !isEmptyObject(form.errors)

  return {
    form,
    isSubmitDisabled,
    handleSubmit,
    handleInputValidation,
  }
}
