import react from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return(
        <div className="notFound-container">
        <h1 className="notFound-tittle">404</h1>
        <p className="notFound-message">Oops!The page you're looking for dosen't exist.</p>
        <Link to="/"className="home-link">Go back to Home</Link>
        </div>
    );
};
export default NotFound;