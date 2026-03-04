import nodemailer from "nodemailer"

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields missing" })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: "Message sent successfully" })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}