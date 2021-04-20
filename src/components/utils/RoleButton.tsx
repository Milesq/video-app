import React, { KeyboardEvent, PropsWithChildren } from 'react'

interface RoleButtonProps {
  action?(): any
}

function RoleButton({ children, action }: PropsWithChildren<RoleButtonProps>) {
  const keycodes = ['Space', 'Enter']

  const triggerAction = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (keycodes.includes(ev.code)) action?.()
  }

  return (
    <div role="button" tabIndex={0} onClick={action} onKeyDown={triggerAction}>
      {children}
    </div>
  )
}

export default RoleButton
