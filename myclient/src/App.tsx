import { useState } from 'react'

import './App.css'
import StarCard from "./components/StarCard/StarCard.tsx";
import Navbar from "./components/Nav/NavBar.tsx";

const starList = [
    {
        id:"0001",
        name: "Ma Dong-Seok",
        origin: "Korea",
        work: ["The Outlaws(2017)", "Train To Busan(2016)"],
        url: ["https://example.com", "https://twitter.com/janedoe"],
        extraInfo: true,
        fanbase: 1500000,
        netWorth: 5000000,
        photoUrl: "MaDong.png" // This will resolve to /images/jane.jpg
    },
    {
        id:"0002",
        name: "Gong Yoo",
        origin: "Korea",
        work: ["Guardian: The Lonely and Great God(2017)", "Train To Busan(2016)"],
        url: ["https://example.com", "https://twitter.com/janedoe"],
        extraInfo: true,
        fanbase: 1500000,
        netWorth: 5000000,
        photoUrl: "GongYoo.png" // This will resolve to /images/jane.jpg
    },
]
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar />
        <div className="parent-container">
          <div className="main">
              <div className="header card-col ">
                  <img
                      src="src/assets/images/dog-odette-1.jpeg"
                      alt="Odette"
                      className="header-img"
                      aria-hidden="true"
                      // width="120"
                      // height={"120"}
                  />
                  <div className="header-content">
                      <p className="title-font">Odette <span className="yl-font">10x</span> </p>
                      <p className="sub-font">-Top dog: Terrier cross</p>
                  </div>

              </div>
              <div className="middlel try-bg">middlel text</div>
              <div className="middler">
                  <p className="nor-font font-mi">Maintain a consistent posting schedule.</p>
                  <img
                      src="./assets/images/illustration-consistent-schedule.webp"
                      alt=""
                      aria-hidden="true"
                      width="416"
                      className="middler-img-clip"
                  />
              </div>
              <div className="right try-bg">right text</div>
              <div className="middlerb try-bg">middlerb text</div>
              <div className="middleb try-bg">middleb text</div>
              <div className="left try-bg">left text</div>
              <div className="leftb try-bg">leftb text</div>

          </div>
        </div>
      </>


  )
}

export default App
