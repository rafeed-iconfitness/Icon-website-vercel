'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export async function addToWaitlist(prevState: unknown | null, formData: FormData) {
  const email = formData.get('email')

  const result = schema.safeParse({ email })

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    }
  }

  // Simulate delay and DB call
  await new Promise((resolve) => setTimeout(resolve, 1000))



  return {
    success: true,
    message: 'You have been added to the waitlist!',
  }
}
