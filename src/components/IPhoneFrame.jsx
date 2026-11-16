import React from 'react'

export default function IPhoneFrame({
  src,
  alt = 'iPhone screen',
  className = '',
  showStatusBar = false,
  showHomeIndicator = true,
  showIsland = false,
  time = '9:41',
  batteryLevel = 92,
  statusTheme = 'light', // 'light' (white text/icons) or 'dark' (black text/icons on light screens)
  contentOffset = 0, // Shifts screen image down so app header has safe-area breathing room
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
        <div className={`iphone-screen ${statusTheme === 'dark' ? 'iphone-screen--light-bg' : ''}`}>
          {/* Top Micro Speaker Grill (at top rim) */}
          <div className="iphone-earpiece" aria-hidden="true" />

          {/* Dynamic Island Notch (Center Top) */}
          {showIsland && (
            <div className="dynamic-island" aria-hidden="true">
              <div className="dynamic-island-sensor" />
              <div className="dynamic-island-camera">
                <span className="camera-lens-reflex" />
              </div>
            </div>
          )}

          {/* iOS Status Bar (time on left, icons on right) */}
          {showStatusBar && (
            <div className={`iphone-status-bar iphone-status-bar--${statusTheme}`} aria-hidden="true">
              <span className="status-time">{time}</span>

              <div className="status-icons">
                <svg className="status-cellular" viewBox="0 0 18 12" fill="currentColor">
                  <rect x="0" y="9" width="2.6" height="3" rx="0.6" />
                  <rect x="4" y="6.5" width="2.6" height="5.5" rx="0.6" />
                  <rect x="8" y="3.8" width="2.6" height="8.2" rx="0.6" />
                  <rect x="12" y="1" width="2.6" height="11" rx="0.6" />
                </svg>

                <svg className="status-wifi" viewBox="0 0 16 12" fill="currentColor">
                  <path d="M8 2.5C10.7 2.5 13.1 3.6 14.8 5.4L16 4.1C13.9 1.9 11.1 0.7 8 0.7C4.9 0.7 2.1 1.9 0 4.1L1.2 5.4C2.9 3.6 5.3 2.5 8 2.5ZM8 6.1C9.7 6.1 11.3 6.8 12.4 8L13.7 6.7C12.2 5.2 10.2 4.3 8 4.3C5.8 4.3 3.8 5.2 2.3 6.7L3.6 8C4.7 6.8 6.3 6.1 8 6.1ZM8 9.5C8.9 9.5 9.7 9.9 10.3 10.5L8 12.8L5.7 10.5C6.3 9.9 7.1 9.5 8 9.5Z" />
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

          {/* Screen Content Viewport - Content shifted down like screen of iPhone */}
          <div
            className="iphone-screen-viewport"
            style={{ paddingTop: contentOffset ? `${contentOffset}px` : undefined }}
          >
            <img src={src} alt={alt} className="iphone-screen-img" />
          </div>

          {/* Subtle Glass Reflection Glare */}
          <div className="iphone-screen-glare" aria-hidden="true" />

          {/* iOS Bottom Home Indicator Bar */}
          {showHomeIndicator && (
            <div className={`iphone-home-indicator iphone-home-indicator--${statusTheme}`} aria-hidden="true">
              <span className="home-bar" />
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  )
}
