import React from "react";
import propic from "../propic.jpg";
import Typed from "react-typed";
const Header = () => {
    return (
        < div className="header-wraper" >
          
            <div className="main-info">
                <img className="propic" src={propic} alt="propic" />
                <Typed
                    className="typed-text"
                    strings={["Hello!", "I\'m Sahana", "ReactJS Developer"]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                />
               

            </div>
        </div >
    );
    }


export default Header;
