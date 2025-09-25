"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Agent } from "@/lib/agents-data"

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const handleUseInWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa usar el agente ${agent.name}`)
    const whatsappUrl = `https://wa.me/573012345678?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: agent.color }}
          >
            {agent.icon}
          </div>
          <div>
            <CardTitle className="text-lg">{agent.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{agent.category}</p>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{agent.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={handleUseInWhatsApp} className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
          Usar en WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
