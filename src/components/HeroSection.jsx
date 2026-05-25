import separator from '../assets/separatorWhite 2.png'
import atSign from '../assets/At sing.png'
import githubLogo from '../assets/github logo.png'
import linkedInLogo from '../assets/linkedIn logo.png'
import heroImage from '../assets/hero image.png'
import { useState, useRef, useEffect } from 'react'


function Hero() {
    
        const [isIntersect, setIsintersect] = useState(false)
        const ref = useRef(null)
        useEffect(() =>{
            const observer = new IntersectionObserver(
                ([entry]) =>{
                    setIsintersect(entry.isIntersecting)
                },{
                    rootMargin: '-100px',
                    threshold: 0.1
                }
            );
            console.log(isIntersect);
            observer.observe(ref.current)
            return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    
        useEffect(() => {
            if(isIntersect){
                ref.current.classList.add('slide-in')
            }
    }, [isIntersect])
    return (
        <>
            <section className="hero-section">
                <div className="hero-desktop-box">
                    <div className="left-side">
                        <div>
                            <h3>Hi, I am</h3>
                            <h1>Tomasz Gajda</h1>
                            <p>Front-end Developer / UI Designer</p>
                        </div>
                        <div className="icons">
                            <img src={atSign} alt="atSign" className='icon' />
                            <img src={githubLogo} alt="githubLogo" className='icon' />
                            <img src={linkedInLogo} alt="linkedInLogo" className='icon' />
                        </div>
                    </div>
                    <div className="right-side">
                        <img src={heroImage} alt="hero Image" id='hero-Image' />
                    </div>
                </div>
                <div className="hero-mobile-box">
                    <p>My Name is THomas</p>
                    <h1>I'M A DEVELOPER</h1>
                    <img src={separator} alt="separator" />
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </section>
            <section ref={ref} className='IT-barries'>
                <h3>IT BERRIES</h3>
                <p>I am one of the members of a scientific club that brings together enthusiasts of the Internet and new technologies. 
                    At ITberries, we design and develop websites and web applications. 
                    Apart from the projects, our biggest undertaking is the Ciemna Strona UX conference, 
                    which we are organizing for the sixth time. Working in a club as a Front-End Developer definitely 
                    developed my skills in group work and working under time pressure. If you want to know more about us, 
                    click the button below! </p>
                    <button>Read More</button>
            </section>
        </>
    )
}

export default Hero
