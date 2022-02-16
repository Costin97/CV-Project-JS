import classes from './Error.module.css'

const Error = (props) => {
    return (<div>
        <p className={classes.message}>{props.message}</p>
        <p className={classes.message}>Please try again!</p>
    </div >
    )
}

export default Error;