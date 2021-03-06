import React from "react";
import LogoutBtn from "./Auth/LogoutBtn";
import "../styles/App.css"

const Header = ({ logoutHandler }) => (
    <div className="header">
            <div className="logout-button">
                <LogoutBtn logoutHandler={logoutHandler} />
            </div>
            <div className="tagline">
                Fitness Tracking App
            </div>
    </div>
);

export default Header;