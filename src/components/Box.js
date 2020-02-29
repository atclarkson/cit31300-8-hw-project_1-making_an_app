import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem} from '@fortawesome/pro-duotone-svg-icons'
import {Link} from 'react-router-dom';

const Box = (props) => {

    const style = {
        color: "#1cbcff"
    };

    const valueGems = [];
    for (let i = 0; i < props.val; i++) {
        valueGems.push(<FontAwesomeIcon key={i} style={style} icon={faGem}/>);
    }

    return (
        <Link to={`/${props.name}`} className='BoxLink'>
            <div className='Box'>
                <h1>{props.name}</h1>
                <h2>{props.cat}</h2>
                {valueGems}
                <img src={props.image} alt={props.name}/>
            </div>
        </Link>
    )
};

export default Box