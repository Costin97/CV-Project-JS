import React, { Fragment } from "react";
import image from "./index.jpg";
import classes from "./Image.module.css";
import Personal from "../components/PersonalDetails/Personal";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Information from "../components/PersonalDetails/Information";

const Image = () => {
    const [isPersonal, setIsPersonal] = useState(false);
    const [isDescription, setIsDescription] = useState(false);

    const personalHandler = () => {
        setIsPersonal(true);
    }

    const hidePersonalInfo = () => {
        setIsPersonal(false)
    }

    const hideDescription = () => {
        setIsDescription(false);
    }

    const descriptionHandler = () => {
        setIsDescription(true);
    }

    const divClasses = isPersonal || isDescription ? classes.container : classes.box;

    const backgroundClasses = !isPersonal ? classes.fundalFixed : classes.fundal
    // const backClasses = isPersonal ? classes.fundal : "";

    return (
        <Fragment>
            <div className={backgroundClasses}>
                <div className={divClasses}>
                    <div className={classes.block}>
                        <img src={image} alt="imagine" className={classes.img}></img>
                    </div>
                    <div>
                        {!isPersonal && !isDescription && <div>
                            <div className={classes.button2Box}><Button onClick={personalHandler} size='medium' variant='contained' className={classes.button2}>Personal <br /> Data</Button></div>
                            <div className={classes.button3Box}>
                                <Button size='medium' variant='contained' className={classes.button3} onClick={descriptionHandler}>Brief <br /> Description</Button>
                            </div>
                        </div>}
                        {isPersonal && !isDescription && <div><Button size='medium' variant='contained' onClick={hidePersonalInfo} className={classes.button1}>Hide <br />Personal Data</Button><Personal /></div>}
                        {!isPersonal && isDescription && <div><Button size='medium' variant='contained' onClick={hideDescription} className={classes.button4}>Hide Brief Description </Button><Information /></div>}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Image;