import Back from "@/components/Back";

const fetchProduct = async (name: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${name}`)
  const data = await res.json()

  return data
}

export default function Page({ params }:{ params: { name: string }}) {
  return (
    <>
      {params.name}
      Productos
      <Back />
    </>
  )
}