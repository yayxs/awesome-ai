export interface Tool {
  id: number
  name: string
  officialWebsiteLink: string
  company: string
  companyLink?: string
  isDomestic: boolean
  logo?: string
  description: {
    en: string
    zh: string
  }
  companyInfo?: {
    foundedDate: string
    location: {
      en: string
      zh: string
    }
    type: {
      en: string
      zh: string
    }
  }
  releaseDate?: string
}
