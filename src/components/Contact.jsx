import separator from '../assets/Separator BLock.png'
function Contact() {

    return (
        <section className='contact-radial-cover-bg' id='contact'>
            <section className="contact-section">
                <h2>Contact</h2>
                <p id='about-paragraph'>Nulla in velit a metus rhoncus tempus. 
                Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. 
                In vel urna quis libero viverra facilisis ut ac est.</p>
                <div id='separator'>
                    <img src={separator} alt="separator"  />
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='ENTER YOUR NAME*' required />
                    <input type="email" name='email' placeholder='ENTER YOUR EMAIL*' required />
                    <input type="tel" name='phone-number' placeholder='ENTER YOUR PHONE' />
                    <textarea name="messege" id="" placeholder='YOUR MESSEGE*' required ></textarea>
                <button>SUBMIT</button>
                </form>
            </section>
        </section>
    )   
}

export default Contact