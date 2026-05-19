import doubleArrow from '../assets/double-arrow.png'
import linkedInIcon from '../assets/linkenIn icon(footer).png'
import instaIcon from '../assets/insta icon.png'
import facebookIcon from '../assets/Facebook icon.png'
import emailIcon from '../assets/email icon.png'


function Footer() {

    function scrollToTop(){
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }
    return (
        <section className="footer-section">
            <div className='back-to-top-arrow' onClick={scrollToTop}>
                <img src={doubleArrow} alt="doubleArrow" />
                <p>Back to Top</p>
            </div>
            <div className='socail-icons'>
                <img src={facebookIcon} alt="facebook Icon" className='socail-icon' />
                <img src={linkedInIcon} alt="linkedIn Icon" className='socail-icon' />
                <img src={instaIcon} alt="instaIcon" className='socail-icon' />
                <img src={emailIcon} alt="emailIcon" className='socail-icon' />
            </div>
            <p>@2020 Tomasz Gajda All Rights Reserved.</p>
        </section >
    )
}

export default Footer