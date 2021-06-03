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
                description={"Roller Coaster Database that allows users to look up information on specific roller coasters and track roller coasters they have ridden. Users are able to upload new rollercoasters."}
                tech={"React, Python, Flask, PostgreSQL, SQLAlchemy, Alembic, & Cloudinary"}
                live={"https://rollercoastertracker.herokuapp.com/"}
                front={"https://github.com/noahlinn/rollercoasterfront"}
                backend={true}
                back={"https://github.com/noahlinn/rollercoasterback"}
                />
                <EachProject name={"sampleLandia"} src={samplelandia} 
                description={"Audio sample storage and download application, utilizing an external and internal api. Users are able to upload their own audio samples."}
                tech={"React, Node, Express, PostgreSQL, & Sequelize"}
                live={"https://samplelandia.herokuapp.com/"}
                front={"https://github.com/noahlinn/samplelandiafrontdeploy"}
                backend={true}
                back={"https://github.com/noahlinn/samplelandiaBACK"}
                />
                
                <EachProject name={"RecipesNOW"} src={recipesnow}
                description={"RecipesNOW is an application to provide recipes to users while also considering users dietary restrictions. Users will be able to provide their dietary restrictions on sign up, so while using the application, all their search results will be tailored to their diet. This application uses the spoonacular API."}
                tech={"Vanilla JavaScript, Node, Express, PostgreSQL, & Sequelize"}
                live={"https://recipesnow.herokuapp.com/"}
                front={"https://github.com/noahlinn/recipesNowFrontEnd"}
                backend={true}
                back={"https://github.com/noahlinn/recipesNowBackEnd"}
                />
                <EachProject name={"Recreate The Beat"} src={recreate2} 
                description={"Drum sequencer game built using Vanilla JavaScript. Users listen to a drum beat, then have to recreate it on the sequencer. Users are able to hear back the sequencer before submitting."}
                tech={"Vanilla JavaScript"}
                live={"https://noahlinn.github.io/RecreateTheBeat/"}
                front={"https://github.com/noahlinn/RecreateTheBeat"}
                backend={false}
                />
                
            </div>
        </div>
    )
}

export default Projects