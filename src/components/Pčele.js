

export default function Pčele({proizvodi, dodaj}) {

    
    return (
        <div className="pčele">
            <div className="pozadina">
            <h2 className="vrsteMeda">VRSTE MEDA U PONUDI:</h2>
            <div className="ponuda">
                {proizvodi.filter((item) => item.kod === "med")
                          .map((item, index) => <div className="artikli" id={item.id} key={index}><img src={item.src} alt={item.alt} /><p className="naziv">{item.ime + " " + item.kg}</p><p className="cena">{item.cena + " RSD"}</p><div className="korpa" onClick={()=>{dodaj(item.id)}}>Dodaj u korpu</div></div>)}
            </div>
            <h2 className="ostaliProizvodi ">OSTALI PROIZVODI:</h2>
            <div className="ostalo">
            {proizvodi.filter((item) => item.kod === "pp")
                          .map((item, index) => <div className="artikli" id={item.id} key={index}><img src={item.src} alt={item.alt} /><p className="naziv">{item.ime + " " + item.kg}</p><p className="cena">{item.cena + " RSD"}</p><div className="korpa" onClick={()=>{dodaj(item.id)}}>Dodaj u korpu</div></div>)}
            </div>
            </div>
        </div>
    );
}