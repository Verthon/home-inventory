import { createClient } from '@supabase/supabase-js'
import { definitions } from 'src/api/api.types'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL || '',
  process.env.REACT_APP_SUPABASE_ANON_KEY || ''
)

export type AddProductPayload = Omit<definitions['products'], 'id'>
export type LoginPayload = {
  email: string
  password: string
}

export const supabaseAuth = supabase.auth

export const getProducts = async () => {
  const { data, error } = await supabase
    .from<definitions['products']>('products')
    .select('*')

  if (error) {
    throw new Error()
  }

  return data
}

export const getProductCategories = async () => {
  const { data, error } = await supabase
    .from<definitions['categories']>('categories')
    .select('*')

  if (error) {
    throw new Error()
  }

  return data
}

export const getBoxes = async () => {
  const { data, error } = await supabase
    .from<definitions['boxes']>('boxes')
    .select('*')

  if (error) {
    throw new Error()
  }

  return data
}

export const addProduct = async (values: AddProductPayload) => {
  const { data, error } = await supabase
    .from<unknown>('products')
    .insert(values)

  if (error) {
    throw new Error()
  }

  return data
}

export const login = async (credentials: LoginPayload) => {
  const { session, error } = await supabaseAuth.signIn({
    email: credentials.email,
    password: credentials.password,
  })

  if (error) {
    throw new Error()
  }

  return session
}

export const getUser = () => {
  const user = supabaseAuth.user()

  return user
}

export const onAuthChange = () => {
  return supabaseAuth.onAuthStateChange
}

export const resetPassword = async (email: string) => {
  const { data, error } = await supabaseAuth.api.resetPasswordForEmail(email)

  if (error) {
    throw new Error()
  }

  return data
}
