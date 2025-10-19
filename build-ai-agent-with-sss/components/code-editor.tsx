"use client"

import { Copy, Check } from "lucide-react"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { highlightCode } from "./syntax-highlighter"

interface CodeEditorProps {
  code: string
  language: string
  title?: string
}

export default function CodeEditor({ code, language, title }: CodeEditorProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightedCode = useMemo(() => {
    return highlightCode(code, language)
  }, [code, language])

  return (
    <div className="rounded-lg overflow-hidden border border-border shadow-lg my-6 bg-gradient-to-br from-[#e8e8e8] to-[#f5f5f5] dark:from-[#2d2d2d] dark:to-[#3c3c3c]">
      {/* Header - macOS Style */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#d0d0d0] to-[#e0e0e0] dark:from-[#3c3c3c] dark:to-[#444] border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {title && (
            <span className="text-xs text-muted-foreground ml-3 font-mono">
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground/80 font-mono">{language}</span>
          <button
            onClick={copyToClipboard}
            className={`px-3 py-1 text-xs rounded transition-all text-white border-none cursor-pointer ${
              copied ? 'bg-blue-500' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3" />
                Copied!
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Copy className="w-3 h-3" />
                Copy
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Code with Syntax Highlighting */}
      <pre className="p-4 text-sm leading-relaxed font-mono overflow-x-hidden bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] dark:from-[#1e1e1e] dark:to-[#2d2d2d] m-0"
           style={{
             whiteSpace: 'pre-wrap',
             wordBreak: 'break-word',
             overflowWrap: 'anywhere'
           }}>
        <code 
          className="syntax-highlighted font-mono block text-[#1a1a1a] dark:text-[#d4d4d4]"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  )
}
