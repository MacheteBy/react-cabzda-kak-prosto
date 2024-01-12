import React, { useState } from 'react';


type AccordionType = {
    title: string,
}


const UncontrolledAccordion = (props: AccordionType) => {

    const [activeAccordion, setActiveAccordion] = useState(true)

    const onClickHandler = () => {
        setActiveAccordion(!activeAccordion)
    }

    return (
        <div>
            <AccordionTitle title={props.title}/><button onClick={onClickHandler}>click</button>
            {activeAccordion ? <AccordionBody /> : ''}
        </div>
    );
};

function AccordionTitle(props: AccordionType) {
    return (
        <>
            <h3>{props.title}</h3>
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

export default UncontrolledAccordion;