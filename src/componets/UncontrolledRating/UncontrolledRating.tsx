import React, { useState } from 'react';

type StarType = {
    selected: boolean,
}

const UncontrolledRating = () => {

    const [star, setStar] = useState(0)

    return (
        <div>
            <Star selected={star > 0} /><button onClick={() => { setStar(1) }}>1</button>
            <Star selected={star > 1} /><button onClick={() => { setStar(2) }}>2</button>
            <Star selected={star > 2} /><button onClick={() => { setStar(3) }}>3</button>
            <Star selected={star > 3} /><button onClick={() => { setStar(4) }}>4</button>
            <Star selected={star > 4} /><button onClick={() => { setStar(5) }}>5</button>
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


export default UncontrolledRating;