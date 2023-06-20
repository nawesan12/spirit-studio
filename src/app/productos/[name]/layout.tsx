import TabsMenu from "@/components/TabsMenu"

export const metadata = {
  title: 'Productos | Spirit Studio',
  description: '',
}

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { name: string }
}) {
  return (
    <>
      {params.name}
      {children}
      <TabsMenu />
    </>
  )
}