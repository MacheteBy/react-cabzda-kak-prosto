import React from 'react';

type AccordionType = {
    title: string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void,
}

type AccordionTitleType = {
    title: string,
    onClick: () => void,
}


function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {props.onClick(!props.collapsed)}}/>
            {props.collapsed ? '' : <AccordionBody />}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;