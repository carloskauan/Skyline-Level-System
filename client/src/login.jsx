import React from "react";
import Providers from "./components/Providers";

export default function Login () {
    function sendData () {
        
    }

    return (
    <>
		<main className="form">
            <form className="login">
                <h1>Login</h1>
                
                <Providers/>

                <div className="inputs">
                    <label htmlFor="email" onClick={(e) => {e.target.parentNode.classList.add("focus")}}>
                        <span>Email:</span>

                        <input type="text" id="email" onClick={(e) => {e.target.placeholder="Please your email here"}} />
                    </label>

                    <label htmlFor="password" onClick={(e) => {e.target.parentNode.classList.add("focus")}}>
                        <span>Email:</span>

                        <input type="password" id="password" onClick={(e) => {e.target.placeholder="lease your email here"}} />
                    </label>
                </div>

                <button className="submit" onClick={() => {sendData()}}>Register</button>
            </form>
		</main>
    </>
    )
}