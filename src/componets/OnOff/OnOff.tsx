import React, { useState } from 'react';
import S from './OnOff.module.css'

type OnOffType = {
    value: boolean,
    onClick: (value: boolean) => void,
}

const OnOff = (props:OnOffType) => {

    const onClickHandler = () => {
        props.onClick(!props.value)
    }

    const circleRed = `${S.circle} ${S.red}`
    const circleGreen = `${S.circle} ${S.green}`

    return (
        <div className={S.wrapperOnOff}>
            <button className={props.value ? S.green : ''} onClick={onClickHandler}>On</button>
            <button className={props.value ? '' : S.red} onClick={onClickHandler}>Off</button>
            <div className={props.value ? circleGreen : circleRed}></div>
        </div>
    );
};

export default OnOff;