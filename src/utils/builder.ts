import { FormError, FormField, FormResult, FormValues } from '../types/builder';

export const generateInitialFormValues = (fields: FormField[]): FormValues => {
    return fields.reduce((acm: FormValues, field: FormField) => {
        return {
            ...acm,
            [field.id]: field.defaultValue || ''
        }
    }, {})
}

export const validateForm = (formValues: FormValues, fields: FormField[]): Omit<FormResult, 'formValues'> => {
    const requiredFields = fields.filter((field: FormField) => field.required);
    const missingFields = requiredFields.filter((field:FormField) => !formValues[field.id]);

    const errors = missingFields.reduce((acm: FormError, field: FormField) => {
        return {
            ...acm,
            [field.id]: 'Cannot be empty'
        }
    }, {})
    return {
        isValid: missingFields.length === 0,
        errors
    }
}