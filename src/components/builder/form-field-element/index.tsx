import React, { ChangeEvent } from 'react'
import { FormField, FormFieldType, FormValues } from '../../../types/builder'
import TextInput from '../../ui-components/text-input'
import EmailInput from '../../ui-components/email-input'
import PasswordInput from '../../ui-components/password-input'

type Props = FormField & {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error: string | undefined
  clearField: (fieldName: keyof FormValues) => void
}

const FormFieldElement: React.FC<Props> = ({
  id,
  type,
  label,
  value,
  onChange,
  error,
  clearField
}) => {
  const renderElement = () => {
    switch (type) {
      case FormFieldType.InputText:
        return (
          <TextInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
            clearField={clearField}
          />
        )

      case FormFieldType.InputEmail:
        return (
          <EmailInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
            clearField={clearField}
          />
        )

      case FormFieldType.InputPassword:
        return (
          <PasswordInput
            id={id}
            placeholder={label}
            value={value}
            onChange={onChange}
            error={error}
            clearField={clearField}
          />
        )

      default:
        return null
    }
  }

  return <>{renderElement()}</>
}

export default FormFieldElement
