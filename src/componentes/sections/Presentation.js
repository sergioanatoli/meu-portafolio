import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation() {
    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Welcome to my portfolio</strong></h4>
            <h1>Hi, I'm Sergio Anatoli</h1>
            <p>I'm a passionate and versatile full stack developer. <br/>
                With a deep-rooted passion for all things tech and a knack for problem-solving, <br/>
                I thrive on transforming ideas into reality through elegant and efficient code. <br/>
                From front-end magic to back-end wizardry, I've got the skills to build robust and user-friendly web applications that leave a lasting impression.
                </p>
            <ButtonA link='https://mx.linkedin.com/' text='Contact me!'/>
            
        </div>
    )
}

export default Presentation