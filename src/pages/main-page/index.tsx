import React, { useCallback, useState } from 'react'

import FormBuilder from '../../components/builder'
import Button from '../../components/ui-components/button'
import { FormField, FormResult } from '../../types/builder'
import emojiSrc from '../../assets/icons/emoji.png'

import styles from './index.module.css'

const fieldsSchema: FormField[] = [
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
const MainPage: React.FC = () => {
  const [formResult, setFormResult] = useState<FormResult | null>(null)

  const onSubmit = useCallback(() => {
    console.log('result: ', formResult)
  }, [JSON.stringify(formResult)])

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <img
          className={styles.img}
          src={emojiSrc}
          width={80}
          height={80}
          alt="emoji"
        />
        <h2 className={styles.title} data-testid="title">
          Авторизация
        </h2>
        <p className={styles.text} data-testid="text">
          Для доступа к личному кабинету вашей компании авторизуйстесь на сайте
        </p>
        <FormBuilder
          fields={fieldsSchema}
          onChangeHandler={(result: FormResult) => {
            setFormResult(result)
          }}
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

export default MainPage
