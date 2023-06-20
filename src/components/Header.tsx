export default function Header() {
  return (
    <header className="shadow-sm shadow-zinc-700 w-screen p-4 fixed">
      <svg width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4f4f4f" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8l16 0" />
        <path d="M4 16l16 0" />
      </svg>
      <span className="text-4xl font-bold">SS</span>
    </header>
  )
}