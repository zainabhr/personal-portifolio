import project1 from '../assets/project 1.jpg'
import project2 from '../assets/project 2.jpg'
import project3 from '../assets/project 3.jpg'
function Portfolio() {

    return (
        <section className="portfolio-section" id='portfolio'>
            <h2>PORTFOLIO</h2>
            <div className="projects-box">
                <div className="filter-bar">
                    <span className='active'>All</span>
                    <span>CODED</span>
                    <span>Designed</span>
                </div>
                <div className="projects">
                    <img src={project3} alt='project 3' />
                    <img src={project1} alt='project 1' />
                    <img src={project2} alt='project 2' />
                    <img src={project1} alt='project 1' />
                    <img src={project2} alt='project 2' />
                    <img src={project3} alt='project 3' />
                </div>
                <p>And many more to come</p>
            </div>
        </section>
    )
}

export default Portfolio
