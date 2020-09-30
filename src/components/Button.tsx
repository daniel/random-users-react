import React from 'react'
import './Button.css'

type Props = {
  title: string
  active: boolean
  onClick: () => void
}

export default function Button({ title, active, onClick }: Props) {
  const className = active ? 'button button--active' : 'button'
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  )
}
