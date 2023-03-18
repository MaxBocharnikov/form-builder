import React, { ChangeEvent, memo, useState } from 'react'
import cn from 'classnames'

import styles from './index.module.css'

interface Props {
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
}

const BaseInput: React.FC<Props> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  error
}) => {
  const [wasFocused, setWasFocused] = useState<boolean>(false)

  const isErrorShown = wasFocused && error

  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(styles.input, { [styles.error]: !!isErrorShown })}
        onBlur={() => {
          setWasFocused(true)
        }}
      />
      {isErrorShown && <span className={styles.error}> {error} </span>}
    </div>
  )
}

export default memo(BaseInput)
