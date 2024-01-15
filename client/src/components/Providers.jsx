import React from "react";

export default function Providers () {
    return (
    <div className="providers">
        <div className="groupBtns">
            <button><img src="images/icon_github.svg" alt="icon for Github"></img>Github</button>
            <button><img src="images/icon_google.svg" alt="icon for Google"></img>Google</button>
        </div>

        <div className="division">
            <div className="line"></div>

            <span>OR</span>
        </div>
    </div>
    )
}