import classes from './Information.module.css'
import { Fragment } from 'react'

const Information = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.infBox}>I am a student, in the 2nd year, at the Polytechnic University of Bucharest, Faculty of Automatics and Computers,
                    having an average college admission of 9.76, as a result of the results obtained from the National Baccalaureate Exam and the averages during the 4 years of high school.<br />I want to evolve, and to succeed in developing more and more skills in the field Web-Development, and not only.</div>
                <div className={classes.textBox}>
                    <div className={classes.typewriter}>
                        <h1>Won't stop until I'm proud...</h1>
                    </div>
                </div>
            </div>

        </Fragment >)
}

export default Information;