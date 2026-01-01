// V1 Navigation Data - Coming Soon
// This file will be populated as v1 documentation is developed

import type { ComponentType } from "react"
import { BookOpen } from "lucide-react"

type NavSubItem = {
  title: string
  url: string
  icon?: ComponentType<{ className?: string }>
}

type NavItem = {
  title: string
  url: string
  icon: ComponentType<{ className?: string }>
  items?: NavSubItem[]
}

export const v1NavigationData: NavItem[] = [
  // Uncomment when v1 cookbooks are ready
  // {
  //   title: "Cookbooks",
  //   url: "/cookbooks/v1",
  //   icon: BookOpen,
  //   items: [],
  // },
]

export const v1CodeDocumentation: NavItem[] = []
