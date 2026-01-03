// V1 Navigation Data

import type { ComponentType } from "react"
import {
  MessageSquare,
  Database,
  BookOpen,
} from "lucide-react"

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
  {
    title: "Chat",
    url: "/v1/chat",
    icon: MessageSquare,
    items: [
      { title: "Chat Overview", url: "/v1/chat" },
      { title: "Chat Configuration", url: "/v1/chat/chat-configuration" },
      { title: "Document Parsing Issues", url: "/v1/chat/document-parsing-issues" },
      { title: "Error Handling", url: "/v1/chat/error-handling" },
    ],
  },
  {
    title: "Models",
    url: "/v1/models",
    icon: Database,
    items: [
      { title: "Models Overview", url: "/v1/models" },
      { title: "Model Configuration", url: "/v1/models/model-configuration" },
    ],
  },
]

export const v1CodeDocumentation: NavItem[] = []
