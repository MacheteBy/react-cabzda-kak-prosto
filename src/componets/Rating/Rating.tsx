import React from 'react';

type StarType = {
    selected: boolean,
}

type RatingType = {
    value: number,
}


const Rating = (props: RatingType) => {
    return (
        <div>
    {[...Array(5)].map((n, i) => <Star selected={i < props.value}/>)}
        </div>
    );
};

function Star(props: StarType) {
    return (
        <>
            {props.selected ? <span><b>star </b></span> : <span>star </span>}
        </>
    )
}

export default Rating;