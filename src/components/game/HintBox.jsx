function HintBox({ hint }) {
  return (
    <div className="rounded-xl border-2 border-white/70 bg-gradient-to-r from-blue-500/70 to-cyan-400/70 p-4 text-center text-sm font-semibold tracking-[0.16em] text-white shadow-neon md:text-base">
      {hint}
    </div>
  )
}

export default HintBox
