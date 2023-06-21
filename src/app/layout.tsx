import './globals.css'
import TabsMenu from '@/components/TabsMenu'

export const metadata = {
  title: 'Spirit Studio | Clothes',
  description: 'Bienvenido a Spirit Studio 79, donde el estilo se encuentra con la autoafirmación. Descubre nuestras colecciones únicas y exprésate a lo grande. Únete a nuestra comunidad y libera tu espíritu con cada prenda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>
          {children}
        </main>
        <TabsMenu />
      </body>
    </html>
  )
}
