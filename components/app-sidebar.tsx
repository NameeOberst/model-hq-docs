"use client"

import type * as React from "react"
import { usePathname } from "next/navigation"
import {
  Bot,
  Play,
  ChevronRight,
  Settings,
  PanelLeft,
  Cpu,
  Video,
  BookOpen,
  Radio,
  BrainCircuit,
  Library,
  FileSearch,
  Server,
  Camera,
  Stethoscope,
  Info,
  Mail,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { v0NavigationData, v0CodeDocumentation } from "./navigation-data-v0"
import { v1NavigationData, v1CodeDocumentation } from "./navigation-data-v1"

type NavItem = {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  items?: { title: string; url: string }[]
}

const navigationData = {
  startHere: [
    {
      title: "About Model HQ",
      url: "/start-here/about-model-hq",
      icon: Info,
    },
    {
      title: "Getting Started",
      url: "/start-here/getting-started",
      icon: Play,
    },
    {
      title: "System Configuration",
      url: "/start-here/system-configuration",
      icon: Settings,
    },
  ],
  v0: v0NavigationData,
  v1: v1NavigationData as NavItem[],
  codeDocumentation: v0CodeDocumentation,
  v1CodeDocumentation: v1CodeDocumentation,
  supportedModels: [
    {
      title: "Intel Supported Models",
      url: "/supported-models/intel",
      icon: Cpu,
    },
    {
      title: "Qualcomm Supported Models",
      url: "/supported-models/qualcomm",
      icon: Radio,
    },
  ],
  resources: [
    {
      title: "Video Tutorials",
      url: "/resources/video-tutorials",
      icon: Video,
    },
    {
      title: "Blogs and Partner Solutions",
      url: "/resources/blogs-and-partner-solutions",
      icon: BookOpen,
    },
  ],
  cookbooksV0: [
    {
      title: "Personalized Bot",
      url: "/cookbooks/v0/personalized-bot",
      icon: BrainCircuit,
    },
    {
      title: "RAG Bot",
      url: "/cookbooks/v0/rag-bot",
      icon: Library,
    },
    {
      title: "Document Review and Analysis Tool",
      url: "/cookbooks/v0/document-review-and-analysis-tool",
      icon: FileSearch,
    },
    {
      title: "Hybrid Inferencing",
      url: "/cookbooks/v0/hybrid-inferencing",
      icon: Server,
    },
    {
      title: "Photo to Email Automation",
      url: "/cookbooks/v0/photo-to-email-automation",
      icon: Camera,
    },
    {
      title: "Clinical Trial Screening Autmation",
      url: "/cookbooks/v0/clinical-trial-screening-autmation",
      icon: Stethoscope ,
    }
  ],
  cookbooksV1: [] as NavItem[],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" {...props} className="[&_[data-sidebar=content]]:scrollbar-thin [&_[data-sidebar=content]]:scrollbar-thumb-border [&_[data-sidebar=content]]:scrollbar-track-transparent">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className={`h-16 ${isCollapsed ? "px-0 justify-center" : "px-3"}`}>
              <a href="/">
                <div
                  className={`flex aspect-square ${isCollapsed ? "size-10" : "size-12"} items-center justify-center rounded-lg bg-white p-2 shadow-sm mx-auto`}
                >
                  <img src="/images/llmware-logo.png" alt="Model HQ" className="size-full object-contain" />
                </div>
                {!isCollapsed && (
                  <div className="grid flex-1 text-left leading-tight ml-3">
                    <span className="truncate text-lg font-bold">Model HQ</span>
                    <span className="truncate text-sm text-muted-foreground">Documentation</span>
                  </div>
                )}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {state === "collapsed" && (
            <SidebarMenuItem>
              <div title="Expand Sidebar">
                <Button variant="ghost" size="sm" onClick={toggleSidebar} className="h-8 w-8 p-0">
                  <PanelLeft className="h-4 w-4" />
                  <span className="sr-only">Expand Sidebar</span>
                </Button>
              </div>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Start Here - Always visible at top */}
        <SidebarGroup>
          <SidebarGroupLabel>Start Here</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.startHere.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Model HQ v0 Documentation - Collapsible */}
        <Collapsible defaultOpen={pathname.startsWith('/v0') || pathname.startsWith('/getting-started-with-model-hq-sdk') || pathname.startsWith('/hello-world') || pathname.startsWith('/api-reference')} className="group/v0-collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="w-full flex items-center justify-between hover:bg-sidebar-accent/80 rounded-md px-3 py-2 cursor-pointer transition-colors">
                <span className="font-semibold text-sm">Model HQ v0 Docs</span>
                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/v0-collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="relative ml-3 overflow-visible">
                {/* Vertical line for tree structure */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                <SidebarMenu className="space-y-1 overflow-visible">
              {navigationData.v0.map((item) => {
                // If item has sub-items, render as collapsible
                if (item.items) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={pathname.startsWith(item.url)}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem className="relative overflow-visible">
                        {/* Horizontal branch line */}
                        <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                            className="pl-4 overflow-visible"
                          >
                            {item.icon && <item.icon className="size-4 shrink-0" />}
                            <span className="truncate">{item.title}</span>
                            <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-visible">
                          <SidebarMenuSub className="relative ml-3 border-l border-border pl-3 overflow-visible">
                            {item.items.map((subItem, index) => (
                              <SidebarMenuSubItem key={subItem.title} className="relative overflow-visible">
                                {/* Horizontal branch line for sub-items */}
                                <div className="absolute left-0 top-1/2 w-3 h-px bg-border -translate-y-1/2 -ml-3" />
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                  suppressHydrationWarning
                                  className="overflow-visible"
                                >
                                  <a href={subItem.url} className="truncate">
                                    <span className="truncate">{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                }

                // If item has no sub-items, render as simple link
                return (
                  <SidebarMenuItem key={item.title} className="relative overflow-visible">
                    {/* Horizontal branch line */}
                    <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                      className="pl-4 overflow-visible"
                    >
                      <a href={item.url} className="truncate flex items-center gap-2">
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span className="truncate">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          {/* SDK Documentation Subsection within v0 */}
          <SidebarGroup className="relative ml-3 mt-2 overflow-visible">
            {/* Vertical line continuation */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="relative overflow-visible">
              {/* Horizontal branch for SDK section */}
              <div className="absolute left-0 top-4 w-3 h-px bg-border" />
              <SidebarGroupLabel className="pl-4">SDK Documentation</SidebarGroupLabel>
            </div>
            <SidebarGroupContent className="relative ml-3 overflow-visible">
              {/* Vertical line for SDK items */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <SidebarMenu className="space-y-1 overflow-visible">
                {navigationData.codeDocumentation.map((item) => (
                  <SidebarMenuItem key={item.title} className="relative overflow-visible">
                    {/* Horizontal branch line */}
                    <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                      className="pl-4 overflow-visible"
                    >
                      <a href={item.url} className="truncate flex items-center gap-2">
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span className="text-sm truncate">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>

    {/* Model HQ v1 Documentation - Collapsible */}
    <Collapsible defaultOpen={pathname.startsWith('/v1')} className="group/v1-collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="w-full flex items-center justify-between hover:bg-sidebar-accent/80 rounded-md px-3 py-2 cursor-pointer transition-colors">
            <span className="font-semibold text-sm">Model HQ v1 Docs</span>
            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/v1-collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent className="relative ml-3 overflow-visible">
            {/* Vertical line for tree structure */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <SidebarMenu className="space-y-1 overflow-visible">
              {navigationData.v1.length === 0 ? (
                <SidebarMenuItem className="relative overflow-visible">
                  {/* Horizontal branch line */}
                  <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                  <div className="px-6 py-1 text-sm text-muted-foreground italic">
                    Coming soon...
                  </div>
                </SidebarMenuItem>
              ) : (
                navigationData.v1.map((item) => {
                  // Same rendering logic as v0
                  if (item.items) {
                    return (
                      <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={pathname.startsWith(item.url)}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem className="relative overflow-visible">
                          {/* Horizontal branch line */}
                          <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              tooltip={item.title}
                              isActive={pathname === item.url}
                              suppressHydrationWarning
                              className="pl-4 overflow-visible"
                            >
                              {item.icon && <item.icon className="size-4 shrink-0" />}
                              <span className="truncate">{item.title}</span>
                              <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-visible">
                            <SidebarMenuSub className="relative ml-3 border-l border-border pl-3 overflow-visible">
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title} className="relative overflow-visible">
                                  {/* Horizontal branch line for sub-items */}
                                  <div className="absolute left-0 top-1/2 w-3 h-px bg-border -translate-y-1/2 -ml-3" />
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === subItem.url}
                                    suppressHydrationWarning
                                    className="overflow-visible"
                                  >
                                    <a href={subItem.url} className="truncate">
                                      <span className="truncate">{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  }

                  return (
                    <SidebarMenuItem key={item.title} className="relative overflow-visible">
                      {/* Horizontal branch line */}
                      <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={pathname === item.url}
                        suppressHydrationWarning
                        className="pl-4 overflow-visible"
                      >
                        <a href={item.url} className="truncate flex items-center gap-2">
                          {item.icon && <item.icon className="size-4 shrink-0" />}
                          <span className="truncate">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>

    {/* Supported Models Section */}
    <SidebarGroup>
          <SidebarGroupLabel>Supported Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.supportedModels.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Cookbooks Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Cookbooks</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* Cookbooks v0 - Collapsible */}
            <Collapsible defaultOpen={pathname.startsWith('/cookbooks')} className="group/cookbooks-v0">
              <SidebarMenu>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Cookbooks v0"
                      suppressHydrationWarning
                      className="font-medium"
                    >
                      <span className="text-sm">Cookbooks v0</span>
                      <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/cookbooks-v0:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navigationData.cookbooksV0.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                          >
                            <a href={item.url}>
                              {item.icon && <item.icon className="size-4 mr-2" />}
                              <span className="text-sm">{item.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>

            {/* Cookbooks v1 - Collapsible */}
            <Collapsible defaultOpen={false} className="group/cookbooks-v1">
              <SidebarMenu>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Cookbooks v1"
                      suppressHydrationWarning
                      className="font-medium"
                    >
                      <span className="text-sm">Cookbooks v1</span>
                      <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/cookbooks-v1:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navigationData.cookbooksV1.length === 0 ? (
                        <SidebarMenuSubItem>
                          <div className="px-2 py-1 text-xs text-muted-foreground italic">
                            Coming soon...
                          </div>
                        </SidebarMenuSubItem>
                      ) : (
                        navigationData.cookbooksV1.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                              suppressHydrationWarning
                            >
                              <a href={item.url}>
                                {item.icon && <item.icon className="size-4 mr-2" />}
                                <span className="text-sm">{item.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))
                      )}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Contact Support" suppressHydrationWarning>
              <a
                href="/support"
                className="w-full flex gap-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md py-6 transition-colors"
              >
                <Mail className="size-6" />
                <span>Contact Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
