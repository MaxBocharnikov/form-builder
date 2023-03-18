import React from 'react';

import FormBuilder from '../../components/builder';
import { FormField, FormResult } from '../../types/builder';

import styles from './index.module.css';


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
        label: 'Last Name',
    },
    {
        id: 'email',
        type: 'inputEmail',
        label: 'Email',
        required: true,
    },
    {
        id: 'password',
        type: 'inputPassword',
        label: 'Password',
        required: true,
    },
]
const Main: React.FC = () => {
    return (
        <div className={ styles.wrapper }>
            <FormBuilder
                fields={ fieldsSchema }
                onChangeHandler={ (result: FormResult) => console.log(result) }
            />
        </div>
    );
};

export default Main;