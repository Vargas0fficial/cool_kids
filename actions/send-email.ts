"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    // Create email content
    const emailData: EmailData = {
      name,
      email,
      subject,
      message,
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mbvargas19@gmail.com", // Your email
        pass: process.env.EMAIL_PASSWORD, // Use environment variable for security
      },
    })

    // Email to yourself (notification of new contact)
    const mailOptions = {
      from: "mbvargas19@gmail.com",
      to: "mbvargas19@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Optional: Send confirmation email to the user
    const confirmationMailOptions = {
      from: "mbvargas19@gmail.com",
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>Hello ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>Mark Beaver Vargas</p>
      `,
    }

    // Send emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMailOptions)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}

