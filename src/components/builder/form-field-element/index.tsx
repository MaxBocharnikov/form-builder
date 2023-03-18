import React, { ChangeEvent } from 'react'
import { FormField } from '../../../types/builder'
import TextInput from '../../ui-components/text-input'
import EmailInput from '../../ui-components/email-input'
import PasswordInput from '../../ui-components/password-input'

type Props = FormField & {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
}

const FormFieldElement: React.FC<Props> = ({
  id,
  type,
  label,
  value,
  onChange,
  error
}) => {
  const renderElement = () => {
    switch (type) {
      case 'inputText':
        return (
          <TextInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
          />
        )

      case 'inputEmail':
        return (
          <EmailInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
          />
        )

      case 'inputPassword':
        return (
          <PasswordInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
          />
        )

      default:
        return null
    }
  }

  return <>{renderElement()}</>
}

export default FormFieldElement
