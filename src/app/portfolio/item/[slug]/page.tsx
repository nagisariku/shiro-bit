import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { WebTemplates } from '@/lib/constants/templates'
import { PortfolioItemClient } from './portfolio-item-client'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const webData = WebTemplates.find((t) => t.id === slug)

  if (!webData) {
    return {
      title: 'Template Not Found',
    }
  }

  return {
    title: `${webData.title} - Website Template`,
    description: webData.Description || `Explore the ${webData.title} website template at ShiroBIT.`,
    openGraph: {
      title: `${webData.title} | ShiroBIT`,
      description: webData.Description,
      images: [webData.thumbnail],
    },
  }
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params
  const webData = WebTemplates.find((t) => t.id === slug)

  if (!webData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-xl">Template not found</p>
          <Link
            href="/portfolio"
            className="mt-4 inline-block text-neutral-600 hover:underline dark:text-neutral-400"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return <PortfolioItemClient webData={webData} />
}
