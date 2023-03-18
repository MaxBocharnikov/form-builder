import React, { ChangeEvent, memo } from 'react';

import styles from './index.module.css';

type Props = {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const BaseInput: React.FC<Props> = ({ id, type, placeholder, value, onChange }) => {
    return (
        <input
            id={ id }
            name={ id }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            className={ styles.input }
        />
    );
};

export default memo(BaseInput);