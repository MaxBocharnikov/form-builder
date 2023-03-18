type FormFieldType = 'inputText' | 'inputEmail' | 'inputPassword';

export type FormField = {
    id: string;
    type: FormFieldType;
    label: string;
    defaultValue?: string;
    required?: boolean;
}

export type FormValues = {
    [key: string]: string;
}

export type FormError = {
    [key: string]: string;
}

export type FormResult = {
    formValues: FormValues;
    isValid: boolean;
    errors: FormError;
}