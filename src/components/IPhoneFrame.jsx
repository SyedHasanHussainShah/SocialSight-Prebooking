import React from 'react'

export default function IPhoneFrame({
  src,
  alt = 'iPhone screen',
  className = '',
  showStatusBar = false, // Disabled by default to prevent duplicate time/wifi/battery overlapping app headers
  showHomeIndicator = true,
  showIsland = false, // Disabled by default so it does not block the top SocialSight logo/icons
  time = '9:41',
  batteryLevel = 92,
  children,
}) {
  return (
    <div className={`iphone-chassis ${className}`} aria-label={alt}>
      {/* Hardware Buttons on outer edges */}
      <div className="iphone-btn iphone-btn--action" aria-hidden="true" />
      <div className="iphone-btn iphone-btn--vol-up" aria-hidden="true" />
      <div className="iphone-btn iphone-btn--vol-down" aria-hidden="true" />
      <div className="iphone-btn iphone-btn--power" aria-hidden="true" />

      {/* Titanium Frame Border */}
      <div className="iphone-inner-border">
        {/* Antenna bands */}
        <span className="iphone-antenna iphone-antenna--top-left" aria-hidden="true" />
        <span className="iphone-antenna iphone-antenna--top-right" aria-hidden="true" />
        <span className="iphone-antenna iphone-antenna--bottom-left" aria-hidden="true" />
        <span className="iphone-antenna iphone-antenna--bottom-right" aria-hidden="true" />

        {/* Screen Display Container */}
        <div className="iphone-screen">
          {/* Use one centered top cutout: speaker slot or Dynamic Island. */}
          {!showIsland && <div className="iphone-earpiece" aria-hidden="true" />}

          {/* Dynamic Island (optional) */}
          {showIsland && (
            <div className="dynamic-island" aria-hidden="true">
              <div className="dynamic-island-sensor" />
              <div className="dynamic-island-camera">
                <span className="camera-lens-reflex" />
              </div>
            </div>
          )}

          {/* iOS Status Bar (optional, time on left, icons on right) */}
          {showStatusBar && (
            <div className="iphone-status-bar" aria-hidden="true">
              <span className="status-time">{time}</span>

              <div className="status-icons">
                <svg className="status-cellular" viewBox="0 0 18 12" fill="currentColor">
                  <rect x="0" y="9" width="2.6" height="3" rx="0.6" />
                  <rect x="4" y="6.5" width="2.6" height="5.5" rx="0.6" />
                  <rect x="8" y="3.8" width="2.6" height="8.2" rx="0.6" />
                  <rect x="12" y="1" width="2.6" height="11" rx="0.6" />
                </svg>

                <svg className="status-wifi" viewBox="0 0 16 14" fill="none">
                  <path d="M1.25 4.5a10 10 0 0 1 13.5 0M4.15 7.4a5.8 5.8 0 0 1 7.7 0M6.8 10.1a1.85 1.85 0 0 1 2.4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <circle cx="8" cy="12.2" r="0.95" fill="currentColor" />
                </svg>

                <div className="status-battery">
                  <div className="status-battery-body">
                    <div className="status-battery-level" style={{ width: `${batteryLevel}%` }} />
                  </div>
                  <div className="status-battery-cap" />
                </div>
              </div>
            </div>
          )}

          {/* Screen Content Image */}
          <img src={src} alt={alt} className="iphone-screen-img" />

          {/* iOS Bottom Home Indicator Bar */}
          {showHomeIndicator && (
            <div className="iphone-home-indicator" aria-hidden="true">
              <span className="home-bar" />
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  )
}
