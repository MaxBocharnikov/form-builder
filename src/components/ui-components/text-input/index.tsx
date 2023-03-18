import React, { ChangeEvent, memo } from 'react';

import BaseInput from '../base-input';

type Props = {
    id: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({ id, placeholder, value, onChange }) => {
    return (
        <BaseInput
            id={ id }
            type='text'
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
        />
    );
};

export default memo(TextInput);