import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            {!sessionUser && (
                <>
                    <div className="sign-in-container">
                        <Link to="/login" className="sign-in-button">
                            Sign In
                        </Link>
                    </div>
                    <div className="new-customer-container">
                        <span>New customer?</span>
                        <Link to="/signup" className="register-link">Start Here.</Link>
                    </div>
                </>
            )}
            <footer className="footer">
                <div className="footer-left">
                    <h2>Get to know us</h2>
                </div>
                <div className="footer-bottom">
                    <Link to="https://github.com/aciffone23/Amazon-Clone/wiki">
                        <i className="fab fa-github-square"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/angelo-ciffone-8a8645248/">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;
