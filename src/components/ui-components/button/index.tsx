import React, { memo } from 'react'
import classNames from 'classnames'

import styles from './index.module.css'

interface Props {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
  view?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}

const Button: React.FC<Props> = ({
  text,
  type,
  onClick,
  view = 'primary',
  disabled,
  className
}) => {
  const btnClasses = classNames(styles.button, className, {
    [styles.primary]: view === 'primary',
    [styles.secondary]: view === 'secondary'
  })

  return (
    <button
      onClick={onClick}
      type={type}
      className={btnClasses}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default memo(Button)
