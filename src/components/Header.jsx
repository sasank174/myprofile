import React, { useState } from "react";

function Header() {
const [navbar,setnavbar] = useState(false);
const changebackgroung = () => {
if(window.scrollY >= 500){
setnavbar(true);
}else{
setnavbar(false);
}
};
window.addEventListener("scroll",changebackgroung);

return (
<header className={navbar ? 'header active' : 'header' }>
    <a href="#home">HOME</a>
    <a href="#about">ABOUT</a>
    <a href="#profile">PROFILE</a>
    <a href="#contact">CONTACT</a>
</header>
);
}

export default Header;