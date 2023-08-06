import React from "react";

function HobbyLinks() {
    const hobbyLinks = [
        "www.amazon.com",
        "www.google.com"
    ];

    return(
        <div>
            <a href={hobbyLinks[0]}>Amazon </a>
            <br/>
            <a href={hobbyLinks[1]}>Google </a>
        </div>
    );
};

export default HobbyLinks;