import { FormField, FormFieldType } from '../../types/builder'

export const fieldsSchema: FormField[] = [
  {
    id: 'last_name',
    type: FormFieldType.InputText,
    label: 'Last Name',
    defaultValue: 'Some last name'
  },
  {
    id: 'email',
    type: FormFieldType.InputEmail,
    label: 'Email',
    required: true
  },
  {
    id: 'password',
    type: FormFieldType.InputPassword,
    label: 'Password',
    required: true
  }
]
