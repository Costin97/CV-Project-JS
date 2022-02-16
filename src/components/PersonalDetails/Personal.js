import { Fragment } from 'react';
import classes from './Personal.module.css'

import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import EventIcon from '@material-ui/icons/Event';
import FlagIcon from '@material-ui/icons/Flag';

const Personal = () => {
    return (
        <Fragment>
            <section className={classes.section}>
                <div className={classes.box}>
                    <p>Name:Roscan Costin-Stefan</p>
                    <p>Date of birth:27 December 2001</p>
                    <EventIcon fontSize='small' className={classes.birth} />
                    <p className={classes.bold}>CNP:5011227420017</p>
                    <p className={classes.text}>Gender:Male</p>
                    <FaceIcon fontSize='small' className={classes.male} />
                    <p className={classes.nat}>Nationality:Romania</p>
                    <FlagIcon fontSize='small' className={classes.flag} />
                    <p className={classes.tab}>Adress: Strada Mioritei,nr198B,Comuna Berceni,Judetul Ilfov</p>
                    <HomeIcon fontSize='small' className={classes.adress} />
                    <p className={classes.para}>Phone Number: 0728252274</p>
                    <PhoneIcon fontSize='small' className={classes.phone} />
                    <p className={classes.para}>Email: roscan.costin @yahoo.com</p>
                    <EmailIcon fontSize='small' className={classes.email} />
                </div>
            </section>
        </Fragment>)
}

export default Personal;