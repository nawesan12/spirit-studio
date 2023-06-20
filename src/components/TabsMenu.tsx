"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function TabsMenu() {

  const pathname = usePathname()

  return (
    <nav className="w-screen fixed bottom-0 flex justify-evenly py-6 shadow-sm shadow-zinc-300">
      <Link href="/">
        <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke={pathname === "/" ? "#ffffff" : "#4f4f4f"} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </Link>
      <Link href="/buscar">
        <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke={pathname === "/buscar" ? "#ffffff" : "#4f4f4f"} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </Link>
      <Link href="/favoritos">
        <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke={pathname === "/favoritos" ? "#ffffff" : "#4f4f4f"} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </Link>
      <Link href="/carrito">
        <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke={pathname === "/carrito" ? "#ffffff" : "#4f4f4f"} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
      </Link>
    </nav>
  )
}