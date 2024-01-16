import React from 'react';

type StarType = {
    selected: boolean,
    onClick: () => void,
}

type RatingType = {
    value: number,
    onClick: (value: number) => void,
}


const Rating = (props: RatingType) => {
    return (
        <div>
    {[...Array(5)].map((n, i) => <Star onClick={() => {props.onClick(i + 1)}} selected={i < props.value}/>)}
        </div>
    );
};

function Star(props: StarType) {
    return (
        <span onClick={() => {props.onClick()}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}

export default Rating;