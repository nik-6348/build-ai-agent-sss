"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by{" "}
          <span className="font-semibold text-foreground">nik6348</span>
        </p>
      </div>
    </footer>
  )
}

