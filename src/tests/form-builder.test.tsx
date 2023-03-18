import React from 'react'
import { render, screen } from '@testing-library/react'
import FormBuilder from '../components/builder'

import { fieldsSchema } from './mocks/fields-schema'

describe('FormBuilder', () => {
  it('should render with correct fields', () => {
    render(<FormBuilder fields={fieldsSchema} onChangeHandler={() => {}} />)
    const fields = screen.getAllByTestId('form-input')
    expect(fields.length).toBe(3)
  })
})
