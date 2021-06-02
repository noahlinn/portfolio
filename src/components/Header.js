import gmail from '../assets/gmail.png'
import git from '../assets/git.png'
import resume from '../assets/resume.png'
const Header = () => {
    return (
        <div className="opactity">
            <div className="div-header">
                <div className="info-container">
                    <div className="header-info">
                        <h1 className="name">Noah Linn</h1>
                        <h2 className="title">Software Engineer</h2>
                    </div>
                    <span className="icons">
                        <img className="contact" id="git-icon" src={git} />
                        <img className="contact" id="gmail-icon" src={gmail} />
                        <img className="contact" id="resume-icon" src={resume} />
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Header