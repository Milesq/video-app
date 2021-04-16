import React from 'react'

import Center from './utils/Center'

const icons = {
  likes: (
    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
      />
    </svg>
  ),
  views: (
    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
      />
    </svg>
  ),
  date: (
    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"
      />
    </svg>
  ),
}

type IconType = keyof typeof icons
type VideoStatsProps = Record<IconType, string>

function VideoStats({ likes, views, date }: VideoStatsProps) {
  // use destructuing to render only known props
  const data = Object.entries({ likes, views, date })

  return (
    <div className="d-flex justify-content-around">
      {data.map(([name, value]) => (
        <Center key="name" y>
          {icons[name as IconType]}
          <span className="ml-1">{value}</span>
        </Center>
      ))}
    </div>
  )
}

export default VideoStats
