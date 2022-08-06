import type { UseMutateFunction } from "react-query"

export type useForgotPasswordFormProps = {
  forgotPasswordAction: UseMutateFunction<{} | null, unknown, string, unknown>
}