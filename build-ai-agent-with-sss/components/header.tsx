"use client"

import { useState, useMemo } from "react"
import { Search, Moon, Sun, X, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  onSearchSelect: (id: string) => void
  onMenuToggle?: () => void
}

interface SearchItem {
  id: string
  title: string
  section: string
  category: string
}

const searchItems: SearchItem[] = [
  // Introduction
  { id: "introduction", title: "Overview & Terminology", section: "Introduction", category: "Getting Started" },
  { id: "intro-agents", title: "What are AI Agents?", section: "Introduction", category: "Fundamentals" },
  { id: "intro-llm", title: "The Role of LLMs", section: "Introduction", category: "Fundamentals" },
  { id: "intro-tools", title: "Tools & Functions", section: "Introduction", category: "Fundamentals" },
  { id: "intro-memory", title: "Agent Memory", section: "Introduction", category: "Fundamentals" },
  { id: "intro-loop", title: "The Agentic Loop", section: "Introduction", category: "Fundamentals" },
  // ReAct Framework
  { id: "react-intro", title: "Introduction to ReAct", section: "ReAct Framework", category: "Frameworks" },
  { id: "react-loop", title: "The ReAct Loop", section: "ReAct Framework", category: "Frameworks" },
  { id: "react-benefits", title: "Benefits of ReAct", section: "ReAct Framework", category: "Frameworks" },
  // RAG
  { id: "rag-what", title: "What is RAG?", section: "Retrieval-Augmented Generation", category: "Techniques" },
  { id: "rag-architecture", title: "RAG Architecture", section: "Retrieval-Augmented Generation", category: "Techniques" },
  { id: "rag-why", title: "Why RAG is Essential", section: "Retrieval-Augmented Generation", category: "Techniques" },
  // LangChain
  { id: "langchain-intro", title: "Introduction", section: "LangChain", category: "Tools" },
  { id: "langchain-lcel", title: "LCEL", section: "LangChain", category: "Tools" },
  { id: "langchain-react-agent", title: "ReAct Agent", section: "LangChain", category: "Tools" },
  { id: "langchain-rag", title: "RAG Pipeline", section: "LangChain", category: "Tools" },
  // LangGraph
  { id: "langgraph-intro", title: "Introduction", section: "LangGraph", category: "Tools" },
  { id: "langgraph-primitives", title: "Core Primitives", section: "LangGraph", category: "Tools" },
  { id: "langgraph-react", title: "Stateful ReAct Agent", section: "LangGraph", category: "Tools" },
  { id: "langgraph-multi", title: "Multi-Agent Systems", section: "LangGraph", category: "Tools" },
  // CrewAI
  { id: "crewai-intro", title: "Introduction", section: "CrewAI", category: "Tools" },
  { id: "crewai-philosophy", title: "Philosophy", section: "CrewAI", category: "Tools" },
  { id: "crewai-example", title: "Research Crew Example", section: "CrewAI", category: "Tools" },
  // AutoGen
  { id: "autogen-intro", title: "Introduction", section: "AutoGen", category: "Tools" },
  { id: "autogen-concepts", title: "Core Concepts", section: "AutoGen", category: "Tools" },
  { id: "autogen-example", title: "Code Generation Example", section: "AutoGen", category: "Tools" },
  // Framework Selection
  { id: "selection-matrix", title: "Decision Matrix", section: "Framework Selection", category: "Comparison" },
  { id: "selection-scenarios", title: "Scenario-Based Recommendations", section: "Framework Selection", category: "Comparison" },
  // Future
  { id: "future-evolution", title: "Evolution of Agents", section: "Future Horizons", category: "Advanced" },
  { id: "future-hybrid", title: "Hybrid Systems", section: "Future Horizons", category: "Advanced" },
  // References
  { id: "references", title: "Documentation & Resources", section: "References", category: "Resources" },
]

export default function Header({ onSearchSelect, onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const { theme, setTheme } = useTheme()

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return []
    const lowerQuery = searchQuery.toLowerCase()
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.section.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery),
    )
  }, [searchQuery])

  const handleSelect = (id: string) => {
    onSearchSelect(id)
    setSearchQuery("")
    setShowResults(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6 max-w-full">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="lg:hidden rounded-lg mr-2 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo and Title */}
        <div className="flex items-center gap-2 min-w-0 flex-1 lg:flex-none">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex-shrink-0">
            <img 
              src="https://singaji.in/assest/SSS-Favicon-Design.png"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg object-cover shadow-lg dark:bg-gray-450"
              alt="SSS" 
            />
          </div>
          <div className="min-w-0 flex-1 lg:flex-none">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis">
              Building AI Agent
            </h1>
            <p className="hidden sm:block text-[10px] md:text-xs text-muted-foreground">
              Complete Framework Guide
            </p>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Search Bar with Inline Results */}
          <div className="relative hidden md:block w-48 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search docs..."
              className="pl-9 pr-8 h-9 bg-muted/50 border-border/50 focus-visible:ring-primary rounded-lg text-sm"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowResults(true)
              }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setShowResults(false)
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
              </button>
            )}

            {/* Inline Search Results */}
            {showResults && searchQuery && (
              <div className="absolute top-full mt-2 w-full max-w-xs lg:max-w-md max-h-96 overflow-y-auto bg-popover border border-border rounded-lg shadow-xl">
                {filteredItems.length > 0 ? (
                  <div className="p-2">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onMouseDown={() => handleSelect(item.id)}
                        className="w-full text-left px-3 py-2.5 rounded-md hover:bg-accent transition-colors mb-1 last:mb-0 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {item.section} • {item.category}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">No results found</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg h-9 w-9"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg h-9 w-9 relative"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}

