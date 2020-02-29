import React, {useState, useEffect} from "react";
import data from "../Data";
import Box from "./Box";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTvRetro, faRabbitFast, faGamepadAlt, faCheckDouble} from '@fortawesome/pro-duotone-svg-icons'

const Wrapper = () => {

    let [ani, setAni] = useState(true);
    let [game, setGame] = useState(true);
    let [tv, setTv] = useState(true);
    let [all, setAll] = useState(true);

    useEffect(() => {
        if (all) {
            setAni(true);
            setGame(true);
            setTv(true);
        }
    }, [all]);


    const styleOn = {
        backgroundColor: "blue",
        color: "white"
    };

    const styleOff = {
        backgroundColor: "white"
    };

    useEffect(() => {
        if (!ani || !game || !tv) {
            setAll(false);
        }
        if (ani && game && tv) {
            setAll(true);
        }
    }, [ani, game, tv]);


    let boxes = data.map(el => {
            switch (el.category) {
                case "animation":
                    if (ani) {
                        return (
                            <Box
                                key={el.name}
                                name={el.name}
                                image={el.img}
                                cat={el.category}
                                val={el.value}/>
                        );
                    }
                    return null;
                case "games":
                    if (game) {
                        return (
                            <Box
                                key={el.name}
                                name={el.name}
                                image={el.img}
                                cat={el.category}
                                val={el.value}/>
                        );
                    }
                    return null;
                case "television":
                    if (tv) {
                        return (
                            <Box
                                key={el.name}
                                name={el.name}
                                image={el.img}
                                cat={el.category}
                                val={el.value}/>
                        );
                    }
                    return null;
                default:
                    return null;
            }
        }
    );


    return (
        <div className='Wrapper'>
            <nav>
                <ul>
                    <li style={ani ? styleOn : styleOff} onClick={() => setAni(!ani)}><FontAwesomeIcon
                        icon={faRabbitFast}/> Animation
                    </li>
                    <li style={game ? styleOn : styleOff} onClick={() => setGame(!game)}><FontAwesomeIcon
                        icon={faGamepadAlt}/> Games
                    </li>
                    <li style={tv ? styleOn : styleOff} onClick={() => setTv(!tv)}><FontAwesomeIcon
                        icon={faTvRetro}/> TV
                    </li>
                    <li style={all ? styleOn : styleOff} onClick={() => setAll(!all)}><FontAwesomeIcon
                        icon={faCheckDouble}/> All
                    </li>
                </ul>
            </nav>
            <div className="boxes">{boxes}</div>

        </div>
    )
};

export default Wrapper