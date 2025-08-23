


const Home =()=>{

    return(
        <div className="parent-container">
            <div className="main">
                <div className="header card-col">
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
                        className="middlel-img"
                        aria-hidden="true"

                    />
                    <div className="header-content">
                        <p className="nor-font font-mi">Albert</p>
                        <p className="sub-font">-Top dog: Mongrel</p>
                    </div>
                </div>
                <div className="middler">
                    <img
                        src="src/assets/images/dog-all.jpeg"
                        alt="dogs"
                        aria-hidden="true"

                        className="middler-img"
                    />
                    <div className="header-content">
                        <p className="nor-font font-mi">Adopt don't shop!</p>
                    </div>

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
