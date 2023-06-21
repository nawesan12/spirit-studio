import TabsMenu from "@/components/TabsMenu"

export const metadata = {
  title: 'Buscar | Spirit Studio',
  description: 'Bienvenido a Spirit Studio 79, donde el estilo se encuentra con la autoafirmación. Descubre nuestras colecciones únicas y exprésate a lo grande. Únete a nuestra comunidad y libera tu espíritu con cada prenda.',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <TabsMenu />
    </>
  )
}