import cover from "../assets/cover-photo.png"

export default function Header(){
    return(
        <header className="header--container">
            <img className="card--cover" src={cover} />
            <h1 className="header--heading">Diego Rene</h1>
            <h3 className="header--work">Digital Designer</h3>
            <h4 className="header--site">diegostdesign.site</h4>
            <div className="header--buttons">
                <button className="header--button mail--button">
                    <span><i class="fa-solid fa-envelope header--button_image"></i>Email</span>
                </button>
                <a href="https://www.linkedin.com/in/diegostdesign/" target="_blank">
                    <button className="header--button linkedin--button">
                        <span><i class="fa-brands fa-linkedin header--button_image"></i>LinkedIn</span>
                    </button>
                </a>
            </div>
        </header>
    )
}