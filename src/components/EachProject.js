const EachProject = (props) => {
    return (
        <div className="each-project">

            <h3 className="each-header">{props.name}</h3>
            <img className="each-img" src={props.src} />
            <hr />
            <p>{props.description}</p>
            <hr />
            <p className="tech-used">{`Built Using: ${props.tech}`}</p>
            <hr />
            <span className="links">
                <a target="_blank" href={props.live} title="Live Link">Live</a>
                <a target="_blank" href={props.front} title="Frontend Repo">Frontend Repo</a>
                {props.backend && <a target="_blank" href={props.back} title="Backend Repo">Backend Repo</a>}
                
            </span>

        </div>
    )
}

export default EachProject