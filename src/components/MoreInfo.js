import React, {useState, useEffect} from "react";
import data from "../Data";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/pro-duotone-svg-icons";


const MoreInfo = ({match}) => {
    useEffect(() => {
        getDetails();
    });

    const [funko, setFunko] = useState([]);

    const getDetails = () => {
        const info = data.filter(el => el.name === match.params.name);
        const funkyButt = info[0];
        setFunko(funkyButt);
    };

    const style = {
        color: "#1cbcff",
        padding:"5px"
    };

    const valueGems = [];
    for (let i = 0; i < funko.value; i++) {
        valueGems.push(<FontAwesomeIcon key={i} style={style} icon={faGem} size="4x"/>);
    }

    return (
        <div className="more-info">
            <Link to={"/"}><button>Home</button></Link>
            <div className="info-img"><img src={funko.img} alt={funko.name}/></div>
<h1>{funko.name}</h1>

            <h2>{funko.category}</h2>
            <div className="gems">{valueGems}</div>



        </div>
    )
};

export default MoreInfo