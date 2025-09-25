"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Waia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#agentes"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Agentes
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button size="sm" className="animate-pulse-glow">
              Acceder al Marketplace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#beneficios"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#agentes"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Agentes
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Cómo Funciona
              </a>
              <Button size="sm" className="w-full">
                Acceder al Marketplace
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
