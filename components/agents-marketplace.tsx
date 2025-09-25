import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Scale,
  Calculator,
  HeadphonesIcon,
  Search,
  GraduationCap,
  Calendar,
  ArrowRight,
  Sprout,
  Building,
} from "lucide-react"

export function AgentsMarketplace() {
  const agents = [
    {
      icon: ShoppingCart,
      name: "Agente de Ventas",
      description: "Responde dudas, recomienda productos y genera links de pago al instante.",
      category: "Ventas",
      popular: true,
    },
    {
      icon: Scale,
      name: "Asesor Legal",
      description: "Consulta la norma y redacta documentos legales.",
      category: "Legal",
      popular: false,
    },
    {
      icon: Calculator,
      name: "Asesor Financiero",
      description: "Elabora informes financieros y análisis de datos.",
      category: "Finanzas",
      popular: false,
    },
    {
      icon: HeadphonesIcon,
      name: "Agente de Soporte",
      description: "Resuelve preguntas frecuentes 24/7, sin esperas.",
      category: "Soporte",
      popular: true,
    },
    {
      icon: Search,
      name: "Investigador Académico",
      description: "Realiza consultas en internet y elabora informes.",
      category: "Investigación",
      popular: false,
    },
    {
      icon: GraduationCap,
      name: "Profesor Personalizado",
      description: "Conocimientos en áreas específicas: Matemáticas, Física, Inglés, etc.",
      category: "Educación",
      popular: false,
    },
    {
      icon: Calendar,
      name: "Asistente Personal",
      description: "Agenda reuniones automáticamente y envía recordatorios por email.",
      category: "Productividad",
      popular: true,
    },
    {
      icon: Sprout,
      name: "Experto Agrícola",
      description: "Convierte tu WhatsApp en un poderoso doctor de cultivos.",
      category: "Agricultura",
      popular: false,
    },
    {
      icon: Building,
      name: "Asistente Inmobiliario",
      description:
        "Automatizamos la gestión inmobiliaria con AI agents y el recaudo del arriendo y envío de contratos.",
      category: "Inmobiliaria",
      popular: false,
    },
  ]

  return (
    <section id="agentes" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Más que un chatbot, es un <span className="text-primary">empleado integral</span> que escala con tu negocio
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            En Waia te damos acceso a un equipo especializado de IA que se integra con tu WhatsApp para automatizar
            cualquier área de tu trabajo. Elige el asistente que necesites, o combínalos para crear la solución
            perfecta:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
            >
              {agent.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Popular</Badge>
              )}
              <CardHeader className="pb-4">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <agent.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{agent.name}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {agent.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4">{agent.description}</p>
                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                  Seleccionar Agente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl">
            <blockquote className="text-xl font-medium text-foreground mb-6 text-balance">
              "Más que funciones, son resultados. Contratar un agente en Waia es como encontrar al empleado perfecto
              para una tarea específica: ya viene entrenado, listo para trabajar y solo necesita que le digas
              'comienza'."
            </blockquote>
            <Button size="lg" className="text-lg px-8 py-4 animate-pulse-glow">
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
