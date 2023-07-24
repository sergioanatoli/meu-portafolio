import styles from './Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import css from '../../images/skills/css.svg'
import html from '../../images/skills/html.svg'
import react from '../../images/skills/react.svg'

function Skills() {
    return(
        <div className={styles.skills} id="Skills">
            <h1> Skills </h1>
            <p> Get to know a bit about my main skills and knowledge. </p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills