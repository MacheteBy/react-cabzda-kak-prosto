import React, { useReducer, useState } from 'react';
import { reducer } from './reducer';


type AccordionType = {
    title: string,
}

type AccordionTitleType = {
    title: string,
    setActiveAccordion: () => void,
}

const AccordionTitle = React.memo(AccordionTitleSecret)
const AccordionBody = React.memo(AccordionBodySecret)

const UncontrolledAccordion = (props: AccordionType) => {

    // const [activeAccordion, setActiveAccordion] = useState(true)
    const [activeAccordion, dispatch] = useReducer(reducer, false)

    return (
        <div>
            {/* <AccordionTitle title={props.title} setActiveAccordion={() => setActiveAccordion(!activeAccordion)}/> */}
            <AccordionTitle title={props.title} setActiveAccordion={() => dispatch({ type: 'TOGGLE-COLLAPSED' })} />
            {activeAccordion ? <AccordionBody /> : ''}
        </div>
    );
};


function AccordionTitleSecret(props: AccordionTitleType) {
    return (
        <>
            <h3 onClick={() => props.setActiveAccordion()}>{props.title}</h3>
        </>
    )
}

function AccordionBodySecret() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;