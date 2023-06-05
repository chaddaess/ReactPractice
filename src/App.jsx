
import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "../src/Navbar/Navbar.jsx";
import "../src/MainConent/MainConent.css";
import "../src/Navbar/Navbar.css"
import Bg from "../src/assets/bg-react.png"
import MainContent from "../src/MainConent/MainContent"

export default function  Page(){
    return(
        <>
            <Navbar/>
            <MainContent/>
        </>
    )
}