import js from '../assets/js.png'
import express from '../assets/express.png'
import node from '../assets/node.png'

const Tech = () => {
    return (
        <div>
            <h2>Tools and Techologies</h2>
            <div className="tech-container">
                <div className="tech">
                    <img src={js} />
                    <p>JavaScript</p>
                </div>
                <div className="tech">
                    <img src={express} />
                    <p>Express.js</p>
                </div>
                <div className="tech">
                    <img src={js} />
                </div>
                <div className="tech">
                    <img src={js} />
                </div>
            </div>
        </div>
    )
}

export default Tech