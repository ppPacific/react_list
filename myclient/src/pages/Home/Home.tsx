


const Home =()=>{

    return(
        <div className="parent-container">
            <div className="main">
                <div className="header card-col ">
                    <img
                        src="src/assets/images/dog-odette-1.jpeg"
                        alt="Odette"
                        className="header-img"
                        aria-hidden="true"

                    />
                    <div className="header-content">
                        <p className="title-font">Odette <span className="yl-font">10x</span> </p>
                        <p className="sub-font">-Top dog: Terrier cross</p>
                    </div>

                </div>
                <div className="middlel">
                    <img
                        src="src/assets/images/dog-albert-1.jpeg"
                        alt="Jimmy"
                        className="header-img"
                        aria-hidden="true"

                    />
                    <div className="header-content">
                        <p className="nor-font font-mi">Jimmy</p>
                        <p className="sub-font">-Top dog: Mongrel</p>
                    </div>
                </div>
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
    )
}

export default Home;
