import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL || '', process.env.REACT_APP_SUPABASE_ANON_KEY || '')

export const getProducts = async() => {
  
}

// export const getTestimonials = async () => {
//   const { data, error } = await supabase.from<Testimonial>("testimonials").select("*")

//   if (error) {
//     throw new Error(`${error.message}: ${error.details}`)
//   }

//   return data
// }

// export const getProducts = async () => {
//   const { data, error } = await supabase.from<Product>("products").select("*")

//   if (error) {
//     throw new Error(`${error.message}: ${error.details}`)
//   }

//   return data
// }

// export const addBooking = async (booking: BookingPayload) => {
//   const { data, error } = await supabase.from<Booking>("bookings").insert(booking, { returning: "minimal" })

//   if (error) {
//     throw new Error(`${error.message}: ${error.details}`)
//   }

//   return data
// }