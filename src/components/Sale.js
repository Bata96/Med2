import { useState } from "react";

export default function Sale({proizvodi, dodaj}) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="prodaja">
            <div className="pozadina">
            <div className="filter"><h2>Prodavnica:</h2><input value={text} onChange={handleChange} placeholder="Pretrazi..." ></input></div>
                <div className="ponuda">
                {proizvodi.filter((item) => item.ime.toLowerCase().includes(text.toLowerCase()))
                          .map((item, index ) => <div id={item.id} className="artikli" key={index}><img src={item.src} alt={item.alt} /><p className="naziv">{item.ime + " " + item.kg}</p><p className="cena">{item.cena + " RSD"}</p><div className="korpa" onClick={()=>{dodaj(item.id)}}>Dodaj u korpu</div></div>)}
                </div>
            </div>
        </div>
    );
}