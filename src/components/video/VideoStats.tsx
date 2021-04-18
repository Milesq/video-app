import React from 'react'

import { useSelector } from '../../store'
import Center from '../utils/Center'
import { LikeIcon, EyeIcon, CalendarIcon } from '../../svg'

const icons = {
  likes: <LikeIcon width="24" />,
  views: <EyeIcon width="24" />,
  date: <CalendarIcon width="24" />,
}

type IconType = keyof typeof icons
type VideoStatsProps = Record<IconType, string>

function VideoStats({ likes, views, date }: VideoStatsProps) {
  // use destructuing to render only known props
  const data = Object.entries({ likes, views, date })

  const choosenTheme = useSelector(state => state.theme.theme)
  const isDark = choosenTheme === 'dark'

  return (
    <div
      className={`d-flex justify-content-around w-100 ${
        isDark && 'text-white-50'
      }`}
    >
      {data.map(([name, value]) => (
        <Center key={name} y>
          {icons[name as IconType]}
          <span className="ml-1">{value}</span>
        </Center>
      ))}
    </div>
  )
}

export default VideoStats
