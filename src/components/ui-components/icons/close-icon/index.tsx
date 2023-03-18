import React, { memo } from 'react'

interface Props {
  className?: string
}

const CloseIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="#000"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M512 59.076L452.922 0 256 196.922 59.076 0 0 59.076 196.922 256 0 452.922 59.076 512 256 315.076 452.922 512 512 452.922 315.076 256z"></path>
    </svg>
  )
}

export default memo(CloseIcon)
