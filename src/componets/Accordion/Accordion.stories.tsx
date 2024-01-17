import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'
import Accordion from './Accordion';

export default {
    component: Accordion,
};

const onChangeHandler = action('onChange')
const onClickCallback = action('click')

export const CollapsedAccordion = () => {
    return (
        <Accordion title={'Collapsed Accordion'}
            collapsed={true}
            onClick={onChangeHandler}
            items={[
                { title: 'one', value: 1 },
                { title: 'two', value: 2 },
                { title: 'three', value: 3 },
            ]} 
            onClickAccordion={onClickCallback}/>
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion title={'Opened Accordion'}
            collapsed={false}
            onClick={() => { }}
            items={[
                { title: 'one', value: 1 },
                { title: 'two', value: 2 },
                { title: 'three', value: 3 },
            ]}
            onClickAccordion={onClickCallback} />
    )
}

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion title={'Accordion'}
            collapsed={collapsed}
            items={[
                { title: 'one', value: 1 },
                { title: 'two', value: 2 },
                { title: 'three', value: 3 },
            ]}
            onClickAccordion={(value) => {alert(`user with ID ${value} should be happy`)}}
            onClick={() => {
                setCollapsed(!collapsed)
            }} />
    )
}
