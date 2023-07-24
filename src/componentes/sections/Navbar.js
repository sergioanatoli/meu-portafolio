import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Presentation</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Skills</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projects</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/'><FaGithub size={30}/></a></li>
                <li><a href='https://mx.linkedin.com/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar