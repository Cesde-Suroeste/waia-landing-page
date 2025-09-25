import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <CardContent className="p-12 sm:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Zap className="h-8 w-8 text-primary" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
                No esperes a conseguir otro trabajo. <span className="text-primary">El momento es ahora.</span>
              </h2>

              <p className="text-lg leading-8 text-muted-foreground text-pretty mb-10">
                Financia tu crecimiento con cada venta que tu Agente de IA cierre hoy y multiplica tu productividad. El
                momento es ahora.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="text-lg px-10 py-4 animate-pulse-glow">
                  ¡Probar Gratis por 3 meses!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 bg-transparent">
                  Hablar con un Experto
                </Button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Sin compromiso
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Configuración gratuita
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Soporte incluido
                </div>
              </div>
            </div>
          </CardContent>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float"></div>
            <div
              className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </Card>
      </div>
    </section>
  )
}
