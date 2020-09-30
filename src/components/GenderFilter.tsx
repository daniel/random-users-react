import React from 'react'
import Button from './Button'

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function GenderFilter({ value, onChange }: Props) {
  return (
    <div className="button-group">
      <Button
        title="Male"
        active={value === 'male'}
        onClick={() => onChange('male')}
      />
      <Button
        title="Female"
        active={value === 'female'}
        onClick={() => onChange('female')}
      />
    </div>
  )
}
