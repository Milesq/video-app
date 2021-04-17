import React from 'react'

function Controller() {
  const controlIconStyle = { width: 32, height: 32, cursor: 'pointer' }

  return (
    <div className="d-flex justify-content-end" style={{ gap: 10 }}>
      <div>
        <svg
          className="text-insta-red"
          style={controlIconStyle}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          />
        </svg>
      </div>
      <div>
        <svg
          className="text-secondary"
          style={controlIconStyle}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Controller
