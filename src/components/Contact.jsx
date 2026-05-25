import separator from '../assets/Separator BLock.png'
import { useEffect } from 'react'
import { addAnimation } from '../Animations'

function Contact() {

    useEffect(() =>{
        addAnimation('contact-h2', 'slide-in')
    }, [])

    useEffect(() =>{
        addAnimation('contact-p', 'slide-in')
    }, [])

    useEffect(() =>{
        addAnimation('separator3', 'expand')
    }, [])

    useEffect(() =>{
        addAnimation('input-1', 'expand')
        addAnimation('input-2', 'expand')
        addAnimation('input-3', 'expand')
        addAnimation('input-4', 'expand')
        addAnimation('button', 'expand')
    }, [])

    return (
        <section className='contact-radial-cover-bg' id='contact'>
            <section className="contact-section">
                <div className='contact-h2'><h2>Contact</h2></div>
                <div className='contact-p'>
                    <p id='about-paragraph'>Nulla in velit a metus rhoncus tempus. 
                Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. 
                In vel urna quis libero viverra facilisis ut ac est.</p>
                </div>
                <div id='separator' className='separator3'>
                    <img src={separator} alt="separator"  />
                </div>
                <form action="">
                    <input className='input-1' type="text" name='name' placeholder='ENTER YOUR NAME*' required />
                    <input className='input-2' type="email" name='email' placeholder='ENTER YOUR EMAIL*' required />
                    <input className='input-3' type="tel" name='phone-number' placeholder='ENTER YOUR PHONE' />
                    <textarea className='input-4' name="messege" id="" placeholder='YOUR MESSEGE*' required ></textarea>
                    <button className='button'>SUBMIT</button>
                </form>
            </section>
        </section>
    )   
}

export default Contact