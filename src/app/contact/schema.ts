import { z } from 'zod'

export const FormSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    countryCode: z.string().min(1, { message: 'Required' }),
    phone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
    plan: z.enum(['starter', 'professional', 'high-conversion'], {
      required_error: 'Please select a plan.',
    }),
    maintenanceType: z.enum(['monthly', 'yearly'], {
      required_error: 'Please select a maintenance schedule.',
    }),
    paymentMethod: z.enum(['paypal', 'wise', 'stripe'], {
      required_error: 'Please select a payment method.',
    }),
    paymentSchedule: z.enum(['50-deposit', 'full-payment'], {
      required_error: 'Please select a payment schedule.',
    }),
    projectName: z.string().min(2, { message: 'Project name is required.' }),
    websiteType: z
      .string()
      .min(1, { message: 'Please select a website type.' }),
    businessCategory: z
      .string()
      .min(1, { message: 'Please select a business category.' }),
    designSource: z.enum(['no-design', 'custom-design'], {
      required_error: 'Please select your design status.',
    }),
    googleDriveLink: z
      .string()
      .url({ message: 'Please enter a valid link.' })
      .or(z.literal('')),
    notes: z.string().optional(),
    estimatedBudget: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.plan === 'high-conversion') {
      if (!data.estimatedBudget || data.estimatedBudget.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Estimated budget is required for High Conversion plan',
          path: ['estimatedBudget'],
        })
      } else {
        const budgetNum = parseFloat(data.estimatedBudget)
        if (isNaN(budgetNum) || budgetNum < 799.99) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Budget must be at least $799.99 for High Conversion plan',
            path: ['estimatedBudget'],
          })
        }
      }
    }
  })

export type ContactFormValues = z.infer<typeof FormSchema>
