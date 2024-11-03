import { FaArrowUp } from 'react-icons/fa'; 
import './footer.css'
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
