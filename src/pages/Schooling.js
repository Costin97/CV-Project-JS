import React from 'react';
import { Fragment, useState } from "react";
import classes from './CssImports/Schooling.module.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import primary from '../usables/primary.jpg'
import highschool from '../usables/HighSchool.jpg'
import ielts from '../usables/ielts.jpg'
import competente from '../usables/competente.jpg'
import lingv from '../usables/lingv.jpg'
import ecdl from '../usables/ecdl.jpg'
import bac from '../usables/bac.jpg'

import PoppingImage from '../components/PoppingImages/PoppingImage';
import Header from '../UI/Header'



const Achievements = () => {
    const [isPrimary, setIsPrimary] = useState(false);
    const [isHighSchool, setIsHighSchool] = useState(false)
    const [isComp, setIsComp] = useState(false);
    const [isIelts, setIsIelts] = useState(false);
    const [isLing, setIsLing] = useState(false);
    const [isEcdl, setIsEcdl] = useState(false);
    const [isBac, setIsBac] = useState(false);
    const [isBkClass, setIsBkClass] = useState(false);

    const bkClass = isBkClass ? classes.backgroundTrue : classes.backgroundFalse;

    const primaryHandler = () => {
        setIsPrimary(true);
        setIsBkClass(true);
    }

    const primaryToFalse = () => {
        setIsPrimary(false);
        setIsBkClass(false);
    }

    const highSchoolHandler = () => {
        setIsHighSchool(true);
        setIsBkClass(true);

    }

    const highSchoolToFalse = () => {
        setIsBkClass(false);
        setIsHighSchool(false);
    }

    const compHandler = () => {
        setIsComp(true);
        setIsBkClass(true);

    }

    const compToFalse = () => {
        setIsBkClass(false);
        setIsComp(false);

    }

    const ieltsHandler = () => {
        setIsBkClass(true);
        setIsIelts(true);
    }

    const ieltsToFalse = () => {
        setIsBkClass(false);
        setIsIelts(false);
    }

    const lingHandler = () => {
        setIsBkClass(true);
        setIsLing(true);
    }

    const lingToFalse = () => {
        setIsBkClass(false);
        setIsLing(false);
    }

    const ecdlToggle = () => {
        setIsBkClass(true);
        setIsEcdl(true);
    }

    const ecdlToFalse = () => {
        setIsBkClass(false);
        setIsEcdl(false);
    }

    const bacHandler = () => {
        setIsBkClass(true);
        setIsBac(true);
    }

    const bacToFalse = () => {
        setIsBkClass(false);
        setIsBac(false);
    }

    console.log(bkClass);

    return (
        <Fragment>
            <section className={bkClass}>
                <Header
                    header={classes.header}
                    divHeader={classes.logo}
                    nav={classes.nav}
                    div={classes.box}
                    headerText={'Education and Training'}
                    link1={'/home'}
                    link1Element={
                        <ArrowBackIosIcon style={{ color: 'white' }} fontSize='large' color='primary' className={classes.arrowBack}></ArrowBackIosIcon>}
                    link2={'/dorinte'}
                    link2Element={
                        < ArrowForwardIosIcon style={{ color: 'white' }} variant='contained' fontSize='large' className={classes.arrowTo}></ArrowForwardIosIcon>
                    }
                />
                <h1 className={classes.title}>LifeTime accomplishments</h1>
                <List className={classes.root}>
                    <ListItem button onClick={primaryHandler}>
                        <ListItemText primary="Primary School Graduation" secondary="March 27, 2018" />
                    </ListItem>
                    <p className={classes.p}>As a child,borned and raised in Pantelimon,Bucharest,I was enrolled by my parents in general school nr.46.This was actually the first step in my long to be educational life.</p>
                    <ListItem button onClick={highSchoolHandler}>
                        <ListItemText primary="HighSchool Graduation" secondary="July 30, 2020" />
                    </ListItem>
                    <p className={classes.p}>Due to the results from the primary classes, I managed to be admitted to the Spiru-Haret National College Bucharest (CNSHB).There, during the 4-year cycle, I could accumulate valuable information and obtain numerous diplomas as well.</p>
                    <ul>
                        <li className={classes.li}>
                            Certificate of professional competence
                        </li>
                        <StarIcon size='small' className={classes.star1} />
                        <Button className={classes.button1} variant='outlined' size='small' onClick={compHandler}>Cert</Button>
                        <li className={classes.li}>
                            Ecdl Profile Certificate
                        </li>
                        <Button className={classes.button2} size='small' variant='outlined' onClick={ecdlToggle}>ECDL</Button>
                        <StarIcon size='small' className={classes.star3} />
                    </ul>
                    <ul className={classes.ul}>
                        <li className={classes.li}>certificate of  </li>
                        <Button variant='outlined' size='small' onClick={lingHandler}>Linguistic Competence</Button>
                        <li className={classes.li}>and also the </li>
                        <Button variant='outlined' size='small' onClick={ieltsHandler}>IELTS</Button>
                        <li className={classes.li}>certificate</li>
                        <StarIcon size='small' className={classes.star2} />
                    </ul>
                    <ul className={classes.bacLi}>
                        <li className={classes.li}>national baccalaureate exam</li>
                        <StarIcon size='small' className={classes.star4} />
                        <Button className={classes.button3} size='small' variant='outlined' onClick={bacHandler}>Bac</Button>
                    </ul>
                    <ListItem>
                        <ListItemText primary="University Admission " secondary="Sept 10, 2020" />
                    </ListItem>
                    <p className={classes.p}>Due to the grades from the National Baccalaureate Exam and the previous results from the High School, I was admitted to the  Polytechnic University of Bucharest, <a href='https://acs.pub.ro/' target="_blank" rel="noreferrer">Faculty of Automation and Computers</a>, Systems Engineering department.I am currently a 2nd year student.</p>
                    <ListItem>
                        <ListItemText primary="Self-Study" secondary='Since the University Admission' />
                    </ListItem>
                    <p className={classes.p}>Soon after my admission,udemy became my friend.I have done numerous courses in <a href='https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/' target="_blank" rel="noreferrer">JavaScript</a>, <a href='https://www.udemy.com/course/javascript-object-oriented-programming/' target="_blank" rel="noreferrer">OOP for js</a>, <a href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/' target="_blank" rel="noreferrer">React</a> and <a href='https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/' target="_blank" rel="noreferrer">Css</a>.</p>
                </List>
            </section>


            {isPrimary && <PoppingImage onConfirm={primaryToFalse} img={primary} alt='primar' />}
            {isHighSchool && <PoppingImage onConfirm={highSchoolToFalse} img={highschool} alt='liceu' />}
            {isComp && <PoppingImage onConfirm={compToFalse} img={competente} alt='comp' />}
            {isIelts && <PoppingImage onConfirm={ieltsToFalse} img={ielts} alt='ielts' />}
            {isLing && <PoppingImage onConfirm={lingToFalse} img={lingv} alt='lingv' />}
            {isEcdl && <PoppingImage onConfirm={ecdlToFalse} img={ecdl} alt='ecdl' />}
            {isBac && <PoppingImage onConfirm={bacToFalse} img={bac} alt='bac' />}

        </Fragment >

    )
}

export default Achievements;