import React, { PropsWithChildren } from 'react'

import calculateCenterClasses, {
  CenterProps,
} from '../../utils/calculateCenterClasses'

function Center({
  children,
  className,
  x,
  y,
  columns,
}: PropsWithChildren<CenterProps & { className: string }>) {
  const additionalClasses = calculateCenterClasses({
    x,
    y,
    columns,
  }).concat(' ')

  return (
    <div className={`d-flex ${additionalClasses} ${className}`}>{children}</div>
  )
}

export default Center
