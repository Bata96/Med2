import { BsTrash } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function Cart({korpa, setKorpa, prazna, setPrazna, stavke, setStavke}) {
    const [ukupno, setUkupno] = useState(0);
    const [koli, setKoli] = useState(0);
    const racun = useRef([]);

    useEffect(() => {
        setKorpa(korpa);
        racun.current = korpa.map((item) => item.cena * item.kol);
        if (racun.current.length > 1) {
            setUkupno(racun.current.reduce((a, b) => a + b));
        } else {
            setUkupno(racun.current);
        };
            
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [koli])

    const oduzmi = (id) => {
        const proizvod = document.getElementById(id);
        const broj = proizvod.id; 
        const artikal = korpa.filter((item) => item.id === broj);
        if (artikal[0].kol === 1) {
            artikal[0].kol = 1;
        } else {
            artikal[0].kol = artikal[0].kol - 1 ;
            setKoli(koli - 1);
            setStavke(stavke - 1);
        }
    }

    const dodaj = (id) => {
        const proizvod = document.getElementById(id);
        const broj = proizvod.id; 
        const artikal = korpa.filter((item) => item.id === broj);
        artikal[0].kol = artikal[0].kol + 1;
        setKoli(koli + 1);
        setStavke(stavke + 1);
    }

    const obrisi = (id) => {
        const element = document.getElementById(id);
        const artikal = korpa.filter((item) => item.id === element.id);
        const index = korpa.indexOf(artikal[0]);
        if (korpa.length === 1) {
            setPrazna(["prazna"]);
            korpa.splice(index, 1);
            setKoli(koli - 1);
            setStavke(0);
            artikal[0].kol = 1;
        } else {
            korpa.splice(index, 1);
            setKoli(koli + 1);
            setStavke(stavke - artikal[0].kol);
            artikal[0].kol = 1;
        }
    }

    return (
        <div className="kupovina">
            <h2>Vaša korpa:</h2>
            {prazna.map((item,index) => {
                if(prazna[0] === "prazna") {
                    return <div className="prazno" key={item}><p>Vaša korpa je trenutno prazna.</p><Link className="link" to="/"><div>Početna strana</div></Link></div>
                } else {
                    return <div key={index} className="glavniDiv"> 
                    <div className="tabela">
                    <div>Proizvod</div>
                    <div>Cena</div>
                    <div>Količina</div>
                    <div>Ukupno</div>
                    <div></div>
                    </div>
                    <div className="tabelaSaProizvodima">
                    {korpa.map((item) =>  <div key={item.key} id={item.id} className="kolone">
                        <div  className="proizvod"><Link className="link" to={"/"+ item.kod} ><img src={item.src} alt={item.alt} /></Link> {item.ime}</div>    
                        <div >{item.cena + " RSD"}</div>
                        <div  className="kolicina"><button onClick={()=>{oduzmi(item.id)}}>-</button>{item.kol}<button onClick={()=>{dodaj(item.id)}}>+</button></div>
                        <div>{item.cena * item.kol + " RSD"}</div>
                        <div onClick={()=> {obrisi(item.id)}} ><BsTrash className="brisanje"/></div>
                        </div>
                    )}
                    <div className="ukupno">
                        <div>Ukupno:</div><div>{ukupno + " RSD"}</div>
                    </div>
                        
                    </div>
                        <div className="zavrsi">
                            <div>Završi kupovinu</div>
                        </div>
                    </div>
                
            }
            })}
        </div>
    );
}