
import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <Header>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/AboutPage">AboutPage</Link>
                <Link to="/Courses">Courses</Link>
                <Link to="/ContactUs">ContactUs</Link>
            </nav>
        </Header>
    )
}
export default Header