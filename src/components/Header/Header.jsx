import React from "react"
import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/AboutPage">AboutPage</Link>
                <Link to="/Courses">Courses</Link>
                <Link to="/ContactUs">ContactUs</Link>
            </nav>
        </header>
    )
}
export default Header