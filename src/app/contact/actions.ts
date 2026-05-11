'use server'

import Mailjet from 'node-mailjet'
import { type ContactFormValues } from './schema'

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC || '',
  apiSecret: process.env.MJ_APIKEY_PRIVATE || '',
})

export async function sendContactEmail(data: ContactFormValues) {
  if (!process.env.MJ_APIKEY_PUBLIC || !process.env.MJ_APIKEY_PRIVATE) {
    console.error('Mailjet API keys are missing')
    return { success: false, error: 'Mailjet API keys are not configured.' }
  }

  const {
    name,
    email,
    countryCode,
    phone,
    plan,
    maintenanceType,
    paymentMethod,
    paymentSchedule,
    projectName,
    websiteType,
    businessCategory,
    designSource,
    googleDriveLink,
    notes,
    estimatedBudget,
  } = data

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
    <hr />
    <h3>Project Details</h3>
    <p><strong>Project Name:</strong> ${projectName}</p>
    <p><strong>Plan:</strong> ${plan}</p>
    <p><strong>Website Type:</strong> ${websiteType}</p>
    <p><strong>Business Category:</strong> ${businessCategory}</p>
    <p><strong>Design Status:</strong> ${designSource === 'no-design' ? "Don't have any design" : 'Bring my own design'}</p>
    <p><strong>Estimated Budget:</strong> ${estimatedBudget || 'N/A'}</p>
    <p><strong>Google Drive Link:</strong> ${googleDriveLink || 'None'}</p>
    <hr />
    <h3>Payment & Maintenance</h3>
    <p><strong>Maintenance Schedule:</strong> ${maintenanceType}</p>
    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
    <p><strong>Payment Schedule:</strong> ${paymentSchedule}</p>
    <hr />
    <h3>Additional Notes</h3>
    <p>${notes || 'No additional notes provided.'}</p>
  `

  try {
    const result = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'muhammadrafishidiq@gmail.com', // Must be a verified sender in Mailjet
            Name: 'Shiro Bit Contact Form',
          },
          To: [
            {
              Email: 'muhammadrafishidiq@gmail.com',
              Name: 'Muhammad Rafi Shidiq',
            },
          ],
          Subject: `New Project Inquiry: ${projectName} from ${name}`,
          TextPart: `New inquiry from ${name} (${email}) for project ${projectName}`,
          HTMLPart: htmlContent,
          ReplyTo: {
            Email: email,
            Name: name,
          },
        },
      ],
    })

    console.log('Mailjet response:', result.body)
    return { success: true }
  } catch (error: any) {
    console.error('Mailjet error:', error)
    return {
      success: false,
      error: error.message || 'Failed to send email. Please try again later.',
    }
  }
}
