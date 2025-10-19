"use client"

import { useEffect, useRef } from "react"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false) // Start closed on mobile
  const isNavigatingRef = useRef(false)

  // Open sidebar by default on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true)
      }
    }
    handleResize() // Check on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId)
    isNavigatingRef.current = true
    
    // Immediate scroll without smooth behavior for better performance
    requestAnimationFrame(() => {
      const element = document.getElementById(`section-${sectionId}`)
      const mainElement = document.querySelector('main')
      if (element && mainElement) {
        // Scroll with proper offset for header (64px header height + 20px padding)
        mainElement.scrollTop = element.offsetTop - 84
      }
      
      // Reset navigation flag after a short delay
      setTimeout(() => {
        isNavigatingRef.current = false
      }, 500)
    })
  }

  // Scroll Spy using Intersection Observer
  useEffect(() => {
    // Small delay to ensure DOM is ready after section change
    const timer = setTimeout(() => {
      const mainElement = document.querySelector('main')
      if (!mainElement) return

      const sections = mainElement.querySelectorAll('[id^="section-"]')
      if (sections.length === 0) return

      const observerOptions = {
        root: mainElement,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
        threshold: 0
      }

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Don't update during manual navigation
        if (isNavigatingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace('section-', '')
            setActiveSection(sectionId)
          }
        })
      }

      const observer = new IntersectionObserver(observerCallback, observerOptions)

      sections.forEach((section) => {
        observer.observe(section)
      })

      return () => {
        observer.disconnect()
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [activeSection]) // Re-run when activeSection changes

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        // Search dialog will be triggered via state in sidebar
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex flex-col h-screen bg-background text-foreground">
        <Header 
          onSearchSelect={handleNavigate} 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
        />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            activeSection={activeSection}
            onSectionChange={handleNavigate}
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
          />
          <MainContent activeSection={activeSection} onNavigate={handleNavigate} />
        </div>
      </div>
    </ThemeProvider>
  )
}
