"use client"

export function highlightCode(code: string, language: string): string {
  // First, escape HTML to prevent issues
  let highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Python/JavaScript keywords
  const keywords = [
    'class', 'def', 'import', 'from', 'return', 'if', 'else', 'elif', 'for', 'while',
    'try', 'except', 'finally', 'with', 'as', 'in', 'is', 'not', 'and', 'or',
    'True', 'False', 'None', 'self', 'async', 'await', 'const', 'let', 'var',
    'function', 'new', 'this', 'export', 'default', 'interface', 'type', 'print'
  ]

  // Store strings temporarily to protect them
  const strings: string[] = []
  highlighted = highlighted.replace(
    /(['"`])((?:\\.|(?!\1).)*?)\1/g,
    (match) => {
      const index = strings.length
      strings.push(match)
      return `__STRING_${index}__`
    }
  )

  // Store comments temporarily
  const comments: string[] = []
  highlighted = highlighted.replace(
    /(#.*$)/gm,
    (match) => {
      const index = comments.length
      comments.push(match)
      return `__COMMENT_${index}__`
    }
  )

  // Highlight keywords
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g')
    highlighted = highlighted.replace(
      regex,
      '<span class="code-keyword">$1</span>'
    )
  })

  // Highlight numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="code-number">$1</span>'
  )

  // Highlight function calls
  highlighted = highlighted.replace(
    /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    '<span class="code-function">$1</span>('
  )

  // Highlight decorators
  highlighted = highlighted.replace(
    /@([a-zA-Z_][a-zA-Z0-9_]*)/g,
    '<span class="code-decorator">@$1</span>'
  )

  // Restore comments
  comments.forEach((comment, index) => {
    highlighted = highlighted.replace(
      `__COMMENT_${index}__`,
      `<span class="code-comment">${comment}</span>`
    )
  })

  // Restore strings
  strings.forEach((str, index) => {
    highlighted = highlighted.replace(
      `__STRING_${index}__`,
      `<span class="code-string">${str}</span>`
    )
  })

  return highlighted
}

