import type { UseMutateFunction } from "react-query"

export type useForgotPasswordFormProps = {
  forgotPasswordAction: UseMutateFunction<Record<string, unknown> | null, unknown, string, unknown>
}