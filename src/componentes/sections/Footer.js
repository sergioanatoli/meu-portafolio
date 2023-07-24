import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/'><FaGithub size={30}/></a></li>
                <li><a href='https://mx.linkedin.com/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>
                sergioanatoli@gmail.com
            </p>
            <p>Sergio Anatoli © 2023</p>
        </div>
    )
}

export default Footer