import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

function Cards({img, title, tech, description, repo, site}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOf(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOf} className={styles.cards}>
            <a onMouseEnter={InfoOn} href={site}>
            <img src={img} alt='ERROR'/>
            </a>

            {info === true &&(
                <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Go to repository' link={repo}/>
            </section>
            )}
        </div>
    )
}

export default Cards