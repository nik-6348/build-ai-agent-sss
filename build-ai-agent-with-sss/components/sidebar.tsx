"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onToggle: () => void
}

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    subsections: [
      { id: "introduction", title: "Overview & Terminology" },
      { id: "intro-agents", title: "What are AI Agents?" },
      { id: "intro-llm", title: "The Role of LLMs" },
      { id: "intro-tools", title: "Tools & Functions" },
      { id: "intro-memory", title: "Agent Memory" },
      { id: "intro-loop", title: "The Agentic Loop" },
    ],
  },
  {
    id: "react-framework",
    title: "ReAct Framework",
    subsections: [
      { id: "react-intro", title: "Introduction to ReAct" },
      { id: "react-loop", title: "The ReAct Loop" },
      { id: "react-benefits", title: "Benefits of ReAct" },
    ],
  },
  {
    id: "rag",
    title: "RAG-Introduction",
    subsections: [
      { id: "rag-what", title: "What is RAG?" },
      { id: "rag-architecture", title: "RAG Architecture" },
      { id: "rag-why", title: "Why RAG is Essential" },
    ],
  },
  {
    id: "langchain",
    title: "LangChain",
    subsections: [
      { id: "langchain-intro", title: "Introduction" },
      { id: "langchain-lcel", title: "LCEL" },
      { id: "langchain-react-agent", title: "ReAct Agent" },
      { id: "langchain-rag", title: "RAG Pipeline" },
    ],
  },
  {
    id: "langgraph",
    title: "LangGraph",
    subsections: [
      { id: "langgraph-intro", title: "Introduction" },
      { id: "langgraph-primitives", title: "Core Primitives" },
      { id: "langgraph-react", title: "Stateful ReAct Agent" },
      { id: "langgraph-multi", title: "Multi-Agent Systems" },
    ],
  },
  {
    id: "crewai",
    title: "CrewAI",
    subsections: [
      { id: "crewai-intro", title: "Introduction" },
      { id: "crewai-philosophy", title: "Philosophy" },
      { id: "crewai-example", title: "Research Crew Example" },
    ],
  },
  {
    id: "autogen",
    title: "AutoGen",
    subsections: [
      { id: "autogen-intro", title: "Introduction" },
      { id: "autogen-concepts", title: "Core Concepts" },
      { id: "autogen-example", title: "Code Generation Example" },
    ],
  },
  {
    id: "framework-selection",
    title: "Framework Selection",
    subsections: [
      { id: "selection-matrix", title: "Decision Matrix" },
      { id: "selection-scenarios", title: "Scenario-Based Recommendations" },
    ],
  },
  {
    id: "future",
    title: "Future Horizons",
    subsections: [
      { id: "future-evolution", title: "Evolution of Agents" },
      { id: "future-hybrid", title: "Hybrid Systems" },
    ],
  },
  {
    id: "references",
    title: "References",
    subsections: [
      { id: "references", title: "Documentation & Resources" },
    ],
  },
]

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  // Auto-expand section containing active subsection
  React.useEffect(() => {
    const activeMainSection = sections.find(section => 
      section.subsections.some(sub => sub.id === activeSection)
    )
    if (activeMainSection && !expandedSections.includes(activeMainSection.id)) {
      setExpandedSections(prev => [...prev, activeMainSection.id])
    }
  }, [activeSection, expandedSections])

  const toggleSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    if (section) {
      // If section is not expanded, expand it and open first subsection
      if (!expandedSections.includes(sectionId)) {
        setExpandedSections((prev) => [...prev, sectionId])
        onSectionChange(section.subsections[0].id)
      } else {
        // If already expanded, collapse it
        setExpandedSections((prev) => prev.filter((id) => id !== sectionId))
      }
    }
  }

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300" 
          onClick={onToggle}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-72 sm:w-80 h-full bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border/50 overflow-y-auto flex flex-col shadow-2xl`}
      >

        {/* Navigation */}
        <nav className="flex-1 p-4 pt-6 space-y-2">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${activeSection.startsWith(section.id)
                    ? "text-primary font-bold"
                    : "text-sidebar-foreground hover:text-primary/70"
                  }`}
              >
                <span className="text-sm font-semibold">{section.title}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${expandedSections.includes(section.id) ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Subsections */}
              {expandedSections.includes(section.id) && (
                <div className="ml-2 mt-1 space-y-1 border-l-2 border-primary/30 pl-3">
                  {section.subsections.map((subsection) => (
                    <button
                      key={subsection.id}
                      onClick={() => {
                        onSectionChange(subsection.id)
                        // Close sidebar on mobile after selection
                        if (window.innerWidth < 1024) {
                          setTimeout(() => onToggle(), 150)
                        }
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === subsection.id
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-sidebar-foreground/70 hover:text-primary/70 hover:bg-primary/5"
                      }`}
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 mt-auto border-t border-sidebar-border/50 text-xs text-sidebar-foreground/60">
          <p className="text-sm text-sidebar-foreground flex items-center gap-2">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by Nik6348
          </p>
        </div>
      </aside>
    </>
  )
}
