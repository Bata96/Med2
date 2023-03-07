import { useState } from "react";

export default function Sale({proizvodi, dodaj, stavke, setStavke, korpa}) {
    const [text, setText] = useState("");
    const [količi, setKoli] = useState(1);

    const oduzmi = (id) => {
        const proizvod = document.getElementById(id);
        const broj = proizvod.id; 
        const artikal = korpa.filter((item) => item.id === broj);
        if (artikal[0].kol === 1) {
            artikal[0].kol = 1;
        } else {
            artikal[0].kol = artikal[0].kol - 1 ;
            setKoli(količi - 1);
            setStavke(stavke - 1);
        }
    }

    const plus = (id) => {
        const proizvod = document.getElementById(id);
        const broj = proizvod.id; 
        const artikal = proizvodi.filter((item) => item.id === broj);
        artikal[0].kol = artikal[0].kol + 1;
        artikal[0].kol2 = artikal[0].kol2 + 1;
        setKoli(količi + 1);
    }

    const reset = (id) => {
        const proizvod = document.getElementById(id);
        const broj = proizvod.id; 
        const artikal = proizvodi.filter((item) => item.id === broj);
        artikal[0].kol2 = 1;
        //setKoli(1);
    }


    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="prodaja">
            <div className="pozadina">
            <div className="filter"><h2>Prodavnica:</h2><input value={text} onChange={handleChange} placeholder="Pretrazi..." ></input></div>
                <div className="ponuda">
                {proizvodi.filter((item) => item.ime.toLowerCase().includes(text.toLowerCase()))
                          .map((item, index ) => <div id={item.id} className="artikli" key={index}>
                            <img src={item.src} alt={item.alt} />
                            <p className="naziv">{item.ime + " " + item.kg}</p>
                            <p className="cena">{item.cena + " RSD"}</p>
                            <div className="kolicina"><button onClick={()=>{oduzmi(item.id)}}>-</button>{item.kol2}<button onClick={()=>{plus(item.id)}}>+</button></div>
                            <div className="korpa" onClick={()=>{dodaj(item.id); reset(item.id);}}>Dodaj u korpu</div></div>)}
                </div>
            </div>
        </div>
    );
}