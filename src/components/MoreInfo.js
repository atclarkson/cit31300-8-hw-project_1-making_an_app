import React, {useState, useEffect} from "react";
import data from "../Data";
import {Link} from 'react-router-dom';

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

    return (
        <div>
            <Link to={"/"}>Home</Link>
            {funko.name}
            {funko.category}
            {funko.value}
            <img src={funko.img} alt={funko.name}/>

        </div>
    )
};

export default MoreInfo