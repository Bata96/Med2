import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Footer() {

    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_ygdc4vg', 'template_r119ph7', form.current, 'xxwFC5CBOzXsD2DYJ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                toast("Vaša poruka je uspešno poslata!");
            }, (error) => {
                console.log(error.text);
                toast("Došlo je do greške. Pokušajte ponovo.");
            });
        };

    return (
        <div id="footer">
            <div className="container">
            <div>
                <div className="kontakt">
                    <p>Poljoprivredno gazdinstvo <br/>Kazimirović.</p>
                </div>
            </div>
            <div>
                <div className="kontakt">Adresa:
                    <p>Fruškogorska 6, Irig</p>
                    <p>22406 Irig, Srbija</p>
                </div>
                <div className="kontakt"> Telefon:
                    <p>069-17-02-996</p>
                    <p>022-461-186</p>
                </div>
            </div>
            <div>
                <div className="kontakt">E-mail:
                    <p>p.g.kazimirovic@gmail.com</p>
                </div>
                <div className="kontakt"> Mreze:
                    <p className="mreze">
                        <a href="https://sr-rs.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagramSquare/></a> 
                    </p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className="name" type="text" name="user_name" required />
                <label>Email</label>
                <input className="email" type="email" name="user_email" required />
                <label>Message</label>
                <textarea className="message" name="message" />
                <input className="submit" type="submit" value="Send" />
            </form>
            <ToastContainer 
            style={{textAlign: "center"}}
            position='top-center'
            theme='light'
            autoClose={false}
            closeButton={false}
            closeOnClick/>
            </div>
        </div>
    );
}