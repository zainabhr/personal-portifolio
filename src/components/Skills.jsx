import HTMLIcon from '../assets/HTML icon.png'
import CSS3Icon from '../assets/CSS3 icon.png'
import SASSIcon from '../assets/SASS icon.png'
import JSIcon from '../assets/JS icon.png'
import ReactIcon from '../assets/React icon.png'
import BootstrapIcon from '../assets/bootstrap.png'
import gitIcon from '../assets/git.png'
import FigmaIcon from '../assets/figma.png'
import NodeJsIcon from '../assets/NODEJS icon.png'
import MySqlIcon from '../assets/MySQL icon.png'
import MongoDBIcon from '../assets/MongoDB (2).png'
import TypeScriptIcon from '../assets/TypeScript icon.png'
import EnLangIcon from '../assets/English Lang icon.png'
import SpLangIcon from '../assets/Spanish Lang icon.png'
import CplusPlusIcon from '../assets/C++ icon.png'
import CIcon from '../assets/C icon.png'


function Skills() {

    return (
        <section className='radial-cover-bg' id='skills'>
            <section className="skills-section">
                <h2>SKILLS</h2>
                <h3>USING NOW:</h3>
                <div className="contianer">
                    <div className='skill'>
                        <img src={HTMLIcon} alt="HTML Icon" />
                        <p>HTML</p>
                    </div>
                    <div className='skill'>
                        <img src={CSS3Icon} alt="CSS3 Icon" />
                        <p>CSS3</p>
                    </div>
                    <div className='skill'>
                        <img src={SASSIcon} alt="SASS Icon" />
                        <p>SASS</p>
                    </div>
                    <div className='skill'>
                        <img src={JSIcon} alt="JS Icon" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='skill'>
                        <img src={ReactIcon} alt="React Icon" />
                        <p>REACT</p>
                    </div>
                    <div className='skill'>
                        <img src={BootstrapIcon} alt="Bootstrap Icon" />
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className='skill'>
                        <img src={gitIcon} alt="git Icon" />
                        <p>GIT</p>
                    </div>
                    <div className='skill'>
                        <img src={FigmaIcon} alt="Figma Icon" />
                        <p>FIGMA</p>
                    </div>
                </div>
                <h3>LEARNING:</h3>
                <div className="contianer">
                    <div className='skill'>
                        <img src={NodeJsIcon} alt="NodeJs Icon" />
                        <p>NODEJS</p>
                    </div>
                    <div className='skill'>
                        <img src={MySqlIcon} alt="MySql Icon" />
                        <p>MySQL</p>
                    </div>
                    <div className='skill'>
                        <img src={MongoDBIcon} alt="MongoDB Icon" />
                        <p>MONGODB</p>
                    </div>
                    <div className='skill'>
                        <img src={TypeScriptIcon} alt="TypeScript Icon" />
                        <p>TYPESCRIPT</p>
                    </div>
                </div>
                <h3>OTHER SKILLS:</h3>
                <div className="contianer">
                    <div className='skill'>
                        <img src={EnLangIcon} alt="En Lang Icon" />
                        <p>English C1/C2</p>
                    </div>
                    <div className='skill'>
                        <img src={SpLangIcon} alt="Sp Lang Icon" />
                        <p>Spanish B1/B2</p>
                    </div>
                    <div className='skill'>
                        <img src={CplusPlusIcon} alt="CplusPlus Icon" />
                        <p>C++</p>
                    </div>
                    <div className='skill'>
                        <img src={CIcon} alt="C Icon" />
                        <p>C</p>
                    </div>
                </div>
            </section>
        </section>
)
}

export default Skills