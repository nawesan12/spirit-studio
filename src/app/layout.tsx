import './globals.css'
import TabsMenu from '@/components/TabsMenu'

export const metadata = {
  title: 'Spirit Studio',
  description: '',
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
