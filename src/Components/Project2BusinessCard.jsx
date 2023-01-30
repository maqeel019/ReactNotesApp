import dp from './images/image1.jpg'
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"


function BusinessCard() {
  return (
    <div className='Cardbody'>

    <div >

      <div className="img">
        <img src={dp} alt="Image" />
      </div>

      <div className="title">
        <h2>AQEEL KHAN</h2>
        <h2>ReactJS Developer</h2>
        <p>A Passionate Frontend Developer</p>
      </div>

      <div className="btns">
        <button id='email'>
          <a  id='email'>Email</a>
        </button>
        <button id='linkedin' >
          <a id='linkedin'>LinkedIn</a>
        </button>
      </div>
    </div>

      <div className='main'>
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          quam obcaecati?   <br /> Amet corrupti est officiis incidunt facilis id beatae
          sed accusamus sapiente,laborum  <br /> illum voluptates temporibus nesciunt
           explicabo rerum facere similique tenetur quibusdam <br /> ex voluptatem illo
          autem perferendis asperiores architecto.
        </p>
        <h2>Interest</h2>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          quam obcaecati?   <br /> Amet corrupti est officiis incidunt facilis id beatae
          sed accusamus sapiente,laborum  <br /> illum voluptates temporibus nesciunt
           explicabo rerum facere similique tenetur quibusdam <br /> ex voluptatem illo
          autem perferendis asperiores architecto.
        </p>
      </div>

        <div className='icon'>
            <a ><img src={facebook} alt="" /></a>
            <a > <img src={twitter} alt="" /></a>
           <a ><img src={linkedin} alt="" /></a>
            <a >  <img id='github' src={github} alt="" /></a>
          

        </div>

    </div>
  )
}

export default BusinessCard;
