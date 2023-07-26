import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useState, useEffect } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Sergio Anatoli!', 'Front End Developer', 'Full Stack Developer'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Welcome to my portfolio</strong></h4>
            <h1>Hi, I'm {text}</h1>
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