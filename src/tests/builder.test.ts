import {
  validateEmail,
  mergedObjects,
  validateEmailFields,
  validateRequiredFields,
  validateForm,
  generateInitialFormValues
} from '../utils/builder'
import { FormField, FormValues } from '../types/builder'

describe('builder utils', () => {
  it('should correctly validate email', () => {
    expect(validateEmail('test@gmail.com')).toBeTruthy()
    expect(validateEmail('test123')).not.toBeTruthy()
    expect(validateEmail('')).not.toBeTruthy()
  })

  it('should correctly merge objects', () => {
    const obj1 = {
      foo: 'foo',
      bar: 'bar'
    }
    const obj2 = {
      bar: 'foo'
    }
    expect(mergedObjects(obj1, obj2)).toEqual({
      foo: 'foo',
      bar: 'bar, foo'
    })
  })

  it('should validate incorrect email fields', () => {
    const fields: FormField[] = [
      {
        id: 'email',
        type: 'inputEmail',
        label: 'Email',
        required: true
      },
      {
        id: 'email_repeat',
        type: 'inputEmail',
        label: 'Repeat Email'
      },
      {
        id: 'last_name',
        type: 'inputText',
        label: 'Last Name'
      }
    ]
    const formValues: FormValues = {
      email: 'test123',
      email_repeat: 'test123@gmail.com',
      last_name: ''
    }

    expect(validateEmailFields(formValues, fields)).toEqual({
      email: 'Invalid Email'
    })
  })

  it('should validate empty required fields', () => {
    const fields: FormField[] = [
      {
        id: 'last_name',
        type: 'inputText',
        label: 'Last Name',
        required: true
      },
      {
        id: 'first_name',
        type: 'inputText',
        label: 'First Name',
        required: true
      },
      {
        id: 'middle_name',
        type: 'inputText',
        label: 'Middle Name'
      }
    ]
    const formValues: FormValues = {
      last_name: '',
      first_name: 'Max',
      middle_name: ''
    }

    expect(validateRequiredFields(formValues, fields)).toEqual({
      last_name: 'Cannot be empty'
    })
  })

  it('should give correct result after validation', () => {
    const fields: FormField[] = [
      {
        id: 'email',
        type: 'inputEmail',
        label: 'Email',
        required: true
      },
      {
        id: 'last_name',
        type: 'inputText',
        label: 'Last Name',
        required: true
      },
      {
        id: 'middle_name',
        type: 'inputText',
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
        type: 'inputText',
        label: 'Last Name',
        defaultValue: 'Some'
      },
      {
        id: 'first_name',
        type: 'inputText',
        label: 'First Name'
      }
    ]
    expect(generateInitialFormValues(fields)).toEqual({
      last_name: 'Some',
      first_name: ''
    })
  })
})
