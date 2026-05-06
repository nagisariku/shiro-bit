interface ProjectType {
  id: string
  title: string
  description: string
  imageSrc: string
  width: number
  height: number
  href?: string
}

interface WebTemplateType {
  id?: string
  thumbnail: string
  title: string
  url?: string
  category:
    | 'Agencies'
    | 'Cafes and Restaurants'
    | 'Hotels and Travel'
    | 'Education'
    | 'Lifestyle Brands'
  price?: string
  // Legacy fields
  Description?: string
  imageUrl?: string[]
  features?: string[]
  // Rich portfolio detail fields
  subtitle?: string
  about?: string
  screenshots?: string[]
  keyFeatures?: { title: string; description: string }[]
  whoItsFor?: string
  pages?: string[]
  chargesInfo?: {
    developmentAndHosting: string
    domain: string
  }
  developmentInfo?: {
    deliveryDay: string
    totalRevision: string
  }
}

export type { ProjectType, WebTemplateType }
