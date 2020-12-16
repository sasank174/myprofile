import React from "react";

function Logos() {
return (
<ul className="sidenav">
    <li><a rel='noreferrer' target="_blank" href="https://www.facebook.com/">Facebook <i className="fab fa-facebook-f"></i></a></li>
    <li><a rel='noreferrer' target="_blank" href="https://www.instagram.com/accounts/login/">Instagram <i
                className="fab fa-instagram"></i></a></li>
    <li><a rel='noreferrer' target="_blank"
            href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome">Snapchat
            <i className="fab fa-snapchat-ghost"></i></a></li>
    <li><a rel='noreferrer' target="_blank" href="https://github.com/">Github <i className="fab fa-github"></i></a></li>
    <li><a rel='noreferrer' target="_blank" href="https://www.linkedin.com/login">Linkedin <i className="fab fa-linkedin-in"></i></a></li>
    <li><a rel='noreferrer' target="_blank" href="https://twitter.com/login?lang=en">Twitter <i className="fab fa-twitter"></i></a></li>
</ul>
);
}

export default Logos;