import React, { useState } from 'react';
import S from './UncontrolledOnOff.module.css'

const UncontrolledOnOff = () => {

    const [active, setActive] = useState(true)

    const onClickHandler = () => {
        setActive(!active)
    }

    const circleRed = `${S.circle} ${S.red}`
    const circleGreen = `${S.circle} ${S.green}`

    return (
        <div className={S.wrapperOnOff}>
            <button className={active ? S.green : ''} onClick={onClickHandler}>On</button>
            <button className={active ? '' : S.red} onClick={onClickHandler}>Off</button>
            <div className={active ? circleGreen : circleRed}></div>
        </div>
    );
};

export default UncontrolledOnOff;