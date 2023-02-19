import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [izlog] = useState([
        {src: "https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE=", alt: "med", link: "/med", text: "Med" },
        {src: "http://agronomija.rs/wp-content/uploads/2014/03/%C5%A0ljivovica.jpg", alt: "pića", link: "/pića", text: "Pića"},
        {src: "https://p4.wallpaperbetter.com/wallpaper/395/490/433/apricot-wallpaper-preview.jpg", alt: "voce", link: "/voće", text: "Voće"},
        {src: "https://www.mashed.com/img/gallery/the-easiest-way-to-make-homemade-jam-without-canning/l-intro-1661396709.jpg", alt: "džem", link: "/džem", text: "Džemovi"}
    ]);

    return (
        <div className="homepage">
            <div className="bojaPozadine">
                <div className="izlog">
                    <h2>DOBRODOŠLI!</h2>
                    <p className="ponuda">Naša ponuda:</p>
                    <div className="slike">
                        {izlog.map((item, index) => <Link className="link" key={index} to={item.link}><div><img src={item.src} alt={item.alt}/><p>{item.text}</p></div></Link>)}
                    </div>
                </div>
            </div>
        </div>
    );
}