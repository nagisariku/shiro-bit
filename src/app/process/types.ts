import React from 'react'

export interface Step {
  id: string
  number: string
  title: string
  description: string
  isHighlighted?: boolean
  content: React.ReactNode
}
