import EachProject from './EachProject'

import coastertrack from '../assets/coastertrack.png'
import samplelandia from '../assets/samplelandia.png'
import recipesnow from '../assets/recipesnow.png'
import recreate2 from '../assets/recreate2.png'
const Projects = () => {
    return (
        <div className="project-container">
            <h1>Projects</h1>
            <div className="all-proj">
                <EachProject name={"Roller Coaster Tracker"} src={coastertrack} 
                description={"Roller Coaster Database that allows users to look up information on specific roller coasters and track roller coasters they have ridden"}
                tech={"React, Python, Flask, PostgreSQL, SQLAlchemy, Alembic, & Cloudinary"}
                live={"https://rollercoastertracker.herokuapp.com/"}
                front={"https://github.com/noahlinn/rollercoasterfront"}
                back={"https://github.com/noahlinn/rollercoasterback"}
                />
                <EachProject name={"sampleLandia"} src={samplelandia} 
                description={"Audio sample storage and download application, utilizing an external and internal api"}
                tech={"React, Node, Express, PostgreSQL, & Sequelize"}
                live={"https://samplelandia.herokuapp.com/"}
                front={"https://github.com/noahlinn/samplelandiafrontdeploy"}
                back={"https://github.com/noahlinn/samplelandiaBACK"}
                />
                
                <EachProject name={"RecipesNOW"} src={recipesnow} />
                <EachProject name={"Recreate The Beat"} src={recreate2} />
                
            </div>
        </div>
    )
}

export default Projects