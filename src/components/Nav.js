import { Link } from 'react-router-dom'
const Nav = () => {

    return (
        <nav className="nav-bar">
            <span className="nav-name">
                Noah Linn
            </span>
            <span className="nav-links">
                <Link>About</Link>
                <Link>Projects</Link>
                <Link>Tools</Link>
            </span>
        </nav>

    )
}

export default Nav