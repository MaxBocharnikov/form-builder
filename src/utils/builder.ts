import {
  FormError,
  FormField,
  FormFieldType,
  FormResult,
  FormValues
} from '../types/builder'

export const generateInitialFormValues = (fields: FormField[]): FormValues => {
  return fields.reduce((acm: FormValues, field: FormField) => {
    return {
      ...acm,
      [field.id]: field.defaultValue ?? ''
    }
  }, {})
}

export const validateForm = (
  formValues: FormValues,
  fields: FormField[]
): Omit<FormResult, 'formValues'> => {
  const errors = fields.reduce<FormError>((result, field) => {
    const key = field.id
    const value = formValues[key]
    if (field.required) {
      const isValid = !!value
      result[key] = formFieldErrors(result[key], 'Cannot be empty', isValid)
    }
    if (field.type === FormFieldType.InputEmail) {
      const isValid = validateEmail(value)
      result[key] = formFieldErrors(result[key], 'Invalid Email', isValid)
    }
    if (!result[key]) {
      delete result[key]
    }
    return result
  }, {})
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const formFieldErrors = (
  fieldErrors: string,
  newErrorText: string,
  isValid: boolean
): string => {
  if (isValid) return fieldErrors
  return fieldErrors ? `${fieldErrors}, ${newErrorText}` : newErrorText
}

export const validateEmail = (email: string): boolean => {
  return /.+@.+\.[A-Za-z]+$/.test(email)
}
