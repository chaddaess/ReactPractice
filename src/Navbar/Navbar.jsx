import React from "react";
import reactLogo from "../assets/react.svg"

export default function Navbar() {
    return (

        <div className="flex-box">
            <div className="right">
                <img src={reactLogo} alt="ractimg"/>
                <h3>ReactFacts</h3>
            </div>
            <div className="left">
                <h3>React Course-Project1</h3>
            </div>

        </div>


    );
}