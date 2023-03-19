import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import FormBuilder from '../components/builder'

import { fieldsSchema } from './mocks/fields-schema'

describe('FormBuilder', () => {
  it('should render with correct fields', () => {
    render(<FormBuilder fields={fieldsSchema} onChangeHandler={() => {}} />)
    const fields = screen.getAllByTestId('form-input')
    expect(fields.length).toBe(3)
  })

  it('should work correctly with empty fields array', () => {
    render(<FormBuilder fields={[]} onChangeHandler={() => {}} />)
    const fields = screen.queryAllByTestId('form-input')
    expect(fields.length).toBe(0)
  })

  it('should show correct default value and have an ability to be change', () => {
    render(<FormBuilder fields={fieldsSchema} onChangeHandler={() => {}} />)
    const fields = screen.getAllByTestId('form-input')
    const field = fields[0]
    expect(field).toHaveValue('Some last name')
    fireEvent.change(field, { target: { value: 'New last name' } })
    expect(field).toHaveValue('New last name')
  })

  it('should validate email', () => {
    render(<FormBuilder fields={fieldsSchema} onChangeHandler={() => {}} />)
    const fields = screen.getAllByTestId('form-input')
    const emailField = fields[1]
    fireEvent.change(emailField, { target: { value: 'incorrect email' } })
    fireEvent.blur(emailField)
    expect(emailField).toHaveValue('incorrect email')
    const errors = screen.getAllByTestId('error-input')
    expect(errors[0]).toHaveTextContent('Invalid Email')
  })

  it('should validate required fields to be filled', () => {
    render(<FormBuilder fields={fieldsSchema} onChangeHandler={() => {}} />)
    const fields = screen.getAllByTestId('form-input')
    const requiredField = fields[2]
    fireEvent.change(requiredField, { target: { value: '' } })
    fireEvent.blur(requiredField)
    expect(requiredField).toHaveValue('')
    const errors = screen.getAllByTestId('error-input')
    expect(errors[0]).toHaveTextContent('Cannot be empty')
  })
})
