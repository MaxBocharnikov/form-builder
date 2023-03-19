import { FormField } from '../../types/builder'

export const fieldsSchema: FormField[] = [
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name',
    defaultValue: 'Some last name'
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    required: true
  }
]
