import React from "react"

function Header(){
    return(
        <div className={"header--container"}>
            <img src={require("../images/troll-face.png")} alt={"troll-face"} className={"header--troll-face"}/>
            <h1 className={"header--title"}>Meme Generator</h1>
        </div>
    )
}

export default Header;
