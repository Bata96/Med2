import {useState } from "react";

export default function Pčele({proizvodi, dodaj, korpa, stavke, setStavke}) {
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

    
    return (
        <div className="pčele">
            <div className="pozadina">
            <h2 className="vrsteMeda">VRSTE MEDA U PONUDI:</h2>
            <div className="ponuda">
                {proizvodi.filter((item) => item.kod === "med")
                          .map((item, index) => <div className="artikli" id={item.id} key={index}>
                            <img src={item.src} alt={item.alt} />
                            <p className="naziv">{item.ime + " " + item.kg}</p>
                            <p className="cena">{item.cena + " RSD"}</p>
                            <div className="kolicina"><button onClick={()=>{oduzmi(item.id)}}>-</button>{item.kol2}<button onClick={()=>{plus(item.id)}}>+</button></div>
                            <div className="korpa" onClick={()=>{dodaj(item.id); reset(item.id);}}>Dodaj u korpu</div></div>)}
            </div>
            <h2 className="ostaliProizvodi ">OSTALI PROIZVODI:</h2>
            <div className="ostalo">
            {proizvodi.filter((item) => item.kod === "pp")
                          .map((item, index) => <div className="artikli" id={item.id} key={index}>
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