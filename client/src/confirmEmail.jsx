import React from "react";

export default function ConfirmEmail () {
    function sendData () {
        
    }
    
    return (
    <>
		<main className="form">
            <form className="ConfirmEmail">
                <h1>Confirm Email</h1>
                <p>Check the confirmation code we sent to your email</p>

                <div className="inputs">
                    <label htmlFor="code">
                        <input type="text" id="password" maxLength={9} placeholder="XXX-XXX-XXX" />
                    </label>
                </div>

                <button className="submit" onClick={() => {sendData()}}>Register</button>
            </form>
		</main>
    </>
    )
}