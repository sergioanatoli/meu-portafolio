import ButtonB from "../elements/ButtonB"
import styles from './Projects.module.css'
import Cards from '../elements/Cards'
import portfolio1 from '../../images/projects/portfolio1.svg'

function Projects() {
    return(
        <div className={styles.projects} id="Projects">
            <h1> Projects </h1>
            <Cards 
            img={portfolio1}
            title='LP - DNC'
            tech=' HTML JAVASCRIPT & CSS'
            description='Landing Page'
            repo='https://github.com/'
            site=''  />
            <Cards
            img={portfolio1}
            title='LP - DNC'
            tech=' HTML JAVASCRIPT & CSS'
            description='Landing Page'
            repo='https://github.com/'
            site=''/>
            <Cards
            img={portfolio1}
            title='LP - DNC'
            tech=' HTML JAVASCRIPT & CSS'
            description='Landing Page'
            repo='https://github.com/'
            site=''/>
            
            
        </div>
    )
}

export default Projects