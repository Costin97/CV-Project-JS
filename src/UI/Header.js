import React from "react";

import { Link } from "react-router-dom";


const HeaderTop = (props) => {
    return (
            <header className={props.header}>
                <div className={props.divHeader}>
                    {props.headerText}
                </div>
                <nav className={props.nav}>
                    <ul>
                        <li>
                            <div className={props.div}>
                                <Link to={props.link1}>
                                    {props.link1Element}
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link to={props.link2}>
                                {props.link2Element}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default HeaderTop;