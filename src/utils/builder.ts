import { FormError, FormField, FormResult, FormValues } from '../types/builder'

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
  const requiredFieldsErrors = validateRequiredFields(formValues, fields)
  const emailFieldsErrors = validateEmailFields(formValues, fields)

  const errors = mergedObjects(requiredFieldsErrors, emailFieldsErrors)

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const validateRequiredFields = (
  formValues: FormValues,
  fields: FormField[]
): FormError => {
  const requiredFields = fields.filter((field: FormField) => field.required)
  const missingFields = requiredFields.filter(
    (field: FormField) => !formValues[field.id]
  )

  return missingFields.reduce((acm: FormError, field: FormField) => {
    return {
      ...acm,
      [field.id]: 'Cannot be empty'
    }
  }, {})
}

export const validateEmailFields = (
  formValues: FormValues,
  fields: FormField[]
): FormError => {
  const requiredFields = fields.filter(
    (field: FormField) => field.type === 'inputEmail'
  )
  const missingFields = requiredFields.filter(
    (field: FormField) => !validateEmail(formValues[field.id])
  )

  return missingFields.reduce((acm: FormError, field: FormField) => {
    return {
      ...acm,
      [field.id]: 'Invalid Email'
    }
  }, {})
}

export const mergedObjects = (...objects: FormError[]): {} => {
  const result: FormError = {}
  for (const obj of objects) {
    for (const [key, value] of Object.entries(obj)) {
      result[key] = result[key] ? `${result[key]}, ${value}` : value
    }
  }
  return result
}

export const validateEmail = (email: string): boolean => {
  return /.+@.+\.[A-Za-z]+$/.test(email)
}
