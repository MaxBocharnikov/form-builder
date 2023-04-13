export enum FormFieldType {
  InputText = 'inputText',
  InputEmail = 'inputEmail',
  InputPassword = 'inputPassword',
}

export interface FormField {
  id: string
  type: FormFieldType
  label: string
  defaultValue?: string
  required?: boolean
}

export type FormValues = Record<string, string>

export type FormError = Record<string, string>

export interface FormResult {
  formValues: FormValues
  isValid: boolean
  errors: FormError
}
