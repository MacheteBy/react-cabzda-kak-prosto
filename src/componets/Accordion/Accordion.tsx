import React from 'react';

type AccordionType = {
    title: string,
    collapsed: boolean,
    onClick: (collapsed: boolean) => void,
    items: ItemsType[],
    onClickAccordion: (value: any) => void
}

type AccordionTitleType = {
    title: string,
    onClick: () => void,
}

type ItemsType = {
    title: string,
    value: any,
}

type AccordionBodyType = {
    items: ItemsType[],
    onClickAccordion: (value: any) => void
}


function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {props.onClick(!props.collapsed)}}/>
            {props.collapsed ? '' : <AccordionBody items={props.items} onClickAccordion={props.onClickAccordion}/>}
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

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((e, index) => <li onClick={()=> {props.onClickAccordion(e.value)}} key={index}>{e.title}</li>)}
        </ul>
    )
}

export default Accordion;