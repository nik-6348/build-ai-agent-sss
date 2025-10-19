"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SearchItem {
  id: string
  title: string
  section: string
  category: string
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSelectItem: (id: string) => void
}

const searchItems: SearchItem[] = [
  // Introduction
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
  {
    id: "rag-architecture",
    title: "RAG Architecture",
    section: "Retrieval-Augmented Generation",
    category: "Techniques",
  },
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
  {
    id: "selection-scenarios",
    title: "Scenario-Based Recommendations",
    section: "Framework Selection",
    category: "Comparison",
  },
  // Future
  { id: "future-evolution", title: "Evolution of Agents", section: "Future Horizons", category: "Advanced" },
  { id: "future-hybrid", title: "Hybrid Systems", section: "Future Horizons", category: "Advanced" },
]

export default function SearchDialog({ open, onOpenChange, onSelectItem }: SearchDialogProps) {
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    if (!query.trim()) return []
    const lowerQuery = query.toLowerCase()
    return searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.section.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery),
    )
  }, [query])

  const handleSelect = (id: string) => {
    onSelectItem(id)
    setQuery("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle className="sr-only">Search Documentation</DialogTitle>
        </DialogHeader>
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 px-0 py-0 h-auto text-base"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery("")}
                className="h-6 w-6 p-0 hover:bg-transparent"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {query.trim() && (
          <ScrollArea className="h-[300px]">
            {filteredItems.length > 0 ? (
              <div className="p-2">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="w-full text-left px-3 py-2.5 rounded-md hover:bg-accent transition-colors mb-1 last:mb-0"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.section}
                          {item.category && ` • ${item.category}`}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center p-4">
                <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
              </div>
            )}
          </ScrollArea>
        )}

        {!query.trim() && (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-muted-foreground">Start typing to search documentation...</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
