import React, { ChangeEvent, useEffect, useState } from 'react';

import { FormError, FormField, FormResult, FormValues } from '../../types/builder';
import { generateInitialFormValues, validateForm } from '../../utils/builder';
import FormFieldElement from './form-field-element';

type Props = {
    fields: FormField[];
    onChangeHandler: (result: FormResult) => void;
}


const Builder: React.FC<Props> = ({ fields, onChangeHandler }) => {
    const [formValues, setFormValues] = useState<FormValues>(() => generateInitialFormValues(fields));
    const [errors, setErrors] = useState<FormError>({});

    useEffect(() => {
        const { isValid, errors } = validateForm(formValues, fields);
        setErrors(errors);
        onChangeHandler({
            formValues,
            isValid,
            errors,
        });
    }, [JSON.stringify(formValues), JSON.stringify(fields)])

    return (
        <div>
            { fields.map((field: FormField) => (
                <FormFieldElement
                    key={ field.id }
                    { ...field }
                    value={ formValues[field.id] }
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setFormValues((prevState: FormValues) => ({
                            ...prevState,
                            [event.target.name]: event.target.value
                        }))
                    }}
                    error={ errors[field.id] }
                />
            ))}
        </div>
    );
};

export default Builder;