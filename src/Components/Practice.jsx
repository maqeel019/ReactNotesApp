// import logo from "../logo.svg"
import ContactCards from './ContactCards'
import './practice.css'
import Dp from './images/image1.jpg'
import Dp2 from './images/image2.jpg'
import Dp3 from './images/image3.jpg'
import Dp4 from './images/image4.jpg'
import icon from './images/logo192.png'

function Practice() {
  //   const fname = "Aqeel"
  //   const lname = "Khan"
  //   const date =   new Date()
  //   const hours  = date.getHours()

  //   let timeOfDay

  //   if(hours < 12){
  //     timeOfDay = "Morning"
  //   }
  //   else if(hours>12 && hours < 17){
  //             timeOfDay = "AfterNoon"
  //   }
  //  else if(hours>17 && hours < 21){
  //             timeOfDay = "Evening"
  //   }
  //   else{
  //     timeOfDay = "Night"
  //   }

  return (
    <div>
      {/* Practice */}

      {/* <h1> Hello {fname} {lname}!</h1>
      <h2>Today date is : {date.getDate()},{date.getMonth()},{date.getFullYear()}</h2>
      <h2>Hello! Good {timeOfDay}</h2>
      <ol>
            <li>What if!</li>
            <li>You found someBody</li>
            <li>You put me in the past</li>
            <li>I dont even know</li>
            <li>Our memories will last</li>
        </ol> */}
      {/* 
                                                          Contact Cards */}

      <div class="container text-center ">
        <div class="row ">
          <div class="col-6">
            <ContactCards
              image={Dp}
              name="Aqeel Khan"
              number="0341-09905547"
              icon={icon}
              email="aqeelkhan@gmail.com"
            />
          </div>
          <div class="col-6">
            <ContactCards
              image={Dp4}
              name="Aqeel Khan"
              number="0341-09905547"
              icon={icon}
              email="aqeelkham@gmail.com"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <ContactCards
              image={Dp2}
              name="Aqeel Khan"
              number="0341-09905547"
              icon={icon}
              email="aqeelkham@gmail.com"
            />
          </div>
          <div class="col-6">
            <ContactCards
              image={Dp3}
              name="Aqeel Khan"
              number="0341-09905547"
              icon={icon}
              email="aqeelkham@gmail.com"
            />
          </div>
        </div>
      </div>

      <footer>
        <small> 2023 AK019 React Developer. All rights are reserved.</small>
      </footer>
    </div>
  )
}

export default Practice
