import separator from '../assets/Separator BLock.png'
import designIcon from '../assets/Design icon.png'
import developIcon from '../assets/Developing icon.png'
import maitanaceIcon from '../assets/Maintanance icon.png'

function AboutMe() {

    return (
        <section className='about-section' id='about'>
            <h2>About Me</h2>
            <p id='about-paragraph'>My name is Tomasz Gajda, I'm a third year Applied Computer Science student at the AGH University of Science and Technology in Krakow. 
                I have been learning Front-End technologies for a year and this time was just enough for me to make sure that this is my place in the industry.
            </p>
            <button>Explore</button>
            <div id='separator'>
                <img src={separator} alt="separator"  />
            </div>

            <div className='about-icons'>
                <div className='card'>
                    <div className='div-icons'>
                    <img src={designIcon} alt="design Icon" className='icon' />
                        <h3>DESIGN</h3>
                    </div>
                        <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                </div>
                <div className='card'>
                    <div className='div-icons'>
                    <img src={developIcon} alt="develop Icon" className='icon' />
                        <h3>DEVELOPMENT</h3>
                    </div>
                        <p>Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.</p>
                </div>
                <div className='card maintain'>
                    <div className='div-icons'>
                    <img src={maitanaceIcon} alt="maitanace Icon" className='icon' />
                        <h3>MAINTENANCE</h3>
                    </div>
                        <p>In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
                </div>
            </div>
            <div id='separator'>
                <img src={separator} alt="separator"  />
            </div>
        </section>
    )
}

export default AboutMe