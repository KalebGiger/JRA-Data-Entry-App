import React from 'react';
import Button from '@material-ui/core/Button';

export function InputButton(props) {

    const {
        content,
        value,
        values,
        onClick,
        className,
    } = props;

    return (
        <Button onClick={onClick} className={className}>
            {content}
        </Button>
    );
}