'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers"

async function submitToMailerLite(email: string, groupId: string, fields?: Record<string, unknown>) {
  if (!process.env.MAIL_API_KEY) {
    console.error("Missing MAIL_API_KEY")
    return { success: false, message: "Internal server error" }
  }

  try {
    const payload: any = {
      email,
      groups: [groupId],
    }

    if (fields) {
      payload.fields = fields
    }

    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAIL_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle MailerLite specific errors if possible
      const errorMessage = data.message || "Failed to subscribe"
      console.error("MailerLite Error:", data)
      return { success: false, message: errorMessage }
    }

    return { success: true }
  } catch (error) {
    console.error("Submission Error:", error)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function addToWaitlist(prevState: unknown | null, formData: FormData) {
  const email = formData.get('email') as string
  const groupId = process.env.MAIL_USER_GROUP_ID

  const result = schema.safeParse({ email })

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    }
  }

  if (!groupId) {
    console.error("Missing MAIL_USER_GROUP_ID")
    return { success: false, message: "Configuration error" }
  }

  const submission = await submitToMailerLite(email, groupId)

  if (!submission.success) {
    return { success: false, message: submission.message || "Failed to join waitlist" }
  }

  return {
    success: true,
    message: 'You have been added to the waitlist!',
  }
}

const trainerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  socialHandle: z.string().min(1, "Social handle is required"),
  platform: z.string().min(1, "Platform is required"),
})

export async function submitTrainerApplication(prevState: unknown | null, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    socialHandle: formData.get("socialHandle"),
    platform: formData.get("platform"),
  }
  const groupId = process.env.MAIL_TRAINER_GROUP_ID

  const result = trainerSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    }
  }

  if (!groupId) {
    console.error("Missing MAIL_TRAINER_GROUP_ID")
    return { success: false, message: "Configuration error" }
  }

  const fields = {
    name: result.data.name,
    social_media_handle_instagram_tiktok: result.data.socialHandle,
    social_media_type: result.data.platform
  }

  const submission = await submitToMailerLite(result.data.email, groupId, fields)

  if (!submission.success) {
    return { success: false, message: submission.message || "Failed to submit application" }
  }

  return {
    success: true,
    message: "Application submitted successfully!",
  }
}
