import gmail from '../assets/gmail.png'
import git from '../assets/git.png'
import resume from '../assets/resume.png'
import NLinn_Resume from '../assets/NLinn_Resume.pdf'
import linkedin from '../assets/linkedin.png'


const Header = () => {
    return (
        
        <div className="div-header">
            <div className="info-container">
                <div className="header-info">
                    <h1 className="name">Noah Linn</h1>
                    <h2 className="title">Software Engineer</h2>
                </div>
                <span className="icons">
                    <a target="_blank" href="https://github.com/noahlinn" title="GitHub">
                        <img className="contact" src={git} />
                    </a>
                    <a target="_blank" href="mailto:n.linn95@gmail.com?subject=" title="Email">
                        <img className="contact" src={gmail} />
                    </a>
                    <a target="_blank" href={NLinn_Resume} title="Resume">
                        <img className="contact" id="resume-icon" src={resume} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/noah-linn/" title="Linkedin">
                        <img className="contact" src={linkedin} />
                    </a>
                </span>
            </div>
        </div>

    )
}


export default Header