import {
  validateEmail,
  validateForm,
  generateInitialFormValues
} from '../utils/builder'
import { FormField, FormFieldType, FormValues } from '../types/builder'

describe('builder utils', () => {
  it('should correctly validate email', () => {
    expect(validateEmail('test@gmail.com')).toBeTruthy()
    expect(validateEmail('test123')).not.toBeTruthy()
    expect(validateEmail('')).not.toBeTruthy()
  })

  it('should give correct result after validation', () => {
    const fields: FormField[] = [
      {
        id: 'email',
        type: FormFieldType.InputEmail,
        label: 'Email',
        required: true
      },
      {
        id: 'last_name',
        type: FormFieldType.InputText,
        label: 'Last Name',
        required: true
      },
      {
        id: 'middle_name',
        type: FormFieldType.InputText,
        label: 'Middle Name'
      }
    ]
    const formValues: FormValues = {
      email: 'test',
      last_name: '',
      middle_name: ''
    }

    expect(validateForm(formValues, fields)).toEqual({
      errors: {
        email: 'Invalid Email',
        last_name: 'Cannot be empty'
      },
      isValid: false
    })

    formValues.email = 'test@gmail.com'
    formValues.last_name = 'Some'

    expect(validateForm(formValues, fields)).toEqual({
      errors: {},
      isValid: true
    })
  })

  it('should initial form values correctly', () => {
    const fields: FormField[] = [
      {
        id: 'last_name',
        type: FormFieldType.InputText,
        label: 'Last Name',
        defaultValue: 'Some'
      },
      {
        id: 'first_name',
        type: FormFieldType.InputText,
        label: 'First Name'
      }
    ]
    expect(generateInitialFormValues(fields)).toEqual({
      last_name: 'Some',
      first_name: ''
    })
  })
})
