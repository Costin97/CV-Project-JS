import {
    Fragment, useState, useEffect
} from "react";

import classes from './CssImports/Skills.module.css';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Card from "../UI/Card";
import Error from "../UI/Error";
import Box from '@material-ui/core/Box';

import WebDev from "../components/WebDev/WebDev";
import Header from '../UI/Header'



const Skills = () => {
    const [skillsContainer, setSkillsContainer] = useState([]);

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');

    const [isMoral, setIsMoral] = useState(false);
    const [isWeb, setIsWeb] = useState(false);

    const [isDescritionBlur, setIsDescriptionBlur] = useState(false);
    const [isSkillBlur, setIsSkillBlur] = useState(false);

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const [again, setAgain] = useState();
    const [key, setKey] = useState();

    const nameValidation = name.trim() !== '';
    const descValidation = desc.trim().length > 15;

    const nameHasError = !nameValidation && isSkillBlur;
    const descHasError = !descValidation && isDescritionBlur;

    const descErrorMessage = descHasError ? <p className={classes.descError}>Please use a description with more than 15 characters.</p> : '';
    const nameErrorMessage = nameHasError ? <p className={classes.nameError}>Please insert your skill name.</p> : '';

    const nameClass = nameHasError ? classes.inputInvalid : classes.input;
    const descClass = descHasError ? classes.textareaInvalid : classes.textarea;

    let formIsValid = !nameHasError && !descHasError;

    const backgroundStyle = !isError ? classes.backgroundValid : classes.backgroundInvalid;

    let buttonBoxStyle = nameHasError && descHasError ? classes.buttonBoxBothInvalid : false;
    if (buttonBoxStyle === false) {
        buttonBoxStyle = nameHasError || descHasError ? classes.buttonBoxInvalid : classes.buttonBoxValid
    }

    let backBoxStyle = nameHasError && descHasError ? classes.backBoxBothInvalid : false;
    if (backBoxStyle === false) {
        backBoxStyle = nameHasError || descHasError ? classes.backBoxInvalid : classes.backBoxValid
    }

    if ((!isSkillBlur || !isDescritionBlur) && (!nameValidation || !descValidation)) {
        formIsValid = false;
    }


    const formHandler = (event) => {
        event.preventDefault();
        const skill = {
            name: name,
            description: desc,
        }

        submitDataHandler(skill).catch((e) => {
            setIsError(true);
            setError('Submit Data went wrong!');
        });

        setName('');
        setDesc('');

        setAgain(1);

        setIsDescriptionBlur(false);
        setIsSkillBlur(false);

    }

    const describeBlurHandler = () => {
        setIsDescriptionBlur(true);
    }

    const skillBlurHandler = () => {
        setIsSkillBlur(true);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    }

    const keyHandler = (key) => {
        setKey(key);
    }

    const showMoralSkillsHandler = () => {
        setIsMoral(true);
    }

    const hideMoralSkillsHandler = () => {
        setIsMoral(false);
    }

    const showWebSkillsHandler = () => {
        setIsWeb(true);
    }

    const hideWebSkillsHandler = () => {
        setIsWeb(false);
    }

    const submitDataHandler = async (skill) => {

        await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/skills.json', {
            method: 'POST',
            body: JSON.stringify({ skill }),
        }
        );

    }

    useEffect(() => {
        const deleteDataHandler = async (key) => {
            await fetch(`https://react-http-d2dc0-default-rtdb.firebaseio.com/skills/${key}.json`, {
                method: 'DELETE',
            }
            );
        }
        deleteDataHandler(key).catch(e => { setIsError(true); setError('Delete went wrong!'); });
    }, [key])

    useEffect(() => {
        const fetchSkills = async () => {

            const response = await fetch('https://react-http-d2dc0-default-rtdb.firebaseio.com/skills.json');

            const responseData = await response.json();

            const skillData = [];
            const dataToFetch = [];
            let contor = 0;


            for (const keys in responseData) {
                if (keys !== key) {
                    skillData.push(responseData[keys]);
                }
                if (keys === key) {
                    break;
                }

                const copyElement = <ListItem key={Math.random()} >
                    <ListItemText primary={skillData[contor].skill.name} secondary={skillData[contor].skill.description} className={classes.listItem} />
                    <Button onClick={() => { keyHandler(keys) }} size="small" variant='contained' color='secondary' className={classes.deleteButton}>Delete</Button>
                </ListItem >

                contor++;

                dataToFetch.push(copyElement);
            }

            setSkillsContainer(dataToFetch);
            if (again !== 0) {
                setAgain(0);
            }

        }
        fetchSkills().catch((e) => {
            setIsError(true);
            setError('Fetch data went wrong!');
        })
    }, [key, again])

    return (
        <Fragment>
            <div className={backgroundStyle}>
                <Header
                    header={classes.header}
                    divHeader={classes.logo}
                    headerText={"COMPETENCE"}
                    nav={classes.nav}
                    div={classes.box}
                    link1={'/dorinte'}
                    link1Element={
                        <ArrowBackIosIcon style={{ color: 'white' }} fontSize='large' color='primary' className={classes.arrowBack}></ArrowBackIosIcon>
                    }
                    link2={'/home'}
                    link2Element={
                        <Button className={classes.linkButton} size='medium' variant='contained'>Go Back To Home Page</Button>
                    } />
                <Card>
                    <form className={classes.form}>
                        <div className={classes.control}>
                            <label htmlFor='name'>NAME YOUR SKILL</label>
                            <input type='text' id='name' className={nameClass} onBlur={skillBlurHandler} onChange={nameChangeHandler} value={name} />
                            {nameErrorMessage}
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='descrive'>DESCRIBE IT</label>
                            <textarea id='descrive' rows='3' onBlur={describeBlurHandler} className={descClass} onChange={descChangeHandler} value={desc} ></textarea>
                            {descErrorMessage}
                        </div>
                        {formIsValid && <Button className={classes.formButton} size='large' variant='contained' type='submit' onClick={formHandler} >ADD</Button>}
                        {!formIsValid && <Button disabled className={classes.formButton} variant='contained' color='secondary'>Add</Button>}
                    </form>
                </Card>
                <div className={buttonBoxStyle}>
                    {!isMoral && !isWeb && !error && <Button variant='contained' color='primary' className={classes.showButton} onClick={showMoralSkillsHandler}>SHOW MORAL SKILLS</Button>}
                    {isMoral && <Button variant='contained' color='primary' className={classes.showButton} onClick={hideMoralSkillsHandler}>HIDE MORAL SKILLS</Button>}
                    {isWeb && <Button disabled variant='contained' color='primary' className={classes.showButton} onClick={showMoralSkillsHandler}>SHOW MORAL SKILLS</Button>}
                    {isMoral && <Button disabled variant='contained' color='primary' className={classes.webButton} onClick={showWebSkillsHandler}>SHOW WEB-DEV SKILLS</Button>}
                    {!isWeb && !isMoral && !error && <Button variant='contained' color='primary' className={classes.webButton} onClick={showWebSkillsHandler}>SHOW WEB-DEV SKILLS</Button>}
                    {isWeb && <Button variant='contained' color='primary' className={classes.webButton} onClick={hideWebSkillsHandler}>HIDE WEB-DEV SKILLS</Button>}
                </div>
                {isWeb && <WebDev style={backBoxStyle} />}
                {isError && <Error message={error} />}
                {!isError && isMoral && <div>
                    <Box className={backBoxStyle}>
                        <List >
                            {skillsContainer}
                        </List>
                    </Box>
                </div>}
            </div>
        </Fragment >
    )
}

export default Skills;