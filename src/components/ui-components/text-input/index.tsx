import React, { ChangeEvent, memo } from 'react'

import BaseInput from '../base-input'

interface Props {
  id: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
}

const TextInput: React.FC<Props> = ({
  id,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <BaseInput
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
    />
  )
}

export default memo(TextInput)
