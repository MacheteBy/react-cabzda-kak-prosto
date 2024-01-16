import React, { useState } from 'react';

type StarType = {
    selected: boolean,
    value: number,
    setStar: (value: number) => void,
}

const UncontrolledRating = () => {

    const [star, setStar] = useState(0)

    return (
        <div>
            <Star selected={star > 0} setStar={setStar} value={1}/>
            <Star selected={star > 1} setStar={setStar} value={2}/>
            <Star selected={star > 2} setStar={setStar} value={3}/>
            <Star selected={star > 3} setStar={setStar} value={4}/>
            <Star selected={star > 4} setStar={setStar} value={5}/>
        </div>
    );
};

function Star(props: StarType) {
    return (
        <span onClick={() => {props.setStar(props.value)}}>
            {props.selected ? <b>star </b> : 'star' }
        </span>
    )
}


export default UncontrolledRating;