import TabsMenu from "@/components/TabsMenu"

export const metadata = {
  title: 'Carrito | Spirit Studio',
  description: '',
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