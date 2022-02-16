import classes from './WebDev.module.css'

const WebDev = (props) => {
    return (
        <section className={props.style}>
            <div className={classes.box}>
                <h1 className={classes.header}>WEB-DEV PROGRESS</h1>
                <p>HTML</p>
                <div className={classes.container}>
                    <div className={classes.html}>70%</div>
                </div>
                <p>CSS</p>
                <div className={classes.container}>
                    <div className={classes.css}>40%</div>
                </div>
                <p>JAVASCRIPT</p>
                <div className={classes.container}>
                    <div className={classes.java}>65%</div>
                </div>
                <p>REACT</p>
                <div className={classes.container}>
                    <div className={classes.react}>75%</div>
                </div>
            </div>
        </section>
    )
}

export default WebDev;