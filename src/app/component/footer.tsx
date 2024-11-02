import './footer.css';
import { FaArrowUp } from 'react-icons/fa'; 

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 Your Website. All rights reserved.</p>
            <a href="#home" className="back-to-top">
                <FaArrowUp />
            </a>
        </footer>
    );
}

export default Footer;
