import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Cierra ventas 24/7",
      description:
        "Tu agente responde consultas, recomienda productos y genera enlaces de pago de forma instantánea, sin importar la hora.",
    },
    {
      icon: DollarSign,
      title: "Recibe pagos en segundos",
      description:
        "Integrado con todo el sistema bancario, el proceso de compra se completa dentro de la misma conversación.",
    },
    {
      icon: TrendingUp,
      title: "Libera tu tiempo para lo importante",
      description:
        "Automatiza hasta el 80% de las interacciones comunes y enfócate en estrategias de crecimiento o en atender casos complejos.",
    },
  ]

  return (
    <section id="beneficios" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Deja de hacer tu trabajo Manualmente. <span className="text-primary">Tu Negocio en Piloto Automático.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Waia es el puente directo entre tus clientes y las ventas automatizadas. Olvídate de las tareas repetitivas,
            los horarios limitados y las oportunidades perdidas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Conecta un Agente de IA a tu WhatsApp y convierte cada conversación en un resultado concreto:
          </p>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
            Quiero Mi Empleado de IA 24/7
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
