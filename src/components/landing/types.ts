export interface ResourceItem {
  title: string
  description: string
  url: string
  tag: string
  tagColor: "brand" | "warning" | "success" | "important"
}

export interface CategoryData {
  id: string
  title: string
  description: string
  items: ResourceItem[]
}

export interface LandingPageProps {
  categories: CategoryData[]
}
