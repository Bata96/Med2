export default function Pića({proizvodi, dodaj}) {
    return (
        <div className="pice">
            <div className="pozadina">
            <div className="ponuda">
                {proizvodi.filter((item) => item.kod === "pića")
                          .map((item, index) => <div id={item.id} key={index} className="artikli"><img src={item.src} alt={item.alt} /><p className="naziv">{item.ime + " " + item.kg}</p><p className="cena">{item.cena + " RSD"}</p><div className="korpa" onClick={()=>{dodaj(item.id)}}>Dodaj u korpu</div></div>)}
            </div>
            </div>
        </div>
    );
}