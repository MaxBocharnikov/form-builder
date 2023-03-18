import React, { useState } from 'react'

import FormBuilder from '../../components/builder'
import Button from '../../components/ui-components/button'
import { FormField, FormResult } from '../../types/builder'

import styles from './index.module.css'

const fieldsSchema: FormField[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name'
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name'
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
const Main: React.FC = () => {
  const [formResult, setFormResult] = useState<FormResult | null>(null)

  const onSubmit = () => {
    console.log('result: ', formResult)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Авторизация</h2>
        <p className={styles.text}>
          Для доступа к личному кабинету вашей компании авторизуйстесь на сайте
        </p>
        <FormBuilder
          fields={fieldsSchema}
          onChangeHandler={(result: FormResult) => { setFormResult(result) }}
        />
        <Button
          text="Войти"
          type="submit"
          view="primary"
          onClick={onSubmit}
          className={styles.submit}
          disabled={!formResult?.isValid}
        />
      </div>
    </div>
  )
}

export default Main
