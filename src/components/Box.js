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

    let catStyle = {backgroundColor: "white"};

    switch (props.cat) {
        case "animation":
            catStyle = {backgroundColor: "#313896", color: "white"};
            break;
        case "games":
            catStyle = {backgroundColor: "#00d7ff"};
            break;
        case "television":
            catStyle = {backgroundColor: "#9f32b2", color: "white"};
            break;
        default:
            break;
    }

    return (
        <Link to={`/${props.name}`} className='BoxLink'>
            <div className='Box'>
                <h2 style={catStyle}>{props.cat}</h2>
                <div className="image-box">
                <img src={props.image} alt={props.name}/>
                </div>
                <h1>{props.name}</h1>

                {valueGems}

            </div>
        </Link>
    )
};

export default Box