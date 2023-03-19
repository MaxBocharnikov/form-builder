import React, { ChangeEvent, memo } from 'react'

import BaseInput from '../base-input'

interface Props {
  id: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  clearField: (fieldName: string) => void
}

const EmailInput: React.FC<Props> = ({
  id,
  placeholder,
  value,
  onChange,
  error,
  clearField
}) => {
  return (
    <BaseInput
      id={id}
      name={id}
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      clearField={clearField}
    />
  )
}

export default memo(EmailInput)
