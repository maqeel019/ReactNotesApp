import logo from "../images/airbnb.png"
import imageGrid from "../images/image1.jpg"
import Cards from "./Cards"

function Airbnb() {
  return (
    <div>
        <nav>
            <img src={logo} className="navLogo" alt="FeatureImage"></img>
            <h2>Airbnb</h2>
        </nav>
        <hero>
            <section>
                <img src={imageGrid}alt="GridImages" className="image" />
                <h1 className="heroH2">Online Experience</h1>
                <p className="HeroP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi vero incidunt dignissimos, enim magni?</p>
            </section>
        </hero>

        <Cards />
    </div>
  )
}
export default Airbnb