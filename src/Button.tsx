import React from 'react';

type ButtonPropsType = {
    title: string,
    onClickHandler?: () => void,
    disabled?: boolean,
}

export const Button = (props:ButtonPropsType) => {
    return (
        <>
            <button onClick={props.onClickHandler} disabled = {props.disabled}>{props.title}</button>
        </>
    );
};

