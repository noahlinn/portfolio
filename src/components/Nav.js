import { Link } from 'react-router-dom'
const Nav = () => {

    return (
        <nav className="nav-bar">
            <span className="nav-name">
                <h3>Noah Linn</h3>
            </span>
            <span className="nav-links">
                <Link><h4>About</h4></Link>
                <Link><h4>Tools</h4></Link>
                <Link><h4>Projects</h4></Link>
            </span>
        </nav>

    )
}

export default Nav