import React from "react";

function About() {
return (
<section className="about" id="about">
    <div className="card">
        <div className="front">
            <h1>ABOUT</h1>
        </div>
        <div className="back">
            <div className="profinfo">
                <img src="me.png" alt="noimage" />
                <h1>ABOUT ME:-</h1>
                <p>I'm Perumalla Sasank, a second-year B.Tech(Information Technology) student at Vellore Institute of
                    Technology, Vellore, and an alumnus of Sri Chaitanya My goals are achieving excellent skills in Web
                    designing, Dynamic Web projects, Core Java, and Advanced Python. my known languages are Core Java,
                    Python, dynamic web projects using Express js and database connectivity using Mongo, static web
                    designing using Html, Css and React.</p>
            </div>
        </div>
    </div>
</section>
);
}

export default About;