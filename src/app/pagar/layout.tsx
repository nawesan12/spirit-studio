import TabsMenu from "@/components/TabsMenu"

export const metadata = {
  title: 'Pagar | Spirit Studio',
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