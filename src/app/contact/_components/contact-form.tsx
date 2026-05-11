'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  DollarSign,
  Link as LinkIcon,
  Clock,
  Check,
  ChevronsUpDown,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Label } from '@/components/ui/label'

import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { showToast } from '@/lib/utils/toast'
import { cn } from '@/lib/utils'

import { FormSchema, type ContactFormValues } from '../schema'
import { countryCodes, plans, paymentMethods } from '../constants'
import { SuccessDialog } from './success-dialog'
import { SectionTitle } from './section-title'
import { sendContactEmail } from '../actions'

const STORAGE_KEY = 'contact-form-draft'

export function ContactForm({ defaultPlan }: { defaultPlan?: string }) {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [isRestored, setIsRestored] = useState(false)
  const [resetCount, setResetCount] = useState(0)

  const defaultFormValues = useMemo(() => ({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    plan: (defaultPlan as any) || undefined,
    maintenanceType: undefined,
    paymentMethod: undefined,
    paymentSchedule: undefined,
    projectName: '',
    websiteType: '',
    businessCategory: '',
    designSource: undefined,
    googleDriveLink: '',
    notes: '',
    estimatedBudget: '800',
  }), [defaultPlan])

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormValues,
  })

  // Load saved data from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        form.reset(parsedData)
        
        // Explicitly set Select values to ensure Radix UI catches the update
        if (parsedData.websiteType) {
          form.setValue('websiteType', parsedData.websiteType, { shouldValidate: true })
        }
        if (parsedData.businessCategory) {
          form.setValue('businessCategory', parsedData.businessCategory, { shouldValidate: true })
        }
        
        // Force remount of Select components now that they have correct values
        setIsRestored(true)
      } catch (error) {
        console.error('Failed to load saved form data:', error)
      }
    }
  }, [form])

  // Watch form values for persistence
  const formValues = form.watch()

  // Save form data to localStorage on change with debounce
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Don't save if form was successfully submitted
    if (form.formState.isSubmitSuccessful) return

    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues))
      } catch (error) {
        console.error('Failed to save form data to localStorage:', error)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [formValues, form.formState.isSubmitSuccessful])

  const currentPlan = form.watch('plan')
  const maintenanceType = form.watch('maintenanceType')
  const estimatedBudgetVal = form.watch('estimatedBudget')

  const currentPlanObj = plans.find((p) => p.id === currentPlan)
  const baseOriginalPrice = currentPlanObj?.originalPrice || 0
  const basePrice = currentPlanObj?.price || 0
  const budgetNum = parseFloat(estimatedBudgetVal || '0')

  const totalPlanCharge =
    currentPlan === 'high-conversion' && budgetNum > basePrice
      ? budgetNum
      : basePrice
  const planDiscount = baseOriginalPrice - basePrice
  const discountPercent =
    baseOriginalPrice > 0
      ? Math.round((planDiscount / baseOriginalPrice) * 100)
      : 0

  const monthlyMaintenance = totalPlanCharge * 0.1
  const yearlyMaintenance = monthlyMaintenance * 10
  const maintenanceDisplay =
    maintenanceType === 'yearly'
      ? `$${yearlyMaintenance.toFixed(2)} / year`
      : `$${monthlyMaintenance.toFixed(2)} / month`

  const showSummary = !!currentPlan && !!maintenanceType

  const nextYearDate = new Date()
  nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)
  const nextYearFormatted = nextYearDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        // Clear local storage and reset form ONLY on success
        if (typeof window !== 'undefined') {
          localStorage.removeItem(STORAGE_KEY)
        }
        form.reset(defaultFormValues)
        setResetCount(prev => prev + 1)
        setShowSuccessDialog(true)
      } else {
        // On error, show toast but DON'T clear form or local storage
        showToast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      showToast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          key={`contact-form-${resetCount}`}
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-screen-md space-y-6 md:space-y-12"
        >
          {/* Section: Biodata */}
          <BlurFade delay={0.3}>
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
              <SectionTitle
                title="Personal Details"
                desc="Tell us who you are and how we can reach you."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          autoComplete="name"
                          placeholder="John Doe"
                          className={cn(
                            'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                            fieldState.error &&
                              'border-red-500 focus-visible:ring-red-500',
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          autoComplete="email"
                          placeholder="john@example.com"
                          className={cn(
                            'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                            fieldState.error &&
                              'border-red-500 focus-visible:ring-red-500',
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="mt-2 flex flex-row gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field, fieldState }) => (
                        <FormItem className="w-full max-w-[140px] md:w-[180px]">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    'h-12 w-full justify-between rounded-xl border-neutral-200 bg-white font-normal dark:border-neutral-800 dark:bg-neutral-900',
                                    !field.value && 'text-muted-foreground',
                                    fieldState.error && 'border-red-500',
                                  )}
                                >
                                  {field.value
                                    ? (() => {
                                        const selected = countryCodes.find(
                                          (c) => c.code === field.value,
                                        )
                                        return selected ? (
                                          <span className="flex items-center gap-2">
                                            <img
                                              src={`https://flagcdn.com/w40/${selected.iso}.png`}
                                              width="20"
                                              height="15"
                                              alt={selected.country}
                                              className="rounded-sm object-cover"
                                              onError={(e) => {
                                                e.currentTarget.style.display =
                                                  'none'
                                                e.currentTarget.nextElementSibling?.classList.remove(
                                                  'hidden',
                                                )
                                              }}
                                            />
                                            <span className="hidden">
                                              {selected.flag}
                                            </span>
                                            <span>{selected.code}</span>
                                          </span>
                                        ) : (
                                          'Code'
                                        )
                                      })()
                                    : 'Code'}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-[240px] border-neutral-200 bg-white p-0 dark:border-neutral-800 dark:bg-neutral-900"
                              align="start"
                            >
                              <Command className="bg-white dark:bg-neutral-900">
                                <CommandInput
                                  placeholder="Search country..."
                                  className="bg-white dark:bg-neutral-900"
                                />
                                <CommandList>
                                  <CommandEmpty>No country found.</CommandEmpty>
                                  <CommandGroup>
                                    {countryCodes.map((country) => (
                                      <CommandItem
                                        value={
                                          country.country + ' ' + country.code
                                        }
                                        key={country.country}
                                        onSelect={() => {
                                          form.setValue(
                                            'countryCode',
                                            country.code,
                                          )
                                        }}
                                        className="cursor-pointer"
                                      >
                                        {/* <Check
                                          className={cn(
                                            'mr-2 h-4 w-4',
                                            country.code === field.value
                                              ? 'opacity-100'
                                              : 'opacity-0',
                                          )}
                                        /> */}
                                        <div className="mr-2 flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm">
                                          <img
                                            src={`https://flagcdn.com/w40/${country.iso}.png`}
                                            width="20"
                                            height="15"
                                            alt={country.country}
                                            className="object-cover"
                                            onError={(e) => {
                                              e.currentTarget.style.display =
                                                'none'
                                              e.currentTarget.nextElementSibling?.classList.remove(
                                                'hidden',
                                              )
                                            }}
                                          />
                                          <span className="hidden text-xs">
                                            {country.flag}
                                          </span>
                                        </div>
                                        <span className="flex-1 truncate">
                                          {country.country} ({country.code})
                                        </span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field, fieldState }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              id="phone"
                              autoComplete="tel"
                              placeholder="123-456-7890"
                              className={cn(
                                'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                                fieldState.error &&
                                  'border-red-500 focus-visible:ring-red-500',
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Section: Plans */}
          <BlurFade delay={0.4}>
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
              <SectionTitle
                title="Select Your Plan"
                desc="Choose the package that best fits your project scope."
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field, fieldState }) => (
                  <FormItem className="space-y-6">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid gap-4 md:grid-cols-3"
                      >
                        {plans.map((plan) => (
                          <FormItem key={plan.id}>
                            <FormControl>
                              <RadioGroupItem
                                value={plan.id}
                                id={plan.id}
                                className="sr-only"
                              />
                            </FormControl>
                            <FormLabel
                              htmlFor={plan.id}
                              className={cn(
                                'flex h-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 p-6 text-center transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
                                field.value === plan.id
                                  ? 'border-emerald-600 bg-emerald-600/10'
                                  : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                                fieldState.error && 'border-red-500',
                              )}
                            >
                              <div
                                className={cn(
                                  'rounded-xl p-3',
                                  field.value === plan.id
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400',
                                )}
                              >
                                <plan.icon className="h-6 w-6" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <div className="text-lg font-semibold">
                                  {plan.title}
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                  <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                                    ${plan.price.toFixed(2)}
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-neutral-400 line-through dark:text-neutral-500">
                                      ${plan.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                      {Math.round(
                                        ((plan.originalPrice - plan.price) /
                                          plan.originalPrice) *
                                          100,
                                      )}
                                      % OFF
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 md:text-left">
                      Learn more about plans{' '}
                      <Link
                        href="/pricing"
                        className="font-medium text-primary underline"
                      >
                        click here
                      </Link>
                      .
                    </p>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {currentPlan === 'high-conversion' && (
                <div className="mt-8 duration-300 animate-in fade-in slide-in-from-top-4">
                  <FormField
                    control={form.control}
                    name="estimatedBudget"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Estimated Budget (USD)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400" />
                            <Input
                              id="estimatedBudget"
                              type="number"
                              placeholder="0"
                              className={cn(
                                'h-12 rounded-xl border-neutral-200 bg-white pl-10 dark:border-neutral-800 dark:bg-neutral-900',
                                fieldState.error &&
                                  'border-red-500 focus-visible:ring-red-500',
                              )}
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Minimum budget is $799.99. Custom additional pages are
                          +$100/page.
                        </FormDescription>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="mt-8">
                <FormLabel>Maintenance & Hosting Schedule</FormLabel>
                <FormField
                  control={form.control}
                  name="maintenanceType"
                  render={({ field }) => (
                    <FormItem className="mt-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="monthly"
                                id="monthly"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="monthly" className="cursor-pointer font-normal">
                              Monthly
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="yearly"
                                id="yearly"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="yearly" className="cursor-pointer font-normal">
                              Yearly (2 Months Free)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {showSummary && (
                <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6 duration-300 animate-in fade-in slide-in-from-top-4 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <h4 className="mb-4 font-semibold text-neutral-900 dark:text-neutral-100">
                    Project Investment Summary
                  </h4>
                  <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex justify-between">
                      <span>Plan Original Price</span>
                      <span className="text-neutral-400 line-through dark:text-neutral-500">
                        ${baseOriginalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>Plan Discount ({discountPercent}% Off)</span>
                      <span>-${planDiscount.toFixed(2)}</span>
                    </div>
                    {currentPlan === 'high-conversion' &&
                      budgetNum > basePrice && (
                        <div className="flex justify-between">
                          <span>Custom Additional Budget</span>
                          <span className="font-medium">
                            +${(budgetNum - basePrice).toFixed(2)}
                          </span>
                        </div>
                      )}
                    <div className="flex justify-between">
                      <span>Maintenance, Hosting, & Domain (1st Year)</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="my-2 border-t border-neutral-200 dark:border-neutral-800" />
                    <div className="flex justify-between text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <span>Total Upfront Estimate</span>
                      <span>${totalPlanCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
                      <span>
                        {maintenanceType === 'yearly' ? 'Yearly' : 'Monthly'}{' '}
                        Charges (Start {nextYearFormatted})
                      </span>
                      <span>{maintenanceDisplay}</span>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </BlurFade>

          {/* Section: Payment */}
          <BlurFade delay={0.5}>
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
              <SectionTitle
                title="Payment Method"
                desc="How would you prefer to settle the project fees?"
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                      >
                        {paymentMethods.map((method) => (
                          <FormItem key={method.id}>
                            <FormControl>
                              <RadioGroupItem
                                value={method.id}
                                className="sr-only"
                              />
                            </FormControl>
                            <FormLabel
                              className={cn(
                                'flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 py-4 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
                                field.value === method.id
                                  ? 'border-emerald-600 bg-emerald-600/10'
                                  : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                              )}
                            >
                              <img
                                src={method.icon}
                                alt={method.title}
                                className={cn(
                                  'h-6 w-auto',
                                  field.value === method.id
                                    ? ''
                                    : 'opacity-60 grayscale',
                                )}
                              />
                              <span className="text-base font-medium">
                                {method.title}
                              </span>
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="mt-8">
                <FormLabel>Payment Schedule</FormLabel>
                <FormField
                  control={form.control}
                  name="paymentSchedule"
                  render={({ field }) => (
                    <FormItem className="mt-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="50-deposit"
                                id="50-deposit"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="50-deposit" className="cursor-pointer font-normal">
                              50% Deposit
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="full-payment"
                                id="full-payment"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="full-payment" className="cursor-pointer font-normal">
                              Full Payment
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>
          </BlurFade>

          {/* Section: Requirements */}
          <BlurFade delay={0.6}>
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
              <SectionTitle
                title="Project Requirements"
                desc="Deep dive into the specifics of your request."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="projectName"
                  render={({ field, fieldState }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Project / Website Name</FormLabel>
                      <FormControl>
                        <Input
                          id="projectName"
                          placeholder="My Awesome Project"
                          className={cn(
                            'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                            fieldState.error &&
                              'border-red-500 focus-visible:ring-red-500',
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="websiteType"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Website Type</FormLabel>
                        <Select
                          key={`websiteType-${isRestored}`}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="websiteType"
                              className={cn(
                                'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                                fieldState.error && 'border-red-500',
                              )}
                            >
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                            <SelectItem value="personal-landing">
                              Personal / Landing Page
                            </SelectItem>
                            <SelectItem value="company-profile">
                              Company Profile
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessCategory"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>Business Category</FormLabel>
                        <Select
                          key={`businessCategory-${isRestored}`}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              id="businessCategory"
                              className={cn(
                                'h-12 rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
                                fieldState.error && 'border-red-500',
                              )}
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                            <SelectItem value="agencies">Agencies</SelectItem>
                            <SelectItem value="cafe-restaurants">
                              Cafe & Restaurants
                            </SelectItem>
                            <SelectItem value="hotels-travel">
                              Hotels & Travel
                            </SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="lifestyle">
                              Lifestyle Brands
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="designSource"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-col gap-2"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="no-design"
                                id="no-design"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="no-design" className="cursor-pointer font-normal">
                              I don&apos;t have any design
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value="custom-design"
                                id="custom-design"
                                className="border-neutral-300 text-emerald-600 focus-visible:ring-emerald-500 dark:border-neutral-700"
                              />
                            </FormControl>
                            <FormLabel htmlFor="custom-design" className="cursor-pointer font-normal">
                              I got bring my own design (custom)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="googleDriveLink"
                  render={({ field, fieldState }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>
                        Reference Materials (Google Drive Link)
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400" />
                          <Input
                            id="googleDriveLink"
                            autoComplete="url"
                            placeholder="https://drive.google.com/..."
                            className={cn(
                              'h-12 rounded-xl border-neutral-200 bg-white pl-10 dark:border-neutral-800 dark:bg-neutral-900',
                              fieldState.error &&
                                'border-red-500 focus-visible:ring-red-500',
                            )}
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        Link to any assets, inspirations, or project briefs.
                      </FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field, fieldState }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Project Notes & Details</FormLabel>
                      <FormControl>
                        <Textarea
                          id="notes"
                          placeholder="Tell us more about your goals, features, and target audience..."
                          className={cn(
                            'min-h-[160px] resize-none rounded-xl border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900',
                            fieldState.error &&
                              'border-red-500 focus-visible:ring-red-500',
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
            </section>
          </BlurFade>

          <BlurFade delay={0.7}>
            <div className="flex flex-col items-center justify-between gap-6 pt-6 md:flex-row">
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <Clock className="h-4 w-4" />
                <span>Typical response time: ~24 hours</span>
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 w-full rounded-xl border border-neutral-200 bg-white px-12 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 md:w-auto"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? 'Sending Inquiry...'
                  : 'Submit Inquiry'}
              </Button>
            </div>
          </BlurFade>
        </form>
      </Form>

      <SuccessDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      />
    </>
  )
}
