import { useEffect, useRef } from 'react'

const INTERACTIVE_TARGETS = 'a, button, [role="button"], summary, label, select, [data-cursor="interactive"]'
const TEXT_TARGETS = 'input, textarea, [contenteditable="true"]'

function PremiumCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!finePointer.matches) return undefined

    const cursor = cursorRef.current
    if (!cursor) return undefined

    document.body.classList.add('has-premium-cursor')

    const move = (event) => {
      if (event.pointerType !== 'mouse') return
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
      cursor.classList.toggle('is-visible', !event.target.closest(TEXT_TARGETS))
      cursor.classList.toggle('is-interactive', Boolean(event.target.closest(INTERACTIVE_TARGETS)))
    }
    const down = (event) => {
      if (event.pointerType === 'mouse') cursor.classList.add('is-pressed')
    }
    const up = () => cursor.classList.remove('is-pressed')
    const leave = () => cursor.classList.remove('is-visible', 'is-interactive', 'is-pressed')

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down, { passive: true })
    window.addEventListener('pointerup', up, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)

    return () => {
      document.body.classList.remove('has-premium-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  return <span ref={cursorRef} className="premium-cursor" aria-hidden="true" />
}

export default PremiumCursor
