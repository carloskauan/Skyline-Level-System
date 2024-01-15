import React from "react";
import Providers from "./components/Providers";

export default function Register () {
    function sendData () {
        
    }
    
    return (
    <>
		<main className="form">
            <form className="login">
                <h1>Register</h1>
                
                <Providers/>

                <div className="inputs">
                    <label htmlFor="name" onClick={(e) => {e.target.parentNode.classList.add("focus")}}>
                        <span>Name:</span>

                        <input type="text" id="name" onClick={(e) => {e.target.placeholder="Please your Name here"}} />
                    </label>

                    <label htmlFor="email" onClick={(e) => {e.target.parentNode.classList.add("focus")}}>
                        <span>Email:</span>

                        <input type="text" id="email" onClick={(e) => {e.target.placeholder="Please your email here"}} />
                    </label>

                    <label htmlFor="password" onClick={(e) => {e.target.parentNode.classList.add("focus")}}>
                        <span>Password:</span>

                        <input type="password" id="password" onClick={(e) => {e.target.placeholder="lease your email here"}} />
                    </label>
                </div>

                <button className="submit" onClick={() => {sendData()}}>Register</button>
            </form>
		</main>
    </>
    )
}