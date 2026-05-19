import logo from '../assets/logo 1.png'


function Header() {

    function toggleMenue(){
        if(document.querySelector(".dropdown-content").style.display === "none"){
        document.querySelector(".dropdown-content").style.display = "block"
        document.querySelector(".bar1").style.transform = "translate(0px, 4px) rotate(45deg)";
        document.querySelector(".bar2").style.display = "none";
        document.querySelector(".bar3").style.transform = "translate(0px, -4px) rotate(-45deg)";
    }else{
        document.querySelector(".dropdown-content").style.display = "none"
        document.querySelector(".bar1").style.transform = " rotate(-0.1deg)";
        document.querySelector(".bar2").style.display = "block";
        document.querySelector(".bar3").style.transform = " rotate(0.1deg)";
    }
    }
    function scrollToSection(id){
        const section = document.getElementById(id)
        section.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <header>
                <img src={logo} alt='logo' />
                <nav>
                    <ul>
                        <li onClick={() => scrollToSection('about')}>About me</li>
                        <li onClick={() => scrollToSection('skills')}>Skills</li>
                        <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                        <li onClick={() => scrollToSection('contact')}>CONTACT ME</li>
                    </ul>
                </nav> 
                <div className="menubar" onClick={toggleMenue} >
                    <div className="bars">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className="dropdown-content">
                        <ul>
                            <li onClick={() => scrollToSection('about')}>About me</li>
                            <li onClick={() => scrollToSection('skills')}>Skills</li>
                            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                            <li onClick={() => scrollToSection('contact')}>CONTACT ME</li>
                        </ul>
                    </div>
                </div>
            
            </header>
        </>
    )
}

export default Header
