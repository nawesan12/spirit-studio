"use client"
import { useRouter } from "next/navigation"

export default function Back() {

  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="p-6 fixed top-0 left-0">
      <svg width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--bone)" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </button>
  )
}