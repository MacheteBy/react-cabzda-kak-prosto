import React, { useState } from 'react';


type AccordionType = {
    title: string,
}

type AccordionTitleType = {
    title: string,
    setActiveAccordion: () => void,
}

const UncontrolledAccordion = (props: AccordionType) => {

    const [activeAccordion, setActiveAccordion] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.title} setActiveAccordion={() => setActiveAccordion(!activeAccordion)}/>
            {activeAccordion ? <AccordionBody /> : ''}
        </div>
    );
};


function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            <h3 onClick={() => props.setActiveAccordion()}>{props.title}</h3>
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