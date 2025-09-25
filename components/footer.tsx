import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Waia</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Tu empleado de IA 24/7 para WhatsApp. Automatiza ventas, soporte y operaciones mientras te enfocas en
              hacer crecer tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#beneficios" className="hover:text-foreground transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#agentes" className="hover:text-foreground transition-colors">
                  Agentes
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-foreground transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Waia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
