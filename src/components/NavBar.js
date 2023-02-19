import { Link } from "react-router-dom";
import {BsCart} from "react-icons/bs";
import { useState } from "react";

export default function NavBar({stavke}) {
    const [lista, setLista] = useState("off");
    const [klasa, setKlasa] = useState("on");
    
    const menu = () => {
        if (klasa === "on") {
            setLista("on");
            setKlasa("off");
        } else {
            setLista("off");
            setKlasa("on");
        }
    }

    return (
        <div className="navBar">
            <div className="sirina">
                <Link to="/" className="logo"><h1>Kazimirović</h1></Link>
                <ul className="lista">
                    <Link className="link" to="/"><li>Početna</li></Link> 
                    <Link className="link" to="/prodaja"><li>Prodaja</li></Link> 
                    <Link className="link" to="/galerija"><li>Galerija</li></Link> 
                    <a className="link" href="#footer"><li>Kontakt</li></a> 
                    <Link className="link" to="/korpa"><li><BsCart/><p>{stavke}</p></li></Link> 
                </ul>
                <div className="hamburger" onClick={menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className={"lista-" + lista}>
                    <Link className="link" to="/"><li>Početna</li></Link> 
                    <Link className="link" to="/prodaja"><li>Prodaja</li></Link> 
                    <Link className="link" to="/galerija"><li>Galerija</li></Link> 
                    <a className="link" href="#footer"><li>Kontakt</li></a> 
                    <Link className="link" to="/korpa"><li><BsCart/><p>{stavke}</p></li></Link> 
                </ul>
                </div>
            </div>
        </div>
    );
}