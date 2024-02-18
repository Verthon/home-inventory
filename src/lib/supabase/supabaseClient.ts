import { createClient } from '@supabase/supabase-js'
import { Tables } from 'src/api/api.types'
import { user } from 'src/fixtures/auth/user'

const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL || '',
  process.env.PUBLIC_SUPABASE_ANON_KEY || ''
)

export type AddProductPayload = Omit<
  Tables<'products'>,
  'id' | 'created_at' | 'edited_at' | 'long_description'
>
export type LoginPayload = {
  email: string
  password: string
}

export const supabaseAuth = supabase.auth

export const getProducts = async () => {
  const { data, error } = await supabase.from<Tables<'products'>>('products')
    .select(`
    id,
    expiry_date,
    name,
    short_description,
    long_description,
    quantity,
    boxes (id, box_name),
    categories (id, name)
  `)

  if (error) {
    throw new Error()
  }

  return data
}

export const getProductCategories = async () => {
  const { data, error } = await supabase
    .from<Tables<'categories'>>('categories')
    .select('*')

  if (error) {
    throw new Error()
  }

  return data
}

export const getBoxes = async () => {
  const { data, error } = await supabase
    .from<Tables<'boxes'>>('boxes')
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
  if (process.env.NODE_ENV === 'development') return user
  const currentUser = supabaseAuth.user()

  return currentUser
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
