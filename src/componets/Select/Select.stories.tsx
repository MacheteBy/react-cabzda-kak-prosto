import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'
import Select from './Select';


export default {
    component: Select,
};

export const SelectCoolapsed = () => {
    let [selectValue, setSelectValue] = useState('Minsk')
    let [selectCollapsed, setSelectCollapsed] = useState(false)

    const selectItems = [
        { title: 'none', value: 0 },
        { title: 'Minsk', value: 1 },
        { title: 'Moskov', value: 2 },
        { title: 'Kiev', value: 3 },
    ]

    const onClickMenuHandler = (value: any) => {
        setSelectValue(value)
        setSelectCollapsed(!selectCollapsed)
    }

    return (
        <Select selectItems={selectItems}
            selectValue={selectValue}
            selectCollapsed={selectCollapsed}
            onClick={setSelectCollapsed}
            onClickMenu={onClickMenuHandler} />
    )
}