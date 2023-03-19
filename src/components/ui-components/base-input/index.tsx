import React, { ChangeEvent, memo, useState } from 'react'
import cn from 'classnames'

import CloseIcon from '../icons/close-icon'

import styles from './index.module.css'

interface Props {
  id: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  clearField: (fieldName: string) => void
}

const BaseInput: React.FC<Props> = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  clearField
}) => {
  const [wasFocused, setWasFocused] = useState<boolean>(false)

  const isErrorShown = wasFocused && error

  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        name={name}
        type={type}
        data-testid="form-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(styles.input, { [styles.inputError]: !!isErrorShown })}
        onBlur={() => {
          setWasFocused(true)
        }}
      />
      {!!value && (
        <div
          onClick={() => {
            clearField(id)
          }}
          className={styles.icon}
        >
          <CloseIcon />
        </div>
      )}
      {isErrorShown && (
        <span data-testid="error-input" className={styles.error}>
          {' '}
          {error}{' '}
        </span>
      )}
    </div>
  )
}

export default memo(BaseInput)
