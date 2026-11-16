import { Eye, Sparkles } from 'lucide-react'

export function BrandMark({ compact = false, iconSrc }) {
  return (
    <div className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label="SocialSight">
      <span className={`brand-orb${iconSrc ? ' brand-orb--image' : ''}`} aria-hidden="true">
        {iconSrc ? (
          <img className="brand-orb-image" src={iconSrc} alt="" />
        ) : (
          <>
            <Eye size={compact ? 19 : 23} strokeWidth={2.1} />
            <i />
          </>
        )}
      </span>
      <span className="brand-name">
        <b>SocialSight</b>
      </span>
    </div>
  )
}

export function SectionEyebrow({ children, icon = true }) {
  return (
    <p className="eyebrow">
      {icon && <Sparkles size={13} aria-hidden="true" />}
      {children}
    </p>
  )
}
