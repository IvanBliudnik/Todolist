import React from 'react';

type ButtonPropsType = {
    title: string,
    onClickHandler?: () => void,
    disabled?: boolean,
    classes?: string
}

export const Button = (props:ButtonPropsType) => {
    return (
        <>
            <button className={props.classes} onClick={props.onClickHandler} disabled = {props.disabled}>{props.title}</button>
        </>
    );
};

