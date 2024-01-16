import React, { useState } from 'react';
import S from './OnOff.module.css';
import { action } from '@storybook/addon-actions';
import OnOff from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
};


export const OnMode = () => <OnOff value={true} onClick={action('on of off clicked')}/>
export const OffMode = () => <OnOff value={false} onClick={action('on of off clicked')}/>
export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return (
        <OnOff value={value} onClick={setValue}/>
    )
}