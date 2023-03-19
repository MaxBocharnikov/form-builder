import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import MainPage from '../pages/main-page'

describe('Main Page', () => {
  it('should render correct title and text', () => {
    render(<MainPage />)
    const title = screen.getByTestId('title')
    expect(title).toHaveTextContent('Авторизация')
    const text = screen.getByTestId('text')
    expect(text).toHaveTextContent(
      'Для доступа к личному кабинету вашей компании авторизуйстесь на сайте'
    )
  })

  it('should render form-builder', () => {
    render(<MainPage />)
    const formBuilderWrapper = screen.getByTestId('form-builder-wrapper')
    expect(formBuilderWrapper).toBeInTheDocument()
  })

  it('should correctly disable submit button', () => {
    render(<MainPage />)
    const submitButton = screen.getByText('Войти')
    expect(submitButton).toHaveAttribute('disabled')

    const fields = screen.getAllByTestId('form-input')

    fireEvent.change(fields[0], { target: { value: 'Test@gmai.com' } })
    expect(submitButton).toHaveAttribute('disabled')

    fireEvent.change(fields[1], { target: { value: '123' } })
    expect(submitButton).not.toHaveAttribute('disabled')
  })
})
