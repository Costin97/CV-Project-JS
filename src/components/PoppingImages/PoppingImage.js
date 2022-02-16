import classes from './Primary.module.css'
import { Fragment } from 'react';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const PoppingImage = (props) => {

    return (
        <Fragment>
            <Backdrop onConfirm={props.onConfirm}></Backdrop>
            <div className={classes.background}>
                <div className={classes.container}>
                    <img src={props.img} alt={props.alt} className={classes.img}></img>
                </div>
            </div >
        </Fragment >
    )
}

export default PoppingImage;