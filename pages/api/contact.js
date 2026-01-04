export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
    // For now, just log the submission
    console.log('Contact form submission:', { name, email, subject, message })

    res.status(200).json({ success: true, message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error processing form:', error)
    res.status(500).json({ error: 'Failed to process form' })
  }
}
