import React from "react";
import { Fragment } from "react";

import classes from './CssImports/Wishes.module.css'

import { Link } from "react-router-dom";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';

const Wishes = () => {
    return <Fragment>
        <section className={classes.background}>
            <header className={classes.header}>
                <div className={classes.logo}><center />
                    Aspirations</div>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <div className={classes.boxBack}>
                                <Link to='/achievements' >
                                    <ArrowBackIosIcon style={{ color: 'black' }} fontSize='large' color='primary' className={classes.arrowBack}></ArrowBackIosIcon>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={classes.boxTo}>
                                <Link to='/aptitudini'>
                                    < ArrowForwardIosIcon style={{ color: 'black' }} variant='contained' fontSize='large' className={classes.arrowTo}></ArrowForwardIosIcon>
                                </Link>
                                <Link to='/home'>
                                    <Button variant='contained' size='medium' className={classes.homeButton}> HOME</Button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={classes.container}>
                <section className={classes.wishBox}>
                    <h2>Wishes</h2>
                    <p>For the near future, I wish to have the opportunity to work in a team of people from whom I can learn many things both educationally and socially. Moreover, I hope to be able to improve my skills in the field of Web Development.<br />Last but not least, I aspire to graduate from the Faculty of Automation and Computers in Bucharest, as I consider it a prestigious faculty and from which you can really leave with valuable information in the IT field and beyond.</p>
                </section>
                <div className={classes.typeBox}>
                    <div className={classes.typewriter}>
                        <h1>FIGHT FOR YOUR DREAMS!!!</h1>
                    </div>
                </div>
            </div>
        </section>
    </Fragment >
}

export default Wishes;