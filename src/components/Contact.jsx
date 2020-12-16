import React from "react";

function Contact() {
return (
<section className="contact" id="contact">
    <div className="card">
        <div className="front" id="ca3">
            <h1>CONTACT</h1>
        </div>
        <div className="back">
            <div className="contactcard">
                <div className="contactone">
                    <h2><i className="fas fa-map-marker-alt"></i> Contact</h2>
                </div>
                <div className="contacttwo">
                    <div className="bar"></div>
                    <div className="para">
                        <p><b>Place:</b> Guntur,Andhra Pradesh,India</p>
                        <p><b>Phone:</b> +91 8106623632</p>
                        <p><b>Email:</b>perumallasasank123@gmail.com</p>
                        <img src="debit.png" alt="debit" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default Contact;